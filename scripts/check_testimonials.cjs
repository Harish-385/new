const https = require('https');
https.get('https://www.ritrjpm.ac.in/departments/computer-science-engg/cse-peos-pos-psos.php', (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const fs = require('fs');
    fs.writeFileSync('./peos_live.html', data);
    console.log("Saved peos_live.html");
  });
});
