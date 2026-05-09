const fs = require('fs');
const path = require('path');
const https = require('https');

const dataFile = 'apps/web/src/data/tarotData.ts';
const outDir = 'apps/web/public/cards';
let tarotData = fs.readFileSync(dataFile, 'utf8');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Match the existing raw.githubusercontent.com URLs or already replaced /cards/ URLs
// Wait, tarotData.ts might still have raw.githubusercontent.com URLs.
const regex = /https:\/\/raw\.githubusercontent\.com\/WillYin09\/tarot_card_assets\/main\/Cards-png\/([^"']+)/g;
let match;
const urls = [];

while ((match = regex.exec(tarotData)) !== null) {
  urls.push({
    filename: match[1]
  });
}

// Remove duplicates
const uniqueFiles = [...new Set(urls.map(item => item.filename))];
console.log(`Found ${uniqueFiles.length} images to download using jsdelivr CDN.`);

async function download(filename, dest) {
  const cdnUrl = `https://cdn.jsdelivr.net/gh/WillYin09/tarot_card_assets@main/Cards-png/${filename}`;
  return new Promise((resolve, reject) => {
    https.get(cdnUrl, (response) => {
      // Handle redirects if any (jsdelivr sometimes redirects to another CDN node)
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, (res) => {
          if (res.statusCode === 200) {
            const file = fs.createWriteStream(dest);
            res.pipe(file);
            file.on('finish', () => { file.close(); resolve(); });
          } else {
            reject(new Error(`Failed to download ${filename}: ${res.statusCode}`));
          }
        }).on('error', reject);
        return;
      }
      
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function main() {
  const BATCH_SIZE = 5;
  let downloaded = 0;
  for (let i = 0; i < uniqueFiles.length; i += BATCH_SIZE) {
    const batch = uniqueFiles.slice(i, i + BATCH_SIZE);
    await Promise.all(batch.map(async (filename) => {
      const dest = path.join(outDir, filename);
      // Only download if it doesn't exist or is empty
      if (!fs.existsSync(dest) || fs.statSync(dest).size === 0) {
        await download(filename, dest).catch(e => console.error(e));
      }
    }));
    downloaded += batch.length;
    console.log(`Downloaded ${downloaded}/${uniqueFiles.length}`);
  }

  // Replace URLs in the data file
  tarotData = tarotData.replace(regex, '/cards/$1');
  fs.writeFileSync(dataFile, tarotData);
  console.log('tarotData.ts updated with local URLs.');
}

main().catch(console.error);
