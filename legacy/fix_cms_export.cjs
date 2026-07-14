const fs = require('fs');
let content = fs.readFileSync('src/components/CMSContext.tsx', 'utf8');

content = content.replace(/deleteAnnouncement\n/g, 'deleteAnnouncement,\n        updateEventsList\n');
fs.writeFileSync('src/components/CMSContext.tsx', content);
console.log('Fixed CMSContext export.');
