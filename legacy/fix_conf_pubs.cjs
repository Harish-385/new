const fs = require('fs');
let content = fs.readFileSync('src/components/facultyData.ts', 'utf8');
content = content.replace(/journalPubs: \["Refer to the official faculty profile document for detailed publication records."\]/g, 'journalPubs: ["Refer to the official faculty profile document for detailed publication records."],\n    conferencePubs: []');
fs.writeFileSync('src/components/facultyData.ts', content);
console.log('Fixed conferencePubs.');
