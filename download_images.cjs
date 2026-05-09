const fs = require('fs');
const path = require('path');
const https = require('https');

const dataFile = 'apps/web/src/data/tarotData.ts';
const outDir = 'apps/web/public/cards';
let tarotData = fs.readFileSync(dataFile, 'utf8');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Find all URLs
const regex = /https:\/\/raw\.githubusercontent\.com\/WillYin09\/tarot_card_assets\/main\/Cards-png\/([^"']+)/g;
let match;
const urls = [];

while ((match = regex.exec(tarotData)) !== null) {
  urls.push({
    url: match[0],
    filename: match[1]
  });
}

// Remove duplicates
const uniqueUrls = [...new Map(urls.map(item => [item.filename, item])).values()];
console.log(`Found ${uniqueUrls.length} images to download.`);

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function main() {
  const BATCH_SIZE = 10;
  let downloaded = 0;
  for (let i = 0; i < uniqueUrls.length; i += BATCH_SIZE) {
    const batch = uniqueUrls.slice(i, i + BATCH_SIZE);
    await Promise.all(batch.map(async ({ url, filename }) => {
      const dest = path.join(outDir, filename);
      if (!fs.existsSync(dest)) {
        await download(url, dest).catch(e => console.error(e));
      }
    }));
    downloaded += batch.length;
    console.log(`Downloaded ${downloaded}/${uniqueUrls.length}`);
  }

  // Replace URLs in the data file
  tarotData = tarotData.replace(regex, '/cards/$1');
  fs.writeFileSync(dataFile, tarotData);
  console.log('tarotData.ts updated with local URLs.');
}

main().catch(console.error);
