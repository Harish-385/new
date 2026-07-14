const fs = require('fs');

const deptJsonPath = 'src/data/department_subpages.json';
const d = JSON.parse(fs.readFileSync(deptJsonPath, 'utf8'));

const content = d.aids['Course material/Video lecture'].content;

content.forEach(item => {
    if (item.type === 'table' && item.rows && item.rows.length > 0) {
        const headerLength = item.rows[0].length;
        
        item.rows.forEach((row, i) => {
            if (row.length < headerLength) {
                const diff = headerLength - row.length;
                const padding = Array(diff).fill('');
                // Prepend padding to align the remaining cells to the right
                item.rows[i] = [...padding, ...row];
            }
        });
    }
});

fs.writeFileSync(deptJsonPath, JSON.stringify(d, null, 2));
console.log('Fixed table alignment by left-padding short rows.');
