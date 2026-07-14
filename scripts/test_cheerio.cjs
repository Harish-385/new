const fs = require('fs');
const cheerio = require('cheerio');
const content = fs.readFileSync('C:\\Users\\yashw\\.gemini\\antigravity-ide\\brain\\dae02344-2c98-4424-a6cd-afe293f59ccc\\.system_generated\\steps\\257\\content.md', 'utf8');
const $ = cheerio.load(content);
const wrapper = $('.single-service').first();
if (wrapper.length) {
  wrapper.children().each((i, el) => {
    console.log(el.tagName);
    if (el.tagName === 'p') console.log('P:', $(el).text().substring(0, 80));
    if (el.tagName === 'h3') console.log('H3:', $(el).text().substring(0, 80));
    if (el.tagName === 'center' || el.tagName === 'div') {
       const img = $(el).find('img');
       if (img.length) {
           console.log('IMG:', img.attr('src'));
       }
    }
  });
}
