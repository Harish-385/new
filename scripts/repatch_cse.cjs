const fs = require('fs');
const path = require('path');
const https = require('https');
const cheerio = require('cheerio');

const pagesToPatch = [
  'PEOs, POs, PSOs',
  'Course Outcome',
  'Research and Development',
  'News Letter / Magazine',
  'Students Notable Awards and Achievements',
  'Faculty Data',
  'Press Release',
  'Department Placement Data'
];

const dataPath = './src/data/department_subpages.json';
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const cse = data.cse;

function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchHTML(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
      return resolve('exists');
    }
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : require('http');
    const request = client.get(url, function(response) {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', function() {
          file.close(resolve);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      } else {
        console.log(`Failed (Status ${response.statusCode}) for URL: ${url}`);
        file.close();
        fs.unlink(dest, () => {});
        resolve('failed');
      }
    }).on('error', function(err) {
      console.log(`Failed (Error ${err.message}) for URL: ${url}`);
      fs.unlink(dest, () => {});
      resolve('failed');
    });
    request.setTimeout(15000, function() {
      request.destroy();
      resolve('timeout');
    });
  });
}

const deptCode = 'cse';
let downloadQueue = [];

async function patchAll() {
  for (const key of pagesToPatch) {
    if (!cse[key]) continue;
    const url = cse[key].url;
    console.log(`\nRe-Patching [${key}]...`);
    
    try {
      const html = await fetchHTML(url);
      const $ = cheerio.load(html);
      const wrapper = $('.single-service').first();
      
      let extractedContent = [];
      const subpageFolder = key.replace(/[^a-zA-Z0-9]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');

      if (wrapper.length) {
        wrapper.children().each((i, el) => {
          const tagName = el.tagName.toLowerCase();
          
          if (/^h[1-6]$/.test(tagName)) {
            const text = $(el).text().trim();
            if (text) {
              extractedContent.push({ type: 'heading', level: tagName, text: text });
            }
          } else if (tagName === 'p') {
            const text = $(el).text().trim();
            const imgs = $(el).find('img');
            const anchors = $(el).find('a');
            
            if (text) {
              extractedContent.push({ type: 'paragraph', text: text });
            }
            
            imgs.each((j, imgEl) => {
              const src = $(imgEl).attr('src');
              if (src) processMedia(src, 'image', extractedContent, subpageFolder, url);
            });
            
            anchors.each((j, aEl) => {
              const href = $(aEl).attr('href');
              const aText = $(aEl).text().trim() || 'Link';
              if (href && (href.toLowerCase().endsWith('.pdf') || href.toLowerCase().endsWith('.doc') || href.toLowerCase().endsWith('.docx'))) {
                processMedia(href, 'document', extractedContent, subpageFolder, url, aText);
              }
            });
          } else if (tagName === 'center' || tagName === 'div' || tagName === 'figure') {
            const imgs = $(el).find('img');
            imgs.each((j, imgEl) => {
              const src = $(imgEl).attr('src');
              if (src) processMedia(src, 'image', extractedContent, subpageFolder, url);
            });
            const anchors = $(el).find('a');
            anchors.each((j, aEl) => {
              const href = $(aEl).attr('href');
              const aText = $(aEl).text().trim() || 'Link';
              if (href && (href.toLowerCase().endsWith('.pdf') || href.toLowerCase().endsWith('.doc') || href.toLowerCase().endsWith('.docx'))) {
                processMedia(href, 'document', extractedContent, subpageFolder, url, aText);
              }
            });
          } else if (tagName === 'table') {
            const rows = [];
            $(el).find('tr').each((rIdx, tr) => {
              const cells = [];
              $(tr).find('th, td').each((cIdx, td) => {
                const a = $(td).find('a');
                if (a.length > 0) {
                  let href = a.attr('href');
                  const text = a.text().trim();
                  if (href) {
                     href = queueMediaDownload(href, subpageFolder, url);
                     cells.push({ text: text || 'Link', href: href });
                  } else {
                     cells.push($(td).text().trim());
                  }
                } else {
                  cells.push($(td).text().trim());
                }
              });
              if (cells.length > 0) rows.push(cells);
            });
            if (rows.length > 0) {
              extractedContent.push({ type: 'table', rows: rows });
            }
          }
        });
      }

      cse[key].content = extractedContent;
      console.log(`  Extracted ${extractedContent.length} items for ${key}`);
    } catch (e) {
      console.log(`  Failed to fetch/patch ${key}: ${e.message}`);
    }
  }

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  console.log(`\nUpdated department_subpages.json`);
  
  await runDownloads();
}

function queueMediaDownload(originalUrl, subpageFolder, pageUrl) {
  if (!originalUrl) return originalUrl;
  
  let fetchUrl = originalUrl;
  if (!fetchUrl.startsWith('http')) {
    if (fetchUrl.startsWith('/')) {
      fetchUrl = 'https://www.ritrjpm.ac.in' + fetchUrl;
    } else {
      fetchUrl = 'https://www.ritrjpm.ac.in/' + fetchUrl;
    }
  }
  
  // Extract filename safely
  let filename = '';
  try {
    const url = new URL(fetchUrl);
    filename = decodeURIComponent(url.pathname.split('/').filter(Boolean).pop() || '');
  } catch (e) {
    filename = decodeURIComponent(fetchUrl.split('/').pop() || '');
  }
  
  // Create a somewhat unique filename by incorporating part of the path
  // to avoid collisions like 'content_1.png'
  let uniqueFilename = filename;
  try {
    const url = new URL(fetchUrl);
    const parts = url.pathname.split('/').filter(Boolean);
    if (parts.length > 1) {
      uniqueFilename = parts[parts.length - 2] + '_' + filename;
    }
  } catch (e) {}
  
  if (filename) {
    const localPath = `/media/${deptCode}/${subpageFolder}/${uniqueFilename}`;
    const fullLocalPath = path.join(__dirname, '..', 'public', localPath);
    
    downloadQueue.push({ url: fetchUrl, dest: fullLocalPath });
    
    return localPath;
  }
  return originalUrl;
}

function processMedia(src, type, extractedContent, subpageFolder, pageUrl, text) {
  const localPath = queueMediaDownload(src, subpageFolder, pageUrl);
  if (localPath) {
    if (type === 'image') {
      extractedContent.push({ type: 'image', src: localPath, alt: 'Image' });
    } else if (type === 'document') {
      extractedContent.push({ type: 'document', href: localPath, text: text || 'View Document' });
    }
  }
}

async function runDownloads() {
  console.log(`\nDownloading ${downloadQueue.length} files with concurrency 20...`);
  
  let active = 0;
  let index = 0;
  let completed = 0;
  
  return new Promise(resolve => {
    function next() {
      if (index >= downloadQueue.length && active === 0) {
        return resolve();
      }
      
      while (active < 20 && index < downloadQueue.length) {
        const task = downloadQueue[index++];
        active++;
        downloadFile(task.url, task.dest).then((res) => {
          active--;
          completed++;
          if (completed % 10 === 0) console.log(`Progress: ${completed}/${downloadQueue.length}`);
          next();
        });
      }
    }
    next();
  });
}

patchAll().then(() => console.log('Done!'));
