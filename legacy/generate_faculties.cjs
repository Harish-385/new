const fs = require('fs');
const faculties = JSON.parse(fs.readFileSync('faculty_extracted.json', 'utf8'));

// Keys currently in facultyDataMap (based on my previous inspection):
const existingKeys = ['kaliappan', 'anandhi', 'selvabirunda', 'selvabirundha', 'ramnath', 'karpagavalli', 'sankaralakshmi', 'anitha', 'dhanalakshmi', 'revathi'];

let codeToAppend = '';

faculties.forEach(f => {
  // create a key based on the name (e.g. 'mariappan', 'angelhepzibah')
  const baseKeyMatch = f.name.match(/[A-Z][a-z]+/g);
  let key = '';
  if (baseKeyMatch) {
    key = baseKeyMatch[baseKeyMatch.length - 1].toLowerCase();
    if (f.name.toLowerCase().includes('angel')) key = 'angelhepzibah';
    if (f.name.toLowerCase().includes('muthu')) key = 'muthueshwaran';
  } else {
    key = f.name.replace(/[^a-zA-Z]/g, '').toLowerCase();
  }
  
  if (!existingKeys.includes(key) && !existingKeys.includes(f.name.replace(/[^a-zA-Z]/g, '').toLowerCase())) {
    console.log('Generating for: ' + f.name + ' -> key: ' + key);
    let imageSrc = null;
    let pdfUrl = f.pdfUrl ? '/media/faculty/' + f.pdfUrl.split('/').pop() : null;
    
    // Find matching image in media/faculty based on name
    const files = fs.readdirSync('public/media/faculty');
    const namePart = key.toLowerCase();
    const imgFile = files.find(file => file.toLowerCase().includes(namePart) && (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.JPG')));
    if (imgFile) imageSrc = '/media/faculty/' + imgFile;
    
    codeToAppend += `
  "${key}": {
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
});
fs.writeFileSync('new_faculties.txt', codeToAppend);
console.log('Done');
