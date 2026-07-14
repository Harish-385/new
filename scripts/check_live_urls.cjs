const https = require('https');
https.get('https://www.ritrjpm.ac.in/departments/computer-science-engg/cse-students-notable-awards-and-achievements.php', (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const cheerio = require('cheerio');
    const $ = cheerio.load(data);
    const wrapper = $('.single-service').first();
    const imgs = wrapper.find('img').map((i, el) => $(el).attr('src')).get();
    console.log("Images found:");
    console.log(imgs);
  });
});
