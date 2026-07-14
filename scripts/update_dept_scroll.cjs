const fs = require('fs');
const path = require('path');
const dir = path.join('d:', 'ritrjpm_admin', 'src', 'components', 'departments');
const files = fs.readdirSync(dir).filter(f => f.endsWith('Dept.tsx'));
files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes('const mainRef = React.useRef<HTMLElement>(null)')) {
    content = content.replace(
      /(const accentColor = getDeptAccentColor\(deptCode\)\r?\n\s*const deptName = getDeptName\(deptCode\)\r?\n\r?\n\s*)(return \()/g,
      "$1const mainRef = React.useRef<HTMLElement>(null)\n\n  React.useEffect(() => {\n    if (mainRef.current) {\n      mainRef.current.scrollTo({ top: 0, behavior: 'smooth' })\n    }\n  }, [activeSubpage])\n\n  $2"
    );
  }

  content = content.replace(
    /<main className="dept-main-content">/g,
    '<main ref={mainRef} className="dept-main-content">'
  );

  fs.writeFileSync(filePath, content);
  console.log('Updated ' + file);
});
