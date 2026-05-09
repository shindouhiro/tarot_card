const fs = require('fs');

const suits = [
  { id: 'W', name: '权杖', en: 'Wands' },
  { id: 'C', name: '圣杯', en: 'Cups' },
  { id: 'S', name: '宝剑', en: 'Swords' },
  { id: 'P', name: '星币', en: 'Pentacles' }
];

const ranks = [
  { id: '1', name: '王牌', en: 'Ace' },
  { id: '2', name: '二', en: 'Two' },
  { id: '3', name: '三', en: 'Three' },
  { id: '4', name: '四', en: 'Four' },
  { id: '5', name: '五', en: 'Five' },
  { id: '6', name: '六', en: 'Six' },
  { id: '7', name: '七', en: 'Seven' },
  { id: '8', name: '八', en: 'Eight' },
  { id: '9', name: '九', en: 'Nine' },
  { id: '10', name: '十', en: 'Ten' },
  { id: '11', name: '侍从', en: 'Page' },
  { id: '12', name: '骑士', en: 'Knight' },
  { id: '13', name: '王后', en: 'Queen' },
  { id: '14', name: '国王', en: 'King' }
];

let minorArcana = [];

suits.forEach(suit => {
  ranks.forEach(rank => {
    minorArcana.push({
      id: `${suit.id}${rank.id}`,
      name: `${suit.name}${rank.name}`,
      nameEn: `${rank.en} of ${suit.en}`,
      image: `https://placehold.co/400x600/2a1b4d/fbbf24?text=${rank.en}\\nof\\n${suit.en}`,
      upright: `在${suit.name}的领域中，代表了${rank.name}的正向能量。`,
      reversed: `在${suit.name}的领域中，代表了${rank.name}的受阻状态。`
    });
  });
});

const tsCode = `
// 56 Minor Arcana Cards
export const minorArcana: TarotCard[] = ${JSON.stringify(minorArcana, null, 2)};

export const fullTarotDeck: TarotCard[] = [...majorArcana, ...minorArcana];
`;

fs.appendFileSync('apps/web/src/data/tarotData.ts', tsCode);
