const https = require('https');
https.get('https://www.ritrjpm.ac.in/departments/computer-science-engg/cse-students-notable-awards-and-achievements.php', (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const cheerio = require('cheerio');
    const $ = cheerio.load(data);
    const wrapper = $('.single-service').first();
    let total = 0;
    let testimonials = 0;
    wrapper.find('img').each((i, el) => {
      total++;
      if ($(el).attr('src') && $(el).attr('src').includes('testimonials')) testimonials++;
    });
    console.log('Total images:', total, 'Testimonials:', testimonials);
  });
});
