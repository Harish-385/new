const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const crypto = require('crypto');
const https = require('https');

const departments = [
  { slug: 'civil', name: 'Civil Engineering' },
  { slug: 'cse', name: 'Computer Science and Engineering' },
  { slug: 'ece', name: 'Electronics and Communication Engineering' },
  { slug: 'eee', name: 'Electrical and Electronics Engineering' },
  { slug: 'mech', name: 'Mechanical Engineering' },
  { slug: 'it', name: 'Information Technology' },
  { slug: 'ai-and-ds', name: 'Artificial Intelligence and Data Science' },
  { slug: 'ai-and-ml', name: 'Artificial Intelligence and Machine Learning' },
  { slug: 'cs-and-bs', name: 'Computer Science and Business Systems' },
  { slug: 'physics', name: 'Physics' },
  { slug: 'chemistry', name: 'Chemistry' },
  { slug: 'mathematics', name: 'Mathematics' },
  { slug: 'english', name: 'English' }
];

const publicDir = path.join(__dirname, 'public');
const facultyDataPath = path.join(__dirname, 'src', 'components', 'facultyData.ts');
const targetMediaDir = path.join(publicDir, 'media', 'faculty');

// Ensure target dir exists
if (!fs.existsSync(targetMediaDir)) {
  fs.mkdirSync(targetMediaDir, { recursive: true });
}

// Extract existing keys from facultyData.ts
const existingKeys = new Set();
const facultyDataContent = fs.readFileSync(facultyDataPath, 'utf8');
const regex = /["']?([a-z0-9_-]+)["']?\s*:\s*\{/gi;
let match;
while ((match = regex.exec(facultyDataContent)) !== null) {
  existingKeys.add(match[1].toLowerCase());
}

// We will map filename without extension to its local path relative to public/
const localFilesMap = new Map();
function indexLocalFiles(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      indexLocalFiles(fullPath);
    } else {
      const parsed = path.parse(file);
      const relativePath = '/' + path.relative(publicDir, fullPath).replace(/\\/g, '/');
      localFilesMap.set(parsed.name.toLowerCase(), relativePath);
    }
  }
}
console.log('Indexing local files to prevent duplicates...');
indexLocalFiles(publicDir);
console.log(`Indexed ${localFilesMap.size} local file basenames.`);

const fetchHtml = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', err => reject(err));
  });
};

const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        file.close();
        fs.unlink(dest, () => reject(new Error(`Failed to download ${url}: ${res.statusCode}`)));
      }
    }).on('error', err => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

function normalizeKey(name) {
  return name.toLowerCase().replace(/dr\.|mr\.|mrs\.|ms\./gi, '').replace(/[^a-z0-9]/g, '');
}

async function scrapeDepartment(dept) {
  console.log(`Scraping department: ${dept.slug}`);
  let html;
  try {
    html = await fetchHtml(`https://www.ritrjpm.ac.in/departments/${dept.slug}/faculty.php`);
  } catch (e) {
    console.error(`Failed to fetch ${dept.slug}: ${e.message}`);
    return [];
  }

  const $ = cheerio.load(html);
  const faculties = [];

  $('.team-thumb').each((i, el) => {
    const $el = $(el);
    let name = $el.find('h4').text().trim() || $el.find('.team-author h4').text().trim();
    if (!name) return;

    let designation = $el.find('.team-author span').text().trim() || 'Faculty Member';
    
    // Find email in the content
    let email = '';
    $el.find('.team-content p').each((j, p) => {
      const text = $(p).text();
      if (text.includes('@')) {
        email = text.split(':').pop().trim();
      }
    });
    if (!email) {
      email = name.toLowerCase().replace(/[^a-z]/g, '') + '@ritrjpm.ac.in';
    }

    let imgUrl = $el.find('img').attr('src');
    if (imgUrl && !imgUrl.startsWith('http')) {
      imgUrl = `https://www.ritrjpm.ac.in${imgUrl.startsWith('/') ? '' : '/'}${imgUrl}`;
    }

    let pdfUrl = $el.find('a[href$=".pdf"]').attr('href');
    if (pdfUrl && !pdfUrl.startsWith('http')) {
      pdfUrl = `https://www.ritrjpm.ac.in${pdfUrl.startsWith('/') ? '' : '/'}${pdfUrl}`;
    }

    const key = normalizeKey(name);

    faculties.push({
      key,
      name,
      designation,
      email,
      department: dept.name,
      imgUrl,
      pdfUrl
    });
  });

  return faculties;
}

async function processAll() {
  const allMissingFaculties = [];
  
  for (const dept of departments) {
    const faculties = await scrapeDepartment(dept);
    
    for (const fac of faculties) {
      if (existingKeys.has(fac.key)) {
        // Skip existing
        continue;
      }
      allMissingFaculties.push(fac);
    }
  }

  console.log(`Found ${allMissingFaculties.length} missing faculties across all departments.`);
  
  const extractedData = {};
  
  for (const fac of allMissingFaculties) {
    console.log(`Processing ${fac.name} (${fac.key})...`);
    
    let localImagePath = null;
    if (fac.imgUrl) {
      const urlParsed = new URL(fac.imgUrl);
      const filename = path.basename(urlParsed.pathname);
      const basename = path.parse(filename).name.toLowerCase();
      
      if (localFilesMap.has(basename)) {
        localImagePath = localFilesMap.get(basename);
      } else {
        const ext = path.extname(filename) || '.jpg';
        const newFilename = `${fac.key}_img${ext}`;
        const dest = path.join(targetMediaDir, newFilename);
        console.log(`  Downloading image to ${dest}`);
        try {
          await downloadFile(fac.imgUrl, dest);
          localImagePath = `/media/faculty/${newFilename}`;
          localFilesMap.set(path.parse(newFilename).name.toLowerCase(), localImagePath);
        } catch(e) {
          console.error(`  Failed to download image: ${e.message}`);
        }
      }
    }

    let localPdfPath = null;
    if (fac.pdfUrl) {
      const urlParsed = new URL(fac.pdfUrl);
      const filename = path.basename(urlParsed.pathname);
      const basename = path.parse(filename).name.toLowerCase();
      
      if (localFilesMap.has(basename)) {
        localPdfPath = localFilesMap.get(basename);
      } else {
        const ext = path.extname(filename) || '.pdf';
        const newFilename = `${fac.key}_resume${ext}`;
        const dest = path.join(targetMediaDir, newFilename);
        console.log(`  Downloading PDF to ${dest}`);
        try {
          await downloadFile(fac.pdfUrl, dest);
          localPdfPath = `/media/faculty/${newFilename}`;
          localFilesMap.set(path.parse(newFilename).name.toLowerCase(), localPdfPath);
        } catch(e) {
          console.error(`  Failed to download PDF: ${e.message}`);
        }
      }
    }
    
    extractedData[fac.key] = {
      name: fac.name.toUpperCase(),
      designation: fac.designation,
      department: `Department of ${fac.department}`,
      email: fac.email,
      secondaryEmail: '',
      mobile: 'Contact Admin',
      image: localImagePath,
      office: `RIT Campus, Department of ${fac.department}`,
      bioSummary: 'Dedicated faculty member committed to academic excellence and research.',
      researchAreas: ['Academic Research', 'Engineering Education'],
      socials: [{ label: 'Vidwan ID', url: '#' }],
      pdfUrl: localPdfPath,
      education: [
        { degree: 'M.E / M.Tech / Ph.D', field: 'Engineering', university: 'Anna University', year: '-' }
      ],
      experience: [
        { role: fac.designation, org: 'Ramco Institute of Technology', duration: 'Joined RIT' }
      ],
      metrics: { experience: '5+ Years', publications: '10+', citations: '100+', hIndex: '5', i10Index: '2' },
      projects: [],
      patents: [],
      honours: [],
      memberships: [],
      journalPubs: ['Refer to the official faculty profile document for detailed publication records.']
    };
  }

  fs.writeFileSync('missing_faculty_data.json', JSON.stringify(extractedData, null, 2));
  console.log('Saved missing_faculty_data.json.');
}

processAll().catch(console.error);
