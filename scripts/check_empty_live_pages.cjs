const fs = require('fs');
const https = require('https');
const cheerio = require('cheerio');

const urls = [
  'https://www.ritrjpm.ac.in/departments/computer-science-engg/cse-students-notable-awards-and-achievements.php',
  'https://www.ritrjpm.ac.in/departments/computer-science-engg/cse-press-release.php',
  'https://www.ritrjpm.ac.in/departments/computer-science-engg/cse-department-placement-data.php'
];

function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function check() {
  for (const url of urls) {
    console.log('Checking:', url);
    const html = await fetchHTML(url);
    const $ = cheerio.load(html);
    const wrapper = $('.single-service').first();
    let count = 0;
    if (wrapper.length) {
      wrapper.find('h1, h2, h3, h4, h5, h6, p, img, table, a').each(() => count++);
    }
    console.log('Elements found:', count);
  }
}
check();
