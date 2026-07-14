const fs = require('fs');
const filePath = 'src/components/departments/CsecDept.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/export const CseDept/g, 'export const CsecDept');
content = content.replace(/export default CseDept/g, 'export default CsecDept');
content = content.replace(/const deptCode = 'cse'/g, "const deptCode = 'csec'");

fs.writeFileSync(filePath, content, 'utf8');
