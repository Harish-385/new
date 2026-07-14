const fs = require('fs');
const cheerio = require('cheerio');
const $ = cheerio.load(fs.readFileSync('peos_live.html', 'utf8'));

let testimonials = [];
$('.event').each((i, el) => {
   let name = $(el).find('.event-title a').text().trim();
   let text = $(el).find('p').first().text().trim();
   let imgSrc = $(el).find('img').attr('src');
   if (name && text) {
      testimonials.push({ name, text, image: imgSrc });
   }
});

console.log('Extracted testimonials:', testimonials.length);
console.log(testimonials.slice(0, 2));
fs.writeFileSync('d:/ritrjpm_admin/src/data/testimonials.json', JSON.stringify(testimonials, null, 2));
