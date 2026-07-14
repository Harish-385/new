const fs = require('fs');
const unusedFiles = JSON.parse(fs.readFileSync('unused_files.json', 'utf8'));

let deletedCount = 0;
let errorCount = 0;

for (const file of unusedFiles) {
  try {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      deletedCount++;
    }
  } catch (err) {
    console.error(`Error deleting ${file}:`, err.message);
    errorCount++;
  }
}

console.log(`Successfully deleted ${deletedCount} unused files.`);
if (errorCount > 0) {
  console.log(`Failed to delete ${errorCount} files.`);
}
