const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const dataPath = './src/data/department_subpages.json';
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const cse = data.cse;

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    
    // Only download if doesn't exist
    if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
      return resolve('exists');
    }

    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;
    
    const request = client.get(url, function(response) {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', function() {
          file.close(resolve);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlink(dest, () => {});
        resolve('failed');
      }
    }).on('error', function(err) {
      fs.unlink(dest, () => {});
      resolve('failed');
    });
    
    request.setTimeout(10000, function() {
      request.destroy();
      resolve('timeout');
    });
  });
}

let queue = [];
for (const [key, pageData] of Object.entries(cse)) {
  if (pageData.content) {
    pageData.content.forEach(item => {
      if (item.type === 'image' && item.src && item.src.startsWith('/media/cse/')) {
        let fetchUrl = 'https://www.ritrjpm.ac.in' + item.src.replace('/media/cse', '/images/computer-science');
        const dest = path.join(__dirname, '..', 'public', item.src);
        queue.push({ url: fetchUrl, dest });
      } else if (item.type === 'document' && item.href && item.href.startsWith('/media/cse/')) {
        let fetchUrl = 'https://www.ritrjpm.ac.in' + item.href.replace('/media/cse', '/images/computer-science');
        const dest = path.join(__dirname, '..', 'public', item.href);
        queue.push({ url: fetchUrl, dest });
      } else if (item.type === 'table') {
        item.rows.forEach(row => {
          row.forEach(cell => {
            if (cell.href && cell.href.startsWith('/media/cse/')) {
               let fetchUrl = 'https://www.ritrjpm.ac.in' + cell.href.replace('/media/cse', '/images/computer-science');
               const dest = path.join(__dirname, '..', 'public', cell.href);
               queue.push({ url: fetchUrl, dest });
            }
          });
        });
      }
    });
  }
}

async function runQueue() {
  console.log(`Checking/downloading ${queue.length} files with concurrency 20...`);
  
  let active = 0;
  let index = 0;
  let completed = 0;
  
  return new Promise(resolve => {
    function next() {
      if (index >= queue.length && active === 0) {
        return resolve();
      }
      
      while (active < 20 && index < queue.length) {
        const task = queue[index++];
        active++;
        downloadFile(task.url, task.dest).then((res) => {
          active--;
          completed++;
          if (completed % 50 === 0) console.log(`Progress: ${completed}/${queue.length}`);
          next();
        });
      }
    }
    next();
  });
}

runQueue().then(() => console.log('All downloads completed!'));
