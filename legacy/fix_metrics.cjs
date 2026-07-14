const fs = require('fs');
let content = fs.readFileSync('src/components/facultyData.ts', 'utf8');
content = content.replace(/metrics: \{ experience: "5\+ Years", publications: "10\+", citations: "100\+", hIndex: 5, i10Index: 2 \}/g, 'metrics: null');
fs.writeFileSync('src/components/facultyData.ts', content);
console.log('Fixed metrics object.');
