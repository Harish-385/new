const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const publicDir = path.join(__dirname, 'public');

// Recursively get all files in a directory
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });
  return arrayOfFiles;
}

const allPublicFiles = getAllFiles(publicDir);
console.log(`Found ${allPublicFiles.length} files in public directory.`);

// Get used files from source code
function getUsedMedia() {
  const usedMedia = new Set();
  const srcDir = path.join(__dirname, 'src');
  const srcFiles = getAllFiles(srcDir);
  
  const regex = /["'](\/(?:media|assets|pdfs)\/[^"']+)["']/g;
  // Also look for just media/... without leading slash just in case
  const regex2 = /["'](?:media|assets|pdfs)\/[^"']+["']/g;

  // Since department_subpages.json is huge, we'll parse it explicitly
  // But regex on all files is safer to catch everything
  
  for (const file of srcFiles) {
    if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.json') || file.endsWith('.js') || file.endsWith('.css')) {
      const content = fs.readFileSync(file, 'utf8');
      
      let match;
      while ((match = regex.exec(content)) !== null) {
        usedMedia.add(match[1]);
      }
      
      let match2;
      while ((match2 = regex2.exec(content)) !== null) {
        let val = match2[0].slice(1, -1);
        if (!val.startsWith('/')) val = '/' + val;
        usedMedia.add(val);
      }
    }
  }
  return usedMedia;
}

const usedMediaSet = getUsedMedia();
console.log(`Found ${usedMediaSet.size} unique media references in source code.`);

// Map used media paths to actual file paths (case-insensitive for windows)
const usedMediaPaths = new Set();
for (const usedPath of usedMediaSet) {
  // Normalize path
  const normalized = path.join(publicDir, usedPath.replace(/\//g, path.sep));
  usedMediaPaths.add(normalized.toLowerCase());
}

let unusedFiles = [];
let totalUnusedSize = 0;

for (const file of allPublicFiles) {
  if (file.toLowerCase().includes('index.html') || file.toLowerCase().includes('vite.svg') || file.toLowerCase().includes('site.webmanifest')) {
     continue; // ignore root public files
  }
  
  if (!usedMediaPaths.has(file.toLowerCase())) {
    const stats = fs.statSync(file);
    totalUnusedSize += stats.size;
    unusedFiles.push(file);
  }
}

console.log(`Found ${unusedFiles.length} unused files.`);
console.log(`Total unused size: ${(totalUnusedSize / (1024 * 1024 * 1024)).toFixed(2)} GB`);

fs.writeFileSync('unused_files.json', JSON.stringify(unusedFiles, null, 2));
