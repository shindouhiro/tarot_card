const fs = require('fs');
let data = fs.readFileSync('apps/web/src/data/tarotData.ts', 'utf8');

const suitMap = { 'W': 'Wands', 'C': 'Cups', 'S': 'Swords', 'P': 'Pentacles' };

for (const [key, name] of Object.entries(suitMap)) {
  for (let i = 1; i <= 14; i++) {
    const id = `${key}${i}`;
    const rankStr = i.toString().padStart(2, '0');
    const filename = `${name}${rankStr}.png`;
    const newImage = `https://raw.githubusercontent.com/WillYin09/tarot_card_assets/main/Cards-png/${filename}`;
    
    const idIndex = data.indexOf(`"id": "${id}"`);
    if (idIndex !== -1) {
      const imageIndex = data.indexOf(`"image":`, idIndex);
      if (imageIndex !== -1) {
        const endQuoteIndex = data.indexOf('",', imageIndex + 10);
        if (endQuoteIndex !== -1) {
          data = data.substring(0, imageIndex) + 
                 `"image": "${newImage}` + 
                 data.substring(endQuoteIndex);
        }
      }
    }
  }
}

fs.writeFileSync('apps/web/src/data/tarotData.ts', data);
console.log('Fixed minor arcana images');
