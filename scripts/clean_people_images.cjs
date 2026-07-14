const fs = require('fs');

const dataPath = './src/data/department_subpages.json';
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// 1. Find polluting images (appear on multiple pages)
let filenameCounts = {};
Object.keys(data.cse).forEach(key => {
  if (data.cse[key].content) {
    let seenOnPage = new Set();
    data.cse[key].content.forEach(item => {
      if (item.type === 'image') {
        const parts = item.src.split('/');
        const filename = parts[parts.length - 1];
        if (!seenOnPage.has(filename)) {
           seenOnPage.add(filename);
           filenameCounts[filename] = (filenameCounts[filename] || 0) + 1;
        }
      }
    });
  }
});

let pollutingFilenames = new Set();
Object.keys(filenameCounts).forEach(fn => {
  // If it appears on more than 2 pages, it's definitely from a sidebar (polluting)
  if (filenameCounts[fn] > 2) {
     pollutingFilenames.add(fn);
  }
});

const explicitStudentPhotos = [
  'Awards_priyadharshini.jpg',
  'Awards_Rishi.jpg',
  'Awards_Sivakumar.jpg',
  'Awards_11.Rishi.jpg',
  'Awards_Harihara_subramani_1.jpg',
  'Awards_Harihara_subramani_2.jpg',
  'Awards_Deepak-1.jpg',
  'Awards_Deepak_2.jpg'
];

let removedCount = 0;

Object.keys(data.cse).forEach(key => {
  if (data.cse[key].content) {
    const originalLength = data.cse[key].content.length;
    data.cse[key].content = data.cse[key].content.filter(item => {
      if (item.type === 'image') {
        const parts = item.src.split('/');
        const filename = parts[parts.length - 1];
        
        // Remove if it's a sidebar polluting image
        if (pollutingFilenames.has(filename)) {
          return false;
        }
        
        // Remove if it's an explicit student photo on awards/placement pages
        if (explicitStudentPhotos.includes(filename)) {
          return false;
        }
      }
      return true;
    });
    removedCount += (originalLength - data.cse[key].content.length);
  }
});

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`Cleaned up JSON. Removed ${removedCount} polluting image blocks across all CSE pages.`);
