const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./src/data/department_subpages.json', 'utf8'));

let standaloneDocs = new Map();

for (const [dept, pages] of Object.entries(data)) {
  for (const [pageKey, pageData] of Object.entries(pages)) {
    if (pageData.content && Array.isArray(pageData.content)) {
      for (const item of pageData.content) {
        if (item.type === 'document') {
          const href = item.href || 'unknown';
          standaloneDocs.set(href, (standaloneDocs.get(href) || 0) + 1);
        }
      }
    }
  }
}

console.log('Top standalone documents:');
const sorted = Array.from(standaloneDocs.entries()).sort((a, b) => b[1] - a[1]);
for (const [href, count] of sorted.slice(0, 10)) {
  console.log(`- ${count} times: ${href}`);
}
