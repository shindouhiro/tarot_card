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
    image: "https://upload.wikimedia.org/wikipedia/en/9/90/RWS_Tarot_00_Fool.jpg",
    upright: "新的开始，冒险，无限可能，天真，自发性。",
    reversed: "鲁莽，不负责任，错失良机，冒险带来危险。"
  },
  {
    id: "1",
    name: "魔术师",
    nameEn: "The Magician",
    image: "https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg",
    upright: "创造力，意志力，技能，自信，实现目标的能力。",
    reversed: "欺骗，缺乏行动力，才华被压抑，操纵。"
  },
  {
    id: "2",
    name: "女祭司",
    nameEn: "The High Priestess",
    image: "https://upload.wikimedia.org/wikipedia/en/8/88/RWS_Tarot_02_High_Priestess.jpg",
    upright: "直觉，潜意识，神秘，内在知识，耐心。",
    reversed: "秘密被揭露，忽视直觉，表面化，情绪化。"
  },
  {
    id: "3",
    name: "皇后",
    nameEn: "The Empress",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d2/RWS_Tarot_03_Empress.jpg",
    upright: "丰收，母性，创造力，自然，富足，美丽。",
    reversed: "依赖，过度保护，创造力受阻，缺乏满足感。"
  },
  {
    id: "4",
    name: "皇帝",
    nameEn: "The Emperor",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c3/RWS_Tarot_04_Emperor.jpg",
    upright: "权力，结构，稳定，领导力，逻辑，权威。",
    reversed: "专制，死板，缺乏纪律，滥用权力。"
  },
  {
    id: "5",
    name: "教皇",
    nameEn: "The Hierophant",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8d/RWS_Tarot_05_Hierophant.jpg",
    upright: "传统，信仰，教育，精神指引，规则。",
    reversed: "叛逆，打破常规，盲从，限制性信念。"
  },
  {
    id: "6",
    name: "恋人",
    nameEn: "The Lovers",
    image: "https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg",
    upright: "爱情，和谐，关系，价值观对齐，重要选择。",
    reversed: "失衡，不和谐，错误的选择，关系破裂。"
  },
  {
    id: "7",
    name: "战车",
    nameEn: "The Chariot",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg",
    upright: "控制力，意志，胜利，决心，克服障碍。",
    reversed: "失控，阻力，缺乏方向，被动。"
  },
  {
    id: "8",
    name: "力量",
    nameEn: "Strength",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg",
    upright: "内在力量，勇气，同情心，耐心，温柔的控制。",
    reversed: "自我怀疑，虚弱，缺乏自信，被情绪控制。"
  },
  {
    id: "9",
    name: "隐士",
    nameEn: "The Hermit",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4d/RWS_Tarot_09_Hermit.jpg",
    upright: "内省，孤独，内在指引，沉思，寻找真相。",
    reversed: "孤立，过度退缩，拒绝帮助，迷失方向。"
  },
  {
    id: "10",
    name: "命运之轮",
    nameEn: "Wheel of Fortune",
    image: "https://upload.wikimedia.org/wikipedia/en/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg",
    upright: "好运，转折点，命运，循环，必然的改变。",
    reversed: "厄运，抗拒改变，失控，停滞不前。"
  },
  {
    id: "11",
    name: "正义",
    nameEn: "Justice",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e0/RWS_Tarot_11_Justice.jpg",
    upright: "公平，真相，法律，因果报应，责任。",
    reversed: "不公，偏见，逃避责任，不诚实。"
  },
  {
    id: "12",
    name: "倒吊人",
    nameEn: "The Hanged Man",
    image: "https://upload.wikimedia.org/wikipedia/en/2/2b/RWS_Tarot_12_Hanged_Man.jpg",
    upright: "牺牲，新视角，等待，放下，顺其自然。",
    reversed: "停滞，无谓的牺牲，固执，抗拒。"
  },
  {
    id: "13",
    name: "死神",
    nameEn: "Death",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d7/RWS_Tarot_13_Death.jpg",
    upright: "结束，转变，新生，改变，放下过去。",
    reversed: "抗拒改变，停滞，恐惧结束，死气沉沉。"
  },
  {
    id: "14",
    name: "节制",
    nameEn: "Temperance",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f8/RWS_Tarot_14_Temperance.jpg",
    upright: "平衡，和谐，耐心，中庸，融合。",
    reversed: "失衡，极端，缺乏耐心，冲突。"
  },
  {
    id: "15",
    name: "恶魔",
    nameEn: "The Devil",
    image: "https://upload.wikimedia.org/wikipedia/en/5/55/RWS_Tarot_15_Devil.jpg",
    upright: "诱惑，物质主义，束缚，成瘾，阴暗面。",
    reversed: "摆脱束缚，重获自由，面对恐惧，打破幻想。"
  },
  {
    id: "16",
    name: "高塔",
    nameEn: "The Tower",
    image: "https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg",
    upright: "突变，灾难，觉醒，打破虚幻，混乱。",
    reversed: "避免灾难，恐惧改变，拖延不可避免的事。"
  },
  {
    id: "17",
    name: "星星",
    nameEn: "The Star",
    image: "https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_17_Star.jpg",
    upright: "希望，灵感，治愈，信仰，宁静。",
    reversed: "绝望，缺乏信心，灰心丧气，创意枯竭。"
  },
  {
    id: "18",
    name: "月亮",
    nameEn: "The Moon",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7f/RWS_Tarot_18_Moon.jpg",
    upright: "幻觉，直觉，潜意识，恐惧，不安。",
    reversed: "真相大白，克服恐惧，释放焦虑，清晰。"
  },
  {
    id: "19",
    name: "太阳",
    nameEn: "The Sun",
    image: "https://upload.wikimedia.org/wikipedia/en/1/17/RWS_Tarot_19_Sun.jpg",
    upright: "快乐，成功，活力，积极，成就。",
    reversed: "暂时的不快，悲观，成功被延迟，缺乏热情。"
  },
  {
    id: "20",
    name: "审判",
    nameEn: "Judgement",
    image: "https://upload.wikimedia.org/wikipedia/en/d/dd/RWS_Tarot_20_Judgement.jpg",
    upright: "觉醒，重生，自我评估，宽恕，清晰的召唤。",
    reversed: "自我怀疑，无视呼唤，缺乏决断力，悔恨。"
  },
  {
    id: "21",
    name: "世界",
    nameEn: "The World",
    image: "https://upload.wikimedia.org/wikipedia/en/f/ff/RWS_Tarot_21_World.jpg",
    upright: "完成，圆满，成功，旅行，和谐。",
    reversed: "未完成，缺乏闭环，停滞不前，延迟。"
  }
];
