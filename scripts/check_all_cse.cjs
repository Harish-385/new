const fs = require('fs');
const https = require('https');
const cheerio = require('cheerio');

const data = JSON.parse(fs.readFileSync('./src/data/department_subpages.json', 'utf8'));
const cse = data.cse;

function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchHTML(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function checkAll() {
  const discrepancies = [];
  console.log(`Checking ${Object.keys(cse).length} CSE subpages...`);

  for (const [key, pageData] of Object.entries(cse)) {
    const url = pageData.url;
    if (!url || !url.startsWith('http')) {
      console.log(`Skipping ${key} (No valid URL)`);
      continue;
    }

    try {
      const html = await fetchHTML(url);
      const $ = cheerio.load(html);
      const wrapper = $('.single-service').first();
      
      let liveCount = 0;
      if (wrapper.length) {
        wrapper.find('h1, h2, h3, h4, h5, h6, p, img, table, a').each(() => {
          liveCount++;
        });
      }

      const localCount = pageData.content ? pageData.content.length : 0;
      
      console.log(`[${key}] Live: ${liveCount}, Local: ${localCount}`);

      // We consider it a major discrepancy if live has > 10 items but local is 0,
      // or if local is significantly lower than live (e.g., local < live * 0.2).
      if (liveCount > 10 && localCount === 0) {
        discrepancies.push({
          key,
          url,
          liveCount,
          localCount,
          issue: 'Completely Empty Locally'
        });
      } else if (localCount > 0 && localCount < liveCount * 0.2) {
        discrepancies.push({
          key,
          url,
          liveCount,
          localCount,
          issue: 'Potentially Incomplete'
        });
      }
    } catch (e) {
      console.log(`Failed to fetch ${key}: ${e.message}`);
    }
  }

  console.log('\n--- Discrepancies Found ---');
  if (discrepancies.length === 0) {
    console.log('None! All pages seem to have been scraped properly.');
  } else {
    console.table(discrepancies);
  }
}

checkAll();
