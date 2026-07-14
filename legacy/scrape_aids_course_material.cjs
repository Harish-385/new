const fs = require('fs');
const https = require('https');
const cheerio = require('cheerio');
const path = require('path');

const url = 'https://www.ritrjpm.ac.in/departments/ai-and-ds/ad-course-material-video-lecture.php';

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const $ = cheerio.load(data);
    const contentContainer = $('.col-md-9'); // This is usually where the content is in RIT pages
    
    let newContent = [];
    
    // We want to skip extracting stray images that have 'ad-link-icon' or similar
    
    contentContainer.children().each((i, el) => {
      const tag = el.tagName.toLowerCase();
      
      if (tag.match(/^h[1-6]$/)) {
        newContent.push({ type: 'heading', level: tag, text: $(el).text().trim() });
      } else if (tag === 'p') {
        const text = $(el).text().trim();
        if (text) newContent.push({ type: 'paragraph', text });
      } else if (tag === 'center' || tag === 'div') {
         // Sometimes text is inside center or div tags
         const text = $(el).text().trim();
         // If it contains a table, skip it here, we'll catch it if the table is a child
         if ($(el).find('table').length > 0) {
            // Find all tables inside this container
            $(el).find('table').each((j, tbl) => {
                newContent.push(parseTable(tbl));
            });
         } else if (text) {
             newContent.push({ type: 'paragraph', text });
         }
      } else if (tag === 'table') {
        newContent.push(parseTable(el));
      } else if (tag === 'ul' || tag === 'ol') {
          let items = [];
          $(el).find('li').each((j, li) => items.push($(li).text().trim()));
          if (items.length > 0) newContent.push({ type: 'list', items });
      } else if (tag === 'a') {
          const href = $(el).attr('href');
          if (href && href.includes('.pdf')) {
              newContent.push({ type: 'document', href, text: $(el).text().trim() || 'View Document' });
          }
      }
    });

    function parseTable(tbl) {
        let rows = [];
        $(tbl).find('tr').each((j, tr) => {
            let rowData = [];
            $(tr).find('td, th').each((k, cell) => {
                const link = $(cell).find('a').first();
                if (link.length > 0) {
                    const href = link.attr('href');
                    if (href) {
                        rowData.push({ text: 'View Link', href: href });
                        return;
                    }
                }
                rowData.push($(cell).text().trim());
            });
            // Handle rowspan/colspan partially by at least pushing what we got
            if (rowData.length > 0) rows.push(rowData);
        });
        return { type: 'table', rows };
    }

    // Clean up empty paragraphs or headings
    newContent = newContent.filter(c => c.text !== '' || c.type === 'table' || c.type === 'list' || c.type === 'document');

    const deptJsonPath = path.join(__dirname, 'src', 'data', 'department_subpages.json');
    const deptData = JSON.parse(fs.readFileSync(deptJsonPath, 'utf8'));
    
    deptData.aids['Course material/Video lecture'].content = newContent;
    
    fs.writeFileSync(deptJsonPath, JSON.stringify(deptData, null, 2));
    console.log('Successfully updated course materials!');
  });
});
