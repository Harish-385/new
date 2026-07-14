const fs = require('fs');

const dataFile = 'src/data/department_subpages.json';
const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

const targetSubpages = [
  'Vision and Mission',
  'Sponsored Project',
  'Consultancy',
  'Industry Institute Interaction',
  'Projects',
  'Department Association Structra',
  'Honorary Professor',
  'Department Placement Data',
  'Extramural Lecture Series',
  'Civil NBA',
  'About the Department',
  'Facilities',
  'MoUs',
  'PAQIC'
];

let modified = false;

const junkSignatures = [
  "This is Pavithra.",
  "Ramco Institute of technology is one of the well-known Engineering colleges",
  "Four great years in RIT.",
  "RIT is a great place to study.",
  "Curiosity and Creativity are the two major things",
  "The four years that I spent in RIT",
  "The best four years in my life",
  "Four great years in RIT, I have learned good lessons",
  "Serenity opens doors to innovation and creativity",
  "My experience with RIT has been fantastic!",
  "Ramco institute of technology provided the platform",
  "RIT is one of the best engineering colleges",
  "My 4 years in RIT were extremely great",
  "My 1361 days in RIT were tremendous",
  "I’m Hema from the batch",
  "Being a part of new beginnings is always special",
  "This is SUJITH from RIT",
  "I am proud to say that I am one of the first batches",
  "Quick Contact",
  "Department Info Program Organized",
  "©2026"
];

for (const subpage of targetSubpages) {
  if (data['civil'] && data['civil'][subpage] && data['civil'][subpage].content) {
    const content = data['civil'][subpage].content;
    let junkIndex = -1;
    
    for (let i = 0; i < content.length; i++) {
      const item = content[i];
      if (item.text) {
        if (junkSignatures.some(sig => item.text.includes(sig))) {
          // If the previous item is an image, that's likely the photo for the testimonial.
          // Let's remove it too if it's an image.
          if (i > 0 && content[i-1].type === 'image') {
            junkIndex = i - 1;
          } else {
            junkIndex = i;
          }
          break;
        }
      }
    }
    
    if (junkIndex !== -1) {
      console.log(`Cleaning up 'civil/${subpage}'. Removing ${content.length - junkIndex} items starting at index ${junkIndex}.`);
      data['civil'][subpage].content = content.slice(0, junkIndex);
      modified = true;
    } else {
      console.log(`No junk found in 'civil/${subpage}'.`);
    }
  } else {
    console.log(`Subpage 'civil/${subpage}' not found or has no content.`);
  }
}

if (modified) {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
  console.log('Successfully updated department_subpages.json.');
} else {
  console.log('No modifications made.');
}
