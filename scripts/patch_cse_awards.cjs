const fs = require('fs');
const path = require('path');
const https = require('https');
const cheerio = require('cheerio');

const content = fs.readFileSync('C:\\Users\\yashw\\.gemini\\antigravity-ide\\brain\\dae02344-2c98-4424-a6cd-afe293f59ccc\\.system_generated\\steps\\257\\content.md', 'utf8');
const $ = cheerio.load(content);
const wrapper = $('.single-service').first();

let extractedContent = [];

if (wrapper.length) {
  wrapper.children().each((i, el) => {
    const tagName = el.tagName.toLowerCase();
    
    if (tagName === 'h3') {
      const text = $(el).text().trim();
      if (text) {
        extractedContent.push({ type: 'heading', level: 'h3', text: text });
      }
    } else if (tagName === 'p') {
      const text = $(el).text().trim();
      if (text) {
        extractedContent.push({ type: 'paragraph', text: text });
      }
    } else if (tagName === 'center' || tagName === 'div') {
      const imgs = $(el).find('img');
      imgs.each((j, imgEl) => {
        const src = $(imgEl).attr('src');
        if (src) {
          extractedContent.push({ type: 'image', src: src, alt: 'Image' });
        }
      });
    }
  });
}

const dataPath = './src/data/department_subpages.json';
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Format local paths
const deptCode = 'cse';
const subpageFolder = 'Faculty_Awards_and_Achievements';

let downloadQueue = [];

extractedContent.forEach(item => {
  if (item.type === 'image') {
    let originalUrl = item.src;
    if (!originalUrl.startsWith('http')) {
      originalUrl = 'https://www.ritrjpm.ac.in/' + originalUrl.replace(/^\/+/, '');
    }
    
    let filename = '';
    try {
      const url = new URL(originalUrl);
      filename = decodeURIComponent(url.pathname.split('/').filter(Boolean).pop() || '');
    } catch (e) {
      filename = decodeURIComponent(originalUrl.split('/').pop() || '');
    }
    
    if (filename) {
      const localPath = `/media/${deptCode}/${subpageFolder}/${filename}`;
      const fullLocalPath = path.join(__dirname, '..', 'public', localPath);
      
      if (!fs.existsSync(fullLocalPath)) {
        downloadQueue.push({ url: originalUrl, dest: fullLocalPath });
      }
      
      item.src = localPath;
    }
  }
});

data.cse['Faculty Awards and Achievements'].content = extractedContent;

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`Updated department_subpages.json with ${extractedContent.length} items`);

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const file = fs.createWriteStream(dest);
    
    const request = https.get(url, function(response) {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', function() {
          file.close(resolve);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlink(dest, () => {});
        reject(new Error(`Server responded with ${response.statusCode}`));
      }
    }).on('error', function(err) {
      fs.unlink(dest, () => {});
      reject(err);
    });
    
    request.setTimeout(10000, function() {
      request.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

async function runDownloads() {
  console.log(`Need to download ${downloadQueue.length} images...`);
  for (const task of downloadQueue) {
    try {
      await downloadFile(task.url, task.dest);
      console.log(`Downloaded ${task.url}`);
    } catch (e) {
      console.error(`Failed to download ${task.url}: ${e.message}`);
    }
  }
  console.log('Done!');
}

runDownloads();
