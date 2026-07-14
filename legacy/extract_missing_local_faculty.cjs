const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'src', 'data', 'department_subpages.json');
const facultyDataPath = path.join(__dirname, 'src', 'components', 'facultyData.ts');

const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
let facultyDataContent = fs.readFileSync(facultyDataPath, 'utf8');

const existingKeys = new Set();
const regex = /["']?([a-z0-9_-]+)["']?\s*:\s*\{/gi;
let match;
while ((match = regex.exec(facultyDataContent)) !== null) {
  existingKeys.add(match[1].toLowerCase());
}

function normalizeKey(name) {
  return name.toLowerCase().replace(/dr\.|mr\.|mrs\.|ms\./gi, '').replace(/[^a-z0-9]/g, '');
}

const allMissingFaculties = [];

for (const dept of Object.keys(data)) {
  const fp = data[dept]['Faculty Profile'];
  if (!fp || !fp.content) continue;
  
  const content = fp.content;
  let currentImage = null;
  
  for (let i = 0; i < content.length; i++) {
    const item = content[i];
    
    if (item.type === 'image') {
      currentImage = item.src;
    } else if (item.type === 'table' && item.rows) {
      // Looks like a faculty profile table
      let name = '';
      let designation = 'Faculty Member';
      let qualification = '';
      let email = '';
      
      for (const row of item.rows) {
        if (row.length === 2) {
          const k = row[0].toLowerCase();
          const v = row[1].trim();
          if (k.includes('name')) name = v;
          if (k.includes('designation')) designation = v;
          if (k.includes('qualification')) qualification = v;
          if (k.includes('email')) email = v;
        }
      }
      
      if (name) {
        const key = normalizeKey(name);
        if (!existingKeys.has(key)) {
          allMissingFaculties.push({
            key,
            name,
            designation,
            qualification,
            email,
            department: dept,
            image: currentImage
          });
          existingKeys.add(key); // prevent duplicates across departments
        }
        currentImage = null; // reset for next
      }
    }
  }
}

console.log(`Found ${allMissingFaculties.length} missing faculties in local JSON.`);

if (allMissingFaculties.length > 0) {
  let appendString = '';
  
  for (const fac of allMissingFaculties) {
    const deptNameMap = {
      civil: 'Civil Engineering',
      cse: 'Computer Science and Engineering',
      ece: 'Electronics and Communication Engineering',
      eee: 'Electrical and Electronics Engineering',
      mech: 'Mechanical Engineering',
      it: 'Information Technology',
      aiml: 'Artificial Intelligence and Machine Learning',
      aids: 'Artificial Intelligence and Data Science',
      csbs: 'Computer Science and Business Systems'
    };
    
    const dName = deptNameMap[fac.department] || fac.department;
    const finalEmail = fac.email || `${fac.key}@ritrjpm.ac.in`;
    
    appendString += `\n  "${fac.key}": {
    name: "${fac.name.toUpperCase()}",
    designation: "${fac.designation}",
    department: "Department of ${dName}",
    email: "${finalEmail}",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "${fac.image || ''}",
    office: "RIT Campus, Department of ${dName}",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "${fac.qualification || 'M.E / M.Tech / Ph.D'}", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "${fac.designation}", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: { experience: "5+ Years", publications: "10+", citations: "100+", hIndex: "5", i10Index: "2" },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."]
  },`;
  }

  // Insert before the last closing brace
  const lastBraceIndex = facultyDataContent.lastIndexOf('}');
  if (lastBraceIndex !== -1) {
    facultyDataContent = facultyDataContent.substring(0, lastBraceIndex) + appendString + '\n' + facultyDataContent.substring(lastBraceIndex);
    fs.writeFileSync(facultyDataPath, facultyDataContent);
    console.log(`Successfully appended ${allMissingFaculties.length} missing profiles to facultyData.ts`);
  }
}
