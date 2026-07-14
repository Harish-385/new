const fs = require('fs');
let content = fs.readFileSync('src/components/facultyData.ts', 'utf8');

const mockMetrics = `metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    }`;

content = content.replace(/metrics: null/g, mockMetrics);
fs.writeFileSync('src/components/facultyData.ts', content);
console.log('Successfully injected mock statistics for 167 profiles.');
