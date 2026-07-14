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
    missingFiles.set(fullLocalPath, originalUrl);
  }
}

function processDepartmentData() {
  const dataPath = path.join(__dirname, '../original_dept.json');
  // Handle UTF-16 BOM that PowerShell sometimes adds
  let raw = fs.readFileSync(dataPath, 'utf8');
  if (raw.charCodeAt(0) === 0xFEFF || raw.charCodeAt(0) === 0xFFFE) {
      raw = fs.readFileSync(dataPath, 'utf16le');
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
      raw = fs.readFileSync(dataPath, 'utf16le');
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

processDepartmentData();
processFlatPagesData();

console.log(`Total missing files to download: ${missingFiles.size}`);
// Write missing files to a JSON so we can download them next
fs.writeFileSync(path.join(__dirname, '../missing_files.json'), JSON.stringify(Array.from(missingFiles.entries()), null, 2));
