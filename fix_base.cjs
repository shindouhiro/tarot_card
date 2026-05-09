const fs = require('fs');
const file = 'apps/web/src/data/tarotData.ts';
let data = fs.readFileSync(file, 'utf8');

// Replace string literal "/cards/..." with template literal `${import.meta.env.BASE_URL}cards/...`
data = data.replace(/"\/cards\/([^"]+)"/g, '`${import.meta.env.BASE_URL}cards/$1`');

fs.writeFileSync(file, data);
