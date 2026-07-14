const fs = require('fs');
let content = fs.readFileSync('src/components/CMSContext.tsx', 'utf8');

content = content.replace(/const parsed = JSON\.parse\(local\)/g, 'const parsed = JSON.parse(local)\n        let changed = false;');

content = content.replace(/deleteAnnouncement: async \(id\) => \{ return true \}/g, 'deleteAnnouncement: async (id) => { return true },\n  updateEventsList: async (list) => {}');

fs.writeFileSync('src/components/CMSContext.tsx', content);
console.log('Fixed CMSContext.');
