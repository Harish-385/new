const fs = require('fs');
const path = require('path');

function formatFolderName(name) {
  return name.replace(/[^a-zA-Z0-9]/g, '_');
}

function processDepartmentData() {
  const dataPath = path.join(__dirname, '../src/data/department_subpages.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  let replacedCount = 0;

  for (const [deptCode, subpages] of Object.entries(data)) {
    for (const [subpageKey, subpageData] of Object.entries(subpages)) {
      const folderName = formatFolderName(subpageKey);
      
      function replaceInObj(obj) {
        if (Array.isArray(obj)) {
          obj.forEach(replaceInObj);
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
                obj[prop] = `/media/${deptCode}/${folderName}/${filename}`;
                replacedCount++;
              }
            }
          });
          Object.values(obj).forEach(replaceInObj);
        }
      }

      if (subpageData.content) {
        replaceInObj(subpageData.content);
      }
    }
  }

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  console.log(`Replaced ${replacedCount} links in department_subpages.json`);
}

function processFlatPagesData() {
  const dataPath = path.join(__dirname, '../src/data/scraped_content.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  let replacedCount = 0;

  for (const [pageKey, pageData] of Object.entries(data)) {
    const folderName = formatFolderName(pageData.title || pageKey);
    
    function replaceInObj(obj) {
      if (Array.isArray(obj)) {
        obj.forEach(replaceInObj);
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
              obj[prop] = `/media/generic/${folderName}/${filename}`;
              replacedCount++;
            }
          }
        });
        Object.values(obj).forEach(replaceInObj);
      }
    }

    if (pageData.content) {
      replaceInObj(pageData.content);
    }
  }

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  console.log(`Replaced ${replacedCount} links in scraped_content.json`);
}

processDepartmentData();
processFlatPagesData();
