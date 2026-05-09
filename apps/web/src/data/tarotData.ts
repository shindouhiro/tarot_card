export interface TarotCard {
  id: string;
  name: string;
  nameEn: string;
  image: string;
  upright: string;
  reversed: string;
}

// 22 Major Arcana Cards
export const majorArcana: TarotCard[] = [
  {
    id: "0",
    name: "愚者",
    nameEn: "The Fool",
    image: "/cards/00-TheFool.png",
    upright: "新的开始，冒险，无限可能，天真，自发性。",
    reversed: "鲁莽，不负责任，错失良机，冒险带来危险。"
  },
  {
    id: "1",
    name: "魔术师",
    nameEn: "The Magician",
    image: "/cards/01-TheMagician.png",
    upright: "创造力，意志力，技能，自信，实现目标的能力。",
    reversed: "欺骗，缺乏行动力，才华被压抑，操纵。"
  },
  {
    id: "2",
    name: "女祭司",
    nameEn: "The High Priestess",
    image: "/cards/02-TheHighPriestess.png",
    upright: "直觉，潜意识，神秘，内在知识，耐心。",
    reversed: "秘密被揭露，忽视直觉，表面化，情绪化。"
  },
  {
    id: "3",
    name: "皇后",
    nameEn: "The Empress",
    image: "/cards/03-TheEmpress.png",
    upright: "丰收，母性，创造力，自然，富足，美丽。",
    reversed: "依赖，过度保护，创造力受阻，缺乏满足感。"
  },
  {
    id: "4",
    name: "皇帝",
    nameEn: "The Emperor",
    image: "/cards/04-TheEmperor.png",
    upright: "权力，结构，稳定，领导力，逻辑，权威。",
    reversed: "专制，死板，缺乏纪律，滥用权力。"
  },
  {
    id: "5",
    name: "教皇",
    nameEn: "The Hierophant",
    image: "/cards/05-TheHierophant.png",
    upright: "传统，信仰，教育，精神指引，规则。",
    reversed: "叛逆，打破常规，盲从，限制性信念。"
  },
  {
    id: "6",
    name: "恋人",
    nameEn: "The Lovers",
    image: "/cards/06-TheLovers.png",
    upright: "爱情，和谐，关系，价值观对齐，重要选择。",
    reversed: "失衡，不和谐，错误的选择，关系破裂。"
  },
  {
    id: "7",
    name: "战车",
    nameEn: "The Chariot",
    image: "/cards/07-TheChariot.png",
    upright: "控制力，意志，胜利，决心，克服障碍。",
    reversed: "失控，阻力，缺乏方向，被动。"
  },
  {
    id: "8",
    name: "力量",
    nameEn: "Strength",
    image: "/cards/08-Strength.png",
    upright: "内在力量，勇气，同情心，耐心，温柔的控制。",
    reversed: "自我怀疑，虚弱，缺乏自信，被情绪控制。"
  },
  {
    id: "9",
    name: "隐士",
    nameEn: "The Hermit",
    image: "/cards/09-TheHermit.png",
    upright: "内省，孤独，内在指引，沉思，寻找真相。",
    reversed: "孤立，过度退缩，拒绝帮助，迷失方向。"
  },
  {
    id: "10",
    name: "命运之轮",
    nameEn: "Wheel of Fortune",
    image: "/cards/10-WheelOfFortune.png",
    upright: "好运，转折点，命运，循环，必然的改变。",
    reversed: "厄运，抗拒改变，失控，停滞不前。"
  },
  {
    id: "11",
    name: "正义",
    nameEn: "Justice",
    image: "/cards/11-Justice.png",
    upright: "公平，真相，法律，因果报应，责任。",
    reversed: "不公，偏见，逃避责任，不诚实。"
  },
  {
    id: "12",
    name: "倒吊人",
    nameEn: "The Hanged Man",
    image: "/cards/12-TheHangedMan.png",
    upright: "牺牲，新视角，等待，放下，顺其自然。",
    reversed: "停滞，无谓的牺牲，固执，抗拒。"
  },
  {
    id: "13",
    name: "死神",
    nameEn: "Death",
    image: "/cards/13-Death.png",
    upright: "结束，转变，新生，改变，放下过去。",
    reversed: "抗拒改变，停滞，恐惧结束，死气沉沉。"
  },
  {
    id: "14",
    name: "节制",
    nameEn: "Temperance",
    image: "/cards/14-Temperance.png",
    upright: "平衡，和谐，耐心，中庸，融合。",
    reversed: "失衡，极端，缺乏耐心，冲突。"
  },
  {
    id: "15",
    name: "恶魔",
    nameEn: "The Devil",
    image: "/cards/15-TheDevil.png",
    upright: "诱惑，物质主义，束缚，成瘾，阴暗面。",
    reversed: "摆脱束缚，重获自由，面对恐惧，打破幻想。"
  },
  {
    id: "16",
    name: "高塔",
    nameEn: "The Tower",
    image: "/cards/16-TheTower.png",
    upright: "突变，灾难，觉醒，打破虚幻，混乱。",
    reversed: "避免灾难，恐惧改变，拖延不可避免的事。"
  },
  {
    id: "17",
    name: "星星",
    nameEn: "The Star",
    image: "/cards/17-TheStar.png",
    upright: "希望，灵感，治愈，信仰，宁静。",
    reversed: "绝望，缺乏信心，灰心丧气，创意枯竭。"
  },
  {
    id: "18",
    name: "月亮",
    nameEn: "The Moon",
    image: "/cards/18-TheMoon.png",
    upright: "幻觉，直觉，潜意识，恐惧，不安。",
    reversed: "真相大白，克服恐惧，释放焦虑，清晰。"
  },
  {
    id: "19",
    name: "太阳",
    nameEn: "The Sun",
    image: "/cards/19-TheSun.png",
    upright: "快乐，成功，活力，积极，成就。",
    reversed: "暂时的不快，悲观，成功被延迟，缺乏热情。"
  },
  {
    id: "20",
    name: "审判",
    nameEn: "Judgement",
    image: "/cards/20-Judgement.png",
    upright: "觉醒，重生，自我评估，宽恕，清晰的召唤。",
    reversed: "自我怀疑，无视呼唤，缺乏决断力，悔恨。"
  },
  {
    id: "21",
    name: "世界",
    nameEn: "The World",
    image: "/cards/21-TheWorld.png",
    upright: "完成，圆满，成功，旅行，和谐。",
    reversed: "未完成，缺乏闭环，停滞不前，延迟。"
  }
];

// 56 Minor Arcana Cards
export const minorArcana: TarotCard[] = [
  {
    "id": "W1",
    "name": "权杖王牌",
    "nameEn": "Ace of Wands",
    "image": "/cards/Wands01.png",
    "upright": "在权杖的领域中，代表了王牌的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在权杖的领域中，代表了王牌的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "W2",
    "name": "权杖二",
    "nameEn": "Two of Wands",
    "image": "/cards/Wands02.png",
    "upright": "在权杖的领域中，代表了二的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在权杖的领域中，代表了二的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "W3",
    "name": "权杖三",
    "nameEn": "Three of Wands",
    "image": "/cards/Wands03.png",
    "upright": "在权杖的领域中，代表了三的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在权杖的领域中，代表了三的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "W4",
    "name": "权杖四",
    "nameEn": "Four of Wands",
    "image": "/cards/Wands04.png",
    "upright": "在权杖的领域中，代表了四的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在权杖的领域中，代表了四的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "W5",
    "name": "权杖五",
    "nameEn": "Five of Wands",
    "image": "/cards/Wands05.png",
    "upright": "在权杖的领域中，代表了五的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在权杖的领域中，代表了五的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "W6",
    "name": "权杖六",
    "nameEn": "Six of Wands",
    "image": "/cards/Wands06.png",
    "upright": "在权杖的领域中，代表了六的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在权杖的领域中，代表了六的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "W7",
    "name": "权杖七",
    "nameEn": "Seven of Wands",
    "image": "/cards/Wands07.png",
    "upright": "在权杖的领域中，代表了七的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在权杖的领域中，代表了七的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "W8",
    "name": "权杖八",
    "nameEn": "Eight of Wands",
    "image": "/cards/Wands08.png",
    "upright": "在权杖的领域中，代表了八的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在权杖的领域中，代表了八的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "W9",
    "name": "权杖九",
    "nameEn": "Nine of Wands",
    "image": "/cards/Wands09.png",
    "upright": "在权杖的领域中，代表了九的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在权杖的领域中，代表了九的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "W10",
    "name": "权杖十",
    "nameEn": "Ten of Wands",
    "image": "/cards/Wands10.png",
    "upright": "在权杖的领域中，代表了十的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在权杖的领域中，代表了十的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "W11",
    "name": "权杖侍从",
    "nameEn": "Page of Wands",
    "image": "/cards/Wands11.png",
    "upright": "在权杖的领域中，代表了侍从的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在权杖的领域中，代表了侍从的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "W12",
    "name": "权杖骑士",
    "nameEn": "Knight of Wands",
    "image": "/cards/Wands12.png",
    "upright": "在权杖的领域中，代表了骑士的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在权杖的领域中，代表了骑士的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "W13",
    "name": "权杖王后",
    "nameEn": "Queen of Wands",
    "image": "/cards/Wands13.png",
    "upright": "在权杖的领域中，代表了王后的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在权杖的领域中，代表了王后的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "W14",
    "name": "权杖国王",
    "nameEn": "King of Wands",
    "image": "/cards/Wands14.png",
    "upright": "在权杖的领域中，代表了国王的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在权杖的领域中，代表了国王的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "C1",
    "name": "圣杯王牌",
    "nameEn": "Ace of Cups",
    "image": "/cards/Cups01.png",
    "upright": "在圣杯的领域中，代表了王牌的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在圣杯的领域中，代表了王牌的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "C2",
    "name": "圣杯二",
    "nameEn": "Two of Cups",
    "image": "/cards/Cups02.png",
    "upright": "在圣杯的领域中，代表了二的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在圣杯的领域中，代表了二的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "C3",
    "name": "圣杯三",
    "nameEn": "Three of Cups",
    "image": "/cards/Cups03.png",
    "upright": "在圣杯的领域中，代表了三的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在圣杯的领域中，代表了三的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "C4",
    "name": "圣杯四",
    "nameEn": "Four of Cups",
    "image": "/cards/Cups04.png",
    "upright": "在圣杯的领域中，代表了四的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在圣杯的领域中，代表了四的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "C5",
    "name": "圣杯五",
    "nameEn": "Five of Cups",
    "image": "/cards/Cups05.png",
    "upright": "在圣杯的领域中，代表了五的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在圣杯的领域中，代表了五的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "C6",
    "name": "圣杯六",
    "nameEn": "Six of Cups",
    "image": "/cards/Cups06.png",
    "upright": "在圣杯的领域中，代表了六的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在圣杯的领域中，代表了六的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "C7",
    "name": "圣杯七",
    "nameEn": "Seven of Cups",
    "image": "/cards/Cups07.png",
    "upright": "在圣杯的领域中，代表了七的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在圣杯的领域中，代表了七的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "C8",
    "name": "圣杯八",
    "nameEn": "Eight of Cups",
    "image": "/cards/Cups08.png",
    "upright": "在圣杯的领域中，代表了八的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在圣杯的领域中，代表了八的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "C9",
    "name": "圣杯九",
    "nameEn": "Nine of Cups",
    "image": "/cards/Cups09.png",
    "upright": "在圣杯的领域中，代表了九的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在圣杯的领域中，代表了九的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "C10",
    "name": "圣杯十",
    "nameEn": "Ten of Cups",
    "image": "/cards/Cups10.png",
    "upright": "在圣杯的领域中，代表了十的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在圣杯的领域中，代表了十的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "C11",
    "name": "圣杯侍从",
    "nameEn": "Page of Cups",
    "image": "/cards/Cups11.png",
    "upright": "在圣杯的领域中，代表了侍从的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在圣杯的领域中，代表了侍从的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "C12",
    "name": "圣杯骑士",
    "nameEn": "Knight of Cups",
    "image": "/cards/Cups12.png",
    "upright": "在圣杯的领域中，代表了骑士的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在圣杯的领域中，代表了骑士的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "C13",
    "name": "圣杯王后",
    "nameEn": "Queen of Cups",
    "image": "/cards/Cups13.png",
    "upright": "在圣杯的领域中，代表了王后的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在圣杯的领域中，代表了王后的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "C14",
    "name": "圣杯国王",
    "nameEn": "King of Cups",
    "image": "/cards/Cups14.png",
    "upright": "在圣杯的领域中，代表了国王的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在圣杯的领域中，代表了国王的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "S1",
    "name": "宝剑王牌",
    "nameEn": "Ace of Swords",
    "image": "/cards/Swords01.png",
    "upright": "在宝剑的领域中，代表了王牌的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在宝剑的领域中，代表了王牌的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "S2",
    "name": "宝剑二",
    "nameEn": "Two of Swords",
    "image": "/cards/Swords02.png",
    "upright": "在宝剑的领域中，代表了二的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在宝剑的领域中，代表了二的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "S3",
    "name": "宝剑三",
    "nameEn": "Three of Swords",
    "image": "/cards/Swords03.png",
    "upright": "在宝剑的领域中，代表了三的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在宝剑的领域中，代表了三的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "S4",
    "name": "宝剑四",
    "nameEn": "Four of Swords",
    "image": "/cards/Swords04.png",
    "upright": "在宝剑的领域中，代表了四的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在宝剑的领域中，代表了四的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "S5",
    "name": "宝剑五",
    "nameEn": "Five of Swords",
    "image": "/cards/Swords05.png",
    "upright": "在宝剑的领域中，代表了五的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在宝剑的领域中，代表了五的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "S6",
    "name": "宝剑六",
    "nameEn": "Six of Swords",
    "image": "/cards/Swords06.png",
    "upright": "在宝剑的领域中，代表了六的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在宝剑的领域中，代表了六的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "S7",
    "name": "宝剑七",
    "nameEn": "Seven of Swords",
    "image": "/cards/Swords07.png",
    "upright": "在宝剑的领域中，代表了七的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在宝剑的领域中，代表了七的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "S8",
    "name": "宝剑八",
    "nameEn": "Eight of Swords",
    "image": "/cards/Swords08.png",
    "upright": "在宝剑的领域中，代表了八的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在宝剑的领域中，代表了八的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "S9",
    "name": "宝剑九",
    "nameEn": "Nine of Swords",
    "image": "/cards/Swords09.png",
    "upright": "在宝剑的领域中，代表了九的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在宝剑的领域中，代表了九的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "S10",
    "name": "宝剑十",
    "nameEn": "Ten of Swords",
    "image": "/cards/Swords10.png",
    "upright": "在宝剑的领域中，代表了十的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在宝剑的领域中，代表了十的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "S11",
    "name": "宝剑侍从",
    "nameEn": "Page of Swords",
    "image": "/cards/Swords11.png",
    "upright": "在宝剑的领域中，代表了侍从的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在宝剑的领域中，代表了侍从的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "S12",
    "name": "宝剑骑士",
    "nameEn": "Knight of Swords",
    "image": "/cards/Swords12.png",
    "upright": "在宝剑的领域中，代表了骑士的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在宝剑的领域中，代表了骑士的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "S13",
    "name": "宝剑王后",
    "nameEn": "Queen of Swords",
    "image": "/cards/Swords13.png",
    "upright": "在宝剑的领域中，代表了王后的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在宝剑的领域中，代表了王后的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "S14",
    "name": "宝剑国王",
    "nameEn": "King of Swords",
    "image": "/cards/Swords14.png",
    "upright": "在宝剑的领域中，代表了国王的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在宝剑的领域中，代表了国王的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "P1",
    "name": "星币王牌",
    "nameEn": "Ace of Pentacles",
    "image": "/cards/Pentacles01.png",
    "upright": "在星币的领域中，代表了王牌的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在星币的领域中，代表了王牌的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "P2",
    "name": "星币二",
    "nameEn": "Two of Pentacles",
    "image": "/cards/Pentacles02.png",
    "upright": "在星币的领域中，代表了二的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在星币的领域中，代表了二的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "P3",
    "name": "星币三",
    "nameEn": "Three of Pentacles",
    "image": "/cards/Pentacles03.png",
    "upright": "在星币的领域中，代表了三的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在星币的领域中，代表了三的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "P4",
    "name": "星币四",
    "nameEn": "Four of Pentacles",
    "image": "/cards/Pentacles04.png",
    "upright": "在星币的领域中，代表了四的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在星币的领域中，代表了四的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "P5",
    "name": "星币五",
    "nameEn": "Five of Pentacles",
    "image": "/cards/Pentacles05.png",
    "upright": "在星币的领域中，代表了五的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在星币的领域中，代表了五的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "P6",
    "name": "星币六",
    "nameEn": "Six of Pentacles",
    "image": "/cards/Pentacles06.png",
    "upright": "在星币的领域中，代表了六的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在星币的领域中，代表了六的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "P7",
    "name": "星币七",
    "nameEn": "Seven of Pentacles",
    "image": "/cards/Pentacles07.png",
    "upright": "在星币的领域中，代表了七的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在星币的领域中，代表了七的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "P8",
    "name": "星币八",
    "nameEn": "Eight of Pentacles",
    "image": "/cards/Pentacles08.png",
    "upright": "在星币的领域中，代表了八的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在星币的领域中，代表了八的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "P9",
    "name": "星币九",
    "nameEn": "Nine of Pentacles",
    "image": "/cards/Pentacles09.png",
    "upright": "在星币的领域中，代表了九的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在星币的领域中，代表了九的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "P10",
    "name": "星币十",
    "nameEn": "Ten of Pentacles",
    "image": "/cards/Pentacles10.png",
    "upright": "在星币的领域中，代表了十的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在星币的领域中，代表了十的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "P11",
    "name": "星币侍从",
    "nameEn": "Page of Pentacles",
    "image": "/cards/Pentacles11.png",
    "upright": "在星币的领域中，代表了侍从的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在星币的领域中，代表了侍从的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "P12",
    "name": "星币骑士",
    "nameEn": "Knight of Pentacles",
    "image": "/cards/Pentacles12.png",
    "upright": "在星币的领域中，代表了骑士的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在星币的领域中，代表了骑士的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "P13",
    "name": "星币王后",
    "nameEn": "Queen of Pentacles",
    "image": "/cards/Pentacles13.png",
    "upright": "在星币的领域中，代表了王后的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在星币的领域中，代表了王后的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  },
  {
    "id": "P14",
    "name": "星币国王",
    "nameEn": "King of Pentacles",
    "image": "/cards/Pentacles14.png",
    "upright": "在星币的领域中，代表了国王的正向能量。象征着该元素在生活中的顺畅发展与显化。",
    "reversed": "在星币的领域中，代表了国王的受阻状态。象征着能量的内耗、延迟或是使用不当。"
  }
];

export const fullTarotDeck: TarotCard[] = [...majorArcana, ...minorArcana];
