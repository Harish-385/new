const fs = require('fs');
const path = require('path');

const unusedFiles = JSON.parse(fs.readFileSync('unused_media_files.json', 'utf8'));
const { replacements, filesToDelete } = JSON.parse(fs.readFileSync('strict_replacements.json', 'utf8'));

let deletedCount = 0;

for (const file of unusedFiles) {
  try {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      deletedCount++;
    }
  } catch (err) {
  }
}
console.log(`Deleted ${deletedCount} unused files from public/media.`);

const srcDir = path.join(__dirname, 'src');
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

const srcFiles = getAllFiles(srcDir);
let updatedFilesCount = 0;
for (const file of srcFiles) {
  if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.json') || file.endsWith('.js') || file.endsWith('.css')) {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    
    for (const [dupPath, canPath] of replacements) {
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

let deletedDups = 0;
for (const file of filesToDelete) {
  try {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      deletedDups++;
    }
  } catch(e) {
  }
}
console.log(`Deleted ${deletedDups} duplicate files from public/media.`);
