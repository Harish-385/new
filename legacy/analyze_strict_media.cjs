const fs = require('fs');
const path = require('path');

const publicMediaDir = path.join(__dirname, 'public', 'media');

// Recursively get all files in a directory
function getAllFiles(dirPath, arrayOfFiles) {
  if (!fs.existsSync(dirPath)) return [];
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });
  return arrayOfFiles;
}

const allMediaFiles = getAllFiles(publicMediaDir);
console.log(`Found ${allMediaFiles.length} files in public/media directory.`);

// Get used files from source code
function getUsedMedia() {
  const usedMedia = new Set();
  const srcDir = path.join(__dirname, 'src');
  const srcFiles = getAllFiles(srcDir);
  
  const regex = /["'](\/media\/[^"']+)["']/g;
  const regex2 = /["'](media\/[^"']+)["']/g;
  
  for (const file of srcFiles) {
    if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.json') || file.endsWith('.js') || file.endsWith('.css')) {
      const content = fs.readFileSync(file, 'utf8');
      
      let match;
      while ((match = regex.exec(content)) !== null) {
        usedMedia.add(match[1]);
      }
      
      let match2;
      while ((match2 = regex2.exec(content)) !== null) {
        let val = match2[1];
        if (!val.startsWith('/')) val = '/' + val;
        usedMedia.add(val);
      }
    }
  }
  return usedMedia;
}

const usedMediaSet = getUsedMedia();
console.log(`Found ${usedMediaSet.size} unique media references in source code.`);

// Map used media paths to actual file paths
const usedMediaPaths = new Set();
for (const usedPath of usedMediaSet) {
  const normalized = path.join(__dirname, 'public', usedPath.replace(/\//g, path.sep));
  usedMediaPaths.add(normalized.toLowerCase());
}

let unusedFiles = [];
let totalUnusedSize = 0;

for (const file of allMediaFiles) {
  if (!usedMediaPaths.has(file.toLowerCase())) {
    const stats = fs.statSync(file);
    totalUnusedSize += stats.size;
    unusedFiles.push(file);
  }
}

console.log(`Found ${unusedFiles.length} unused files in public/media.`);
console.log(`Total unused size: ${(totalUnusedSize / (1024 * 1024 * 1024)).toFixed(2)} GB`);

fs.writeFileSync('unused_media_files.json', JSON.stringify(unusedFiles, null, 2));
