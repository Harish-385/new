const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./src/data/department_subpages.json', 'utf8'));
for (const [dept, pages] of Object.entries(data)) {
  for (const [key, val] of Object.entries(pages)) {
    if (key.toLowerCase().includes('awards') && key.toLowerCase().includes('faculty')) {
      console.log(dept + ' -> ' + key + ' has ' + (val.content ? val.content.length : 0) + ' items');
    }
  }
}
