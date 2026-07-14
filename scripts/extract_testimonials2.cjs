const fs = require('fs');
const html = fs.readFileSync('peos_live.html', 'utf8');

let testimonials = [];
const eventParts = html.split('<div class="event media');
for (let i = 1; i < eventParts.length; i++) {
   const block = eventParts[i];
   const imgMatch = block.match(/<img src="([^"]+)"/);
   const nameMatch = block.match(/<h3[^>]*><a[^>]*>([^<]+)<\/a><\/h3>/);
   const pMatch = block.match(/<p[^>]*>([\s\S]*?)<\/p>/g);
   
   if (imgMatch && nameMatch && pMatch) {
      let text = pMatch.map(p => p.replace(/<[^>]+>/g, '').trim()).join(' ').trim();
      testimonials.push({
         name: nameMatch[1].trim(),
         image: imgMatch[1],
         text: text
      });
   }
}

console.log('Found:', testimonials.length);
console.log(testimonials.slice(0, 2));
fs.writeFileSync('d:/ritrjpm_admin/src/data/testimonials.json', JSON.stringify(testimonials, null, 2));
