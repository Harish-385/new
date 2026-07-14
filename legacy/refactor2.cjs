const fs = require('fs');
const path = require('path');
const dir = 'src/components/departments';
const files = fs.readdirSync(dir).filter(f => f.endsWith('Dept.tsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace import
  content = content.replace(
    /getFileName\r?\n\} from '\.\.\/\.\.\/utils\/deptHelpers'/,
    "getFileName,\n  getSortedSubpageKeys\n} from '../../utils/deptHelpers'"
  );
  
  // Replace subpageKeys
  content = content.replace(
    /const subpageKeys = deptData \? Object\.keys\(deptData\) : \[\]/g,
    'const subpageKeys = getSortedSubpageKeys(deptData)'
  );

  fs.writeFileSync(filePath, content, 'utf8');
});
console.log('Refactoring complete');
