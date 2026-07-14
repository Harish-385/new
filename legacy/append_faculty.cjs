const fs = require('fs');
const ts = require('typescript'); // Wait, no typescript, I will just use regex to extract keys from the file.

const fileData = fs.readFileSync('src/components/facultyData.ts', 'utf8');

// Match keys before `: {` at the first level inside `export const facultyDataMap...`
const keysMatch = [...fileData.matchAll(/^  "?([a-zA-Z0-9]+)"?: \{/gm)].map(m => m[1]);
console.log("Existing Keys:", keysMatch);

const faculties = JSON.parse(fs.readFileSync('faculty_extracted.json', 'utf8'));

let codeToAppend = '';

faculties.forEach(f => {
  const normalizedQuery = (f.name || '').toLowerCase().replace(/[\s.]/g, '');
  // Is there any key in keysMatch that is a substring of normalizedQuery?
  const matchedKey = keysMatch.find(k => normalizedQuery.includes(k));
  
  if (!matchedKey) {
    // Generate a new key from name
    const baseKeyMatch = f.name.match(/[A-Z][a-z]+/g);
    let newKey = '';
    if (baseKeyMatch) {
      newKey = baseKeyMatch[baseKeyMatch.length - 1].toLowerCase();
      if (f.name.toLowerCase().includes('angel')) newKey = 'angelhepzibah';
      if (f.name.toLowerCase().includes('muthu')) newKey = 'muthueshwaran';
    } else {
      newKey = f.name.replace(/[^a-zA-Z]/g, '').toLowerCase();
    }
    
    // Safety against duplication
    if (!keysMatch.includes(newKey) && !codeToAppend.includes(`"${newKey}":`)) {
      console.log('Generating for: ' + f.name + ' -> newKey: ' + newKey);
      let imageSrc = null;
      let pdfUrl = f.pdfUrl ? '/media/faculty/' + f.pdfUrl.split('/').pop() : null;
      
      const files = fs.readdirSync('public/media/faculty');
      const namePart = newKey.toLowerCase();
      const imgFile = files.find(file => file.toLowerCase().includes(namePart) && (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.JPG')));
      if (imgFile) imageSrc = '/media/faculty/' + imgFile;
      
      codeToAppend += `
  "${newKey}": {
    name: "${f.name}",
    designation: "${f.designation}",
    department: "Artificial Intelligence and Data Science",
    email: "${f.email}",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: ${imageSrc ? '"' + imageSrc + '"' : 'null'},
    office: "RIT Campus, Department of AI & DS",
    bioSummary: "Faculty member in the Department of AI & DS.",
    researchAreas: [],
    socials: [],
    pdfUrl: ${pdfUrl ? '"' + pdfUrl + '"' : 'null'},
    education: [
      { degree: "${f.qualification}", field: "", university: "", year: "" }
    ],
    experience: [],
    metrics: null,
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: [],
    conferencePubs: []
  },`;
    }
  }
});

let newData = fileData;
newData = newData.replace(/}\s*$/, codeToAppend + '\n}\n');
// Also fix selvabirunda -> selvabirundha
newData = newData.replace('  selvabirunda: {', '  selvabirundha: {');

fs.writeFileSync('src/components/facultyData.ts', newData);
console.log('Successfully updated facultyData.ts');
