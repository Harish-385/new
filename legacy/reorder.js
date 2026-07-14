const fs = require('fs');

const filePath = 'src/data/department_subpages.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

for (const dept in data) {
  const deptData = data[dept];
  const keys = Object.keys(deptData);
  
  // Find "About the Department" and "Faculty Profile"
  const aboutKey = keys.find(k => k.toLowerCase().includes('about'));
  const facultyProfileKey = keys.find(k => k === 'Faculty Profile' || k === 'Faculty Data');
  
  const newKeys = [];
  
  // First, "About the Department" if it exists
  if (aboutKey) {
    newKeys.push(aboutKey);
  } else {
    // If not, put the first key that is not Faculty Profile
    const firstOther = keys.find(k => k !== facultyProfileKey);
    if (firstOther) {
      newKeys.push(firstOther);
    }
  }
  
  // Second, "Faculty Profile" if it exists
  if (facultyProfileKey) {
    newKeys.push(facultyProfileKey);
  }
  
  // Then the rest of the keys
  for (const k of keys) {
    if (!newKeys.includes(k)) {
      newKeys.push(k);
    }
  }
  
  // Rebuild the object with the new key order
  const newDeptData = {};
  for (const k of newKeys) {
    newDeptData[k] = deptData[k];
  }
  
  data[dept] = newDeptData;
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('Reordered successfully.');
