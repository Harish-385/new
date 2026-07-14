const fs = require('fs');
const path = require('path');

const deptsDir = path.join(__dirname, 'src', 'components', 'departments');
const files = fs.readdirSync(deptsDir).filter(f => f.endsWith('Dept.tsx'));

files.forEach(file => {
    const filePath = path.join(deptsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(
        /if \(activeSubpage\.toLowerCase\(\)\.includes\('vision'\) \|\| activeSubpage\.toLowerCase\(\)\.includes\('mission'\)\) \{/g,
        "if (activeSubpage.toLowerCase().includes('vision') || (activeSubpage.toLowerCase().includes('mission') && !activeSubpage.toLowerCase().includes('admission'))) {"
    );
    
    fs.writeFileSync(filePath, content);
});

console.log('Fixed adMISSION bug in all department files.');
