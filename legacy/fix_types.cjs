const fs = require('fs');
let content = fs.readFileSync('src/components/facultyData.ts', 'utf8');
content = content.replace(/hIndex: "5"/g, 'hIndex: 5').replace(/i10Index: "2"/g, 'i10Index: 2');
fs.writeFileSync('src/components/facultyData.ts', content);
console.log('Fixed types.');
