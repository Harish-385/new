const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const publicDir = path.join(__dirname, 'public');

function getAllFiles(dirPath, arrayOfFiles) {
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

const allPublicFiles = getAllFiles(publicDir);

const usedMediaSet = new Set();
const srcDir = path.join(__dirname, 'src');
const srcFiles = getAllFiles(srcDir);

const regex = /["'](\/(?:media|assets|pdfs)\/[^"']+)["']/g;
const regex2 = /["'](?:media|assets|pdfs)\/[^"']+["']/g;

for (const file of srcFiles) {
  if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.json') || file.endsWith('.js') || file.endsWith('.css')) {
    const content = fs.readFileSync(file, 'utf8');
    
    let match;
    while ((match = regex.exec(content)) !== null) {
      usedMediaSet.add(match[1]);
    }
    
    let match2;
    while ((match2 = regex2.exec(content)) !== null) {
      let val = match2[0].slice(1, -1);
      if (!val.startsWith('/')) val = '/' + val;
      usedMediaSet.add(val);
    }
  }
}

// Find unused
const usedMediaPathsMap = new Map(); // normalized path -> original path
for (const usedPath of usedMediaSet) {
  const normalized = path.join(publicDir, usedPath.replace(/\//g, path.sep)).toLowerCase();
  usedMediaPathsMap.set(normalized, usedPath);
}

let unusedFiles = [];
let usedFiles = [];

for (const file of allPublicFiles) {
  if (file.toLowerCase().includes('index.html') || file.toLowerCase().includes('vite.svg') || file.toLowerCase().includes('site.webmanifest')) {
     continue;
  }
  
  if (!usedMediaPathsMap.has(file.toLowerCase())) {
    unusedFiles.push(file);
  } else {
    usedFiles.push(file);
  }
}

// Check duplicates among ALL files (to see if we can consolidate)
function getHash(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const hashSum = crypto.createHash('md5');
  hashSum.update(fileBuffer);
  return hashSum.digest('hex');
}

console.log('Calculating hashes for used files...');
const hashMap = new Map();
let duplicateSize = 0;
let duplicatesCount = 0;

for (const file of usedFiles) {
  try {
    const hash = getHash(file);
    if (!hashMap.has(hash)) {
      hashMap.set(hash, [file]);
    } else {
      hashMap.get(hash).push(file);
      const stats = fs.statSync(file);
      duplicateSize += stats.size;
      duplicatesCount++;
    }
  } catch(e) {}
}

console.log(`Found ${duplicatesCount} duplicate files within USED files.`);
console.log(`Potential space savings by consolidating used duplicates: ${(duplicateSize / (1024 * 1024 * 1024)).toFixed(2)} GB`);

// Let's also output a sample of duplicates
let sample = 0;
for (const [hash, files] of hashMap) {
  if (files.length > 1 && sample < 5) {
    console.log(`Hash: ${hash} has ${files.length} copies. Files: ${files.slice(0,3).join(', ')}...`);
    sample++;
  }
}

fs.writeFileSync('duplicates_info.json', JSON.stringify({ duplicatesCount, duplicateSizeGB: (duplicateSize / (1024 * 1024 * 1024)).toFixed(2) }, null, 2));
