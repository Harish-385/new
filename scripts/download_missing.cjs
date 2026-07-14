const fs = require('fs');
const path = require('path');
const https = require('https');

function formatFolderName(name) {
  return name.replace(/[^a-zA-Z0-9]/g, '_');
}

const missingFiles = new Map();

function checkFile(originalUrl, localPath) {
  const fullLocalPath = path.join(__dirname, '..', 'public', localPath);
  if (!fs.existsSync(fullLocalPath)) {
    // Only map if it's an absolute url starting with http
    if (originalUrl.startsWith('http')) {
      missingFiles.set(fullLocalPath, originalUrl);
    }
  }
}

function processDepartmentData() {
  const dataPath = path.join(__dirname, '../original_dept.json');
  let raw = fs.readFileSync(dataPath, 'utf8');
  if (raw.charCodeAt(0) === 0xFEFF || raw.charCodeAt(0) === 0xFFFE) {
      raw = raw.slice(1);
  }
  const data = JSON.parse(raw);

  for (const [deptCode, subpages] of Object.entries(data)) {
    for (const [subpageKey, subpageData] of Object.entries(subpages)) {
      const folderName = formatFolderName(subpageKey);
      
      function walk(obj) {
        if (Array.isArray(obj)) {
          obj.forEach(walk);
        } else if (obj !== null && typeof obj === 'object') {
          ['src', 'href'].forEach(prop => {
            if (typeof obj[prop] === 'string' && obj[prop].includes('ritrjpm.ac.in')) {
              let filename = '';
              try {
                const url = new URL(obj[prop]);
                filename = decodeURIComponent(url.pathname.split('/').filter(Boolean).pop() || '');
              } catch (e) {
                filename = decodeURIComponent(obj[prop].split('/').pop() || '');
              }
              if (filename) {
                const localPath = `/media/${deptCode}/${folderName}/${filename}`;
                checkFile(obj[prop], localPath);
              }
            }
          });
          Object.values(obj).forEach(walk);
        }
      }

      if (subpageData.content) {
        walk(subpageData.content);
      }
    }
  }
}

function processFlatPagesData() {
  const dataPath = path.join(__dirname, '../original_scraped.json');
  let raw = fs.readFileSync(dataPath, 'utf8');
  if (raw.charCodeAt(0) === 0xFEFF || raw.charCodeAt(0) === 0xFFFE) {
      raw = raw.slice(1);
  }
  const data = JSON.parse(raw);

  for (const [pageKey, pageData] of Object.entries(data)) {
    const folderName = formatFolderName(pageData.title || pageKey);
    
    function walk(obj) {
      if (Array.isArray(obj)) {
        obj.forEach(walk);
      } else if (obj !== null && typeof obj === 'object') {
        ['src', 'href'].forEach(prop => {
          if (typeof obj[prop] === 'string' && obj[prop].includes('ritrjpm.ac.in')) {
            let filename = '';
            try {
              const url = new URL(obj[prop]);
              filename = decodeURIComponent(url.pathname.split('/').filter(Boolean).pop() || '');
            } catch (e) {
              filename = decodeURIComponent(obj[prop].split('/').pop() || '');
            }
            if (filename) {
              const localPath = `/media/generic/${folderName}/${filename}`;
              checkFile(obj[prop], localPath);
            }
          }
        });
        Object.values(obj).forEach(walk);
      }
    }

    if (pageData.content) {
      walk(pageData.content);
    }
  }
}

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
        reject(new Error(`Server responded with ${response.statusCode}: ${response.statusMessage}`));
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

async function run() {
  processDepartmentData();
  processFlatPagesData();
  
  const entries = Array.from(missingFiles.entries());
  console.log(`Total missing files to download: ${entries.length}`);
  
  let successCount = 0;
  let failCount = 0;
  
  // Throttle downloads to 5 concurrent
  const concurrency = 5;
  
  for (let i = 0; i < entries.length; i += concurrency) {
    const batch = entries.slice(i, i + concurrency);
    await Promise.all(batch.map(async ([dest, url]) => {
      try {
        await downloadFile(url, dest);
        successCount++;
        if (successCount % 50 === 0) console.log(`Downloaded ${successCount} files...`);
      } catch (e) {
        console.error(`Failed to download ${url} -> ${e.message}`);
        failCount++;
      }
    }));
  }
  
  console.log(`Done! Successfully downloaded: ${successCount}. Failed: ${failCount}`);
}

run();
