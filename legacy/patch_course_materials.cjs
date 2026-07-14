const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('ad-course-material.html', 'utf8');
const $ = cheerio.load(html);

// Find all links that wrap ad-link-icon
const links = [];
$('a').each((i, el) => {
    if ($(el).find('img[src*="ad-link-icon"]').length > 0) {
        links.push($(el).attr('href'));
    }
});

console.log(`Found ${links.length} links with ad-link-icon.`);

// Now let's update the department_subpages.json
const deptJsonPath = 'src/data/department_subpages.json';
const deptData = JSON.parse(fs.readFileSync(deptJsonPath, 'utf8'));

let content = deptData.aids['Course material/Video lecture'].content;
let linkIndex = 0;

// Filter out all floating ad-link-icon image objects
content = content.filter(item => {
    if (item.type === 'image' && item.src && item.src.includes('ad-link-icon')) {
        return false;
    }
    return true;
});

// Update tables with proper link objects
content.forEach(item => {
    if (item.type === 'table' && item.rows) {
        item.rows.forEach((row, rIdx) => {
            if (rIdx === 0) return; // skip header
            // The last column is usually the link column
            const lastCell = row[row.length - 1];
            if (typeof lastCell === 'string' && (lastCell.toLowerCase().includes('view document') || lastCell === '' || lastCell.trim() === '')) {
                if (linkIndex < links.length) {
                    row[row.length - 1] = { text: 'View Document', href: links[linkIndex] };
                    linkIndex++;
                }
            }
        });
    }
});

deptData.aids['Course material/Video lecture'].content = content;
fs.writeFileSync(deptJsonPath, JSON.stringify(deptData, null, 2));

console.log(`Updated JSON with ${linkIndex} links.`);
