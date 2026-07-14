const fs = require('fs');

const content = fs.readFileSync('C:\\Users\\yashw\\.gemini\\antigravity-ide\\brain\\dae02344-2c98-4424-a6cd-afe293f59ccc\\.system_generated\\steps\\257\\content.md', 'utf8');

const regex2 = /<div class="main-content">([\s\S]*?)<footer/;
const match2 = content.match(regex2);
if (match2) {
  const mainContent = match2[1];
  const startIndex = mainContent.indexOf('class="section-content"');
  if (startIndex !== -1) {
    console.log(mainContent.substring(startIndex, startIndex + 3000));
  } else {
    console.log('section-content not found');
  }
} else {
  console.log('main-content not found');
}
