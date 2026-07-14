const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./src/data/department_subpages.json', 'utf8'));

let uniqueImages = new Set();
Object.values(data.cse).forEach(page => {
  if (page.content) {
    page.content.forEach(item => {
      if (item.type === 'image') {
        uniqueImages.add(item.src);
      }
    });
  }
});
const uniqueArr = Array.from(uniqueImages);
console.log('Unique standalone images:', uniqueArr.length);
console.log(uniqueArr.slice(0, 50));
