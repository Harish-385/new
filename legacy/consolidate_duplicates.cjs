const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const publicDir = path.join(__dirname, 'public');
const srcDir = path.join(__dirname, 'src');

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

// 1. Collect used media
const usedMediaSet = new Set();
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

// 2. Identify used files physically present
const usedMediaPathsMap = new Map();
for (const usedPath of usedMediaSet) {
  const normalized = path.join(publicDir, usedPath.replace(/\//g, path.sep)).toLowerCase();
  usedMediaPathsMap.set(normalized, usedPath);
}

let usedFiles = [];
for (const file of allPublicFiles) {
  if (usedMediaPathsMap.has(file.toLowerCase())) {
    usedFiles.push(file);
  }
}

// 3. Hash them
function getHash(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const hashSum = crypto.createHash('md5');
  hashSum.update(fileBuffer);
  return hashSum.digest('hex');
}

console.log('Calculating hashes for used files...');
const hashMap = new Map();

for (const file of usedFiles) {
  try {
    const hash = getHash(file);
    if (!hashMap.has(hash)) {
      hashMap.set(hash, [file]);
    } else {
      hashMap.get(hash).push(file);
    }
  } catch(e) {}
}

// 4. Find duplicates and create a replacement map
const replacements = new Map(); // Map of { duplicate_public_path: canonical_public_path }
let filesToDelete = [];

for (const [hash, files] of hashMap) {
  if (files.length > 1) {
    // Sort by path length to make the shortest path the canonical one
    files.sort((a, b) => a.length - b.length);
    const canonicalFile = files[0];
    const canonicalPublicPath = usedMediaPathsMap.get(canonicalFile.toLowerCase());
    
    for (let i = 1; i < files.length; i++) {
      const dupFile = files[i];
      const dupPublicPath = usedMediaPathsMap.get(dupFile.toLowerCase());
      
      replacements.set(dupPublicPath, canonicalPublicPath);
      // Also account for paths without leading slash
      replacements.set(dupPublicPath.substring(1), canonicalPublicPath.substring(1));
      
      filesToDelete.push(dupFile);
    }
  }
}

console.log(`Found ${replacements.size / 2} duplicate paths to replace.`);
console.log(`Will delete ${filesToDelete.length} duplicate files.`);

// 5. Replace in src files
let updatedFilesCount = 0;
for (const file of srcFiles) {
  if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.json') || file.endsWith('.js') || file.endsWith('.css')) {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    
    for (const [dupPath, canPath] of replacements) {
      // Create a global replacement. We use simple string split/join to avoid regex escaping issues
      if (content.includes(dupPath)) {
        content = content.split(dupPath).join(canPath);
      }
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content);
      updatedFilesCount++;
    }
  }
}
console.log(`Updated ${updatedFilesCount} source files.`);

// 6. Delete duplicate files
let deletedCount = 0;
for (const file of filesToDelete) {
  try {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      deletedCount++;
    }
  } catch(e) {
    console.error(`Failed to delete ${file}`);
  }
}
console.log(`Deleted ${deletedCount} duplicate files.`);
