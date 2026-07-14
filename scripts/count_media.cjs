const fs = require('fs');
const path = require('path');
const mediaDir = 'd:/ritrjpm_admin/public/media';

function countFiles(dir) {
  let count = 0;
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        count += countFiles(path.join(dir, entry.name));
      } else {
        count++;
      }
    }
  } catch (e) {}
  return count;
}

const folders = fs.readdirSync(mediaDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => ({ name: d.name, count: countFiles(path.join(mediaDir, d.name)) }))
  .sort((a, b) => b.count - a.count);

console.log('Files per folder in public/media:');
for (const f of folders) {
  if (f.count > 0) {
    console.log(`- ${f.name}: ${f.count} files`);
  }
}
