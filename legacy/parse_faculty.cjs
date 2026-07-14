const fs = require('fs');
const html = fs.readFileSync('faculty_web.html', 'utf8');

const results = [];
let match;
const panelRegex = /<div class="panel-body">([\s\S]*?)<\/table>[\s\S]*?<\/div>\s*<\/div>/g;

while ((match = panelRegex.exec(html)) !== null) {
  const panelHtml = match[0];
  
  const nameMatch = /<td><strong>Name <\/strong><\/td>\s*<td>(.*?)<\/td>/i.exec(panelHtml);
  const desigMatch = /<td><strong>Designation <\/strong><\/td>\s*<td>(.*?)<\/td>/i.exec(panelHtml);
  const qualMatch = /<td><strong>Qualification <\/strong><\/td>\s*<td>(.*?)<\/td>/i.exec(panelHtml);
  const emailMatch = /<td><strong>Email <\/strong><\/td>\s*<td>(.*?)<\/td>/i.exec(panelHtml);
  
  const pdfMatch = /href=["']([^"']+\.pdf)["']/i.exec(panelHtml);
  let pdfUrl = pdfMatch ? pdfMatch[1] : null;

  if (nameMatch) {
    results.push({
      name: nameMatch[1].replace(/<[^>]+>/g, '').trim(),
      designation: desigMatch ? desigMatch[1].replace(/<[^>]+>/g, '').trim() : '',
      qualification: qualMatch ? qualMatch[1].replace(/<[^>]+>/g, '').trim() : '',
      email: emailMatch ? emailMatch[1].replace(/<[^>]+>/g, '').trim() : '',
      pdfUrl: pdfUrl
    });
  }
}

fs.writeFileSync('faculty_extracted.json', JSON.stringify(results, null, 2));
console.log('Extracted ' + results.length + ' faculties.');
