const fs = require('fs');

function removeRogueDocuments() {
  const data = JSON.parse(fs.readFileSync('./src/data/department_subpages.json', 'utf8'));
  let removedCount = 0;

  for (const [dept, pages] of Object.entries(data)) {
    for (const [pageKey, pageData] of Object.entries(pages)) {
      if (pageData.content && Array.isArray(pageData.content)) {
        const originalLength = pageData.content.length;
        pageData.content = pageData.content.filter(item => {
          if (item.type === 'document' && item.href && item.href.includes('Faculty_Recruitment')) {
            return false;
          }
          return true;
        });
        removedCount += (originalLength - pageData.content.length);
      }
    }
  }

  fs.writeFileSync('./src/data/department_subpages.json', JSON.stringify(data, null, 2));
  console.log(`Removed ${removedCount} rogue Faculty Recruitment documents from department_subpages.json`);
}

function removeRogueFromScraped() {
  const data = JSON.parse(fs.readFileSync('./src/data/scraped_content.json', 'utf8'));
  let removedCount = 0;

  for (const [pageKey, pageData] of Object.entries(data)) {
    if (pageData.content && Array.isArray(pageData.content)) {
      const originalLength = pageData.content.length;
      pageData.content = pageData.content.filter(item => {
        if (item.type === 'document' && item.href && item.href.includes('Faculty_Recruitment')) {
          return false;
        }
        return true;
      });
      removedCount += (originalLength - pageData.content.length);
    }
  }

  fs.writeFileSync('./src/data/scraped_content.json', JSON.stringify(data, null, 2));
  console.log(`Removed ${removedCount} rogue Faculty Recruitment documents from scraped_content.json`);
}

removeRogueDocuments();
removeRogueFromScraped();
