const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./src/data/department_subpages.json', 'utf8'));

let count = 0;
let keys = [];

for (const [dept, pages] of Object.entries(data)) {
  for (const [pageKey, pageData] of Object.entries(pages)) {
    if (pageData.content && Array.isArray(pageData.content)) {
      const hasRogue = pageData.content.some(item => item.type === 'document' && item.href && item.href.includes('Faculty_Recruitment'));
      if (hasRogue) {
        count++;
        keys.push(dept + ' -> ' + pageKey);
      }
    }
  }
}

console.log('Found in ' + count + ' pages. Examples: ' + keys.slice(0, 10).join(', '));
