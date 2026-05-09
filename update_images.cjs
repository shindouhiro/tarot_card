const fs = require('fs');

const filenames = fs.readFileSync('filenames.txt', 'utf8').split('\n').filter(Boolean);
let tarotData = fs.readFileSync('apps/web/src/data/tarotData.ts', 'utf8');

// Update Major Arcana
for (let i = 0; i <= 21; i++) {
  const prefix = i.toString().padStart(2, '0') + '-';
  const filename = filenames.find(f => f.startsWith(prefix));
  if (filename) {
    const newImage = `https://raw.githubusercontent.com/WillYin09/tarot_card_assets/main/Cards-png/${filename}`;
    // Find the object with id: "i" or id: 'i' and replace its image
    // Using regex to find the block for this id and replace the image line
    const regex = new RegExp(`id:\\s*["']${i}["'],[\\s\\S]*?image:\\s*["'][^"']+["']`, 'g');
    tarotData = tarotData.replace(regex, (match) => {
      return match.replace(/image:\s*["'][^"']+["']/, `image: "${newImage}"`);
    });
  }
}

// Update Minor Arcana
const suitMap = { 'W': 'Wands', 'C': 'Cups', 'S': 'Swords', 'P': 'Pentacles' };
for (const [key, name] of Object.entries(suitMap)) {
  for (let i = 1; i <= 14; i++) {
    const id = `${key}${i}`;
    const rankStr = i.toString().padStart(2, '0');
    const filename = `${name}${rankStr}.png`;
    const newImage = `https://raw.githubusercontent.com/WillYin09/tarot_card_assets/main/Cards-png/${filename}`;
    
    // The previous generated minor arcana used a string literal `...` or "..." for image
    // Let's match both
    const regex = new RegExp(`id:\\s*["']${id}["'],[\\s\\S]*?image:\\s*([\`"'])[^\\1]+?\\1`, 'g');
    tarotData = tarotData.replace(regex, (match) => {
      return match.replace(/image:\s*([\`"'])[^\\1]+?\1/, `image: "${newImage}"`);
    });
  }
}

fs.writeFileSync('apps/web/src/data/tarotData.ts', tarotData);
console.log('Updated tarotData.ts');
