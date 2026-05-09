import { create } from 'zustand'
import { majorArcana, TarotCard } from '../data/tarotData'

interface DrawnCard extends TarotCard {
  isReversed: boolean;
}

interface TarotState {
  deck: TarotCard[];
  drawnCard: DrawnCard | null;
  isShuffling: boolean;
  shuffle: () => void;
  drawCard: (index: number) => void;
  reset: () => void;
}

export const useTarotStore = create<TarotState>((set, get) => ({
  deck: [...majorArcana],
  drawnCard: null,
  isShuffling: false,
  
  shuffle: () => {
    set({ isShuffling: true });
    // Simple Fisher-Yates shuffle
    const newDeck = [...majorArcana];
    for (let i = newDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }
    
    // Simulate shuffle time
    setTimeout(() => {
      set({ deck: newDeck, isShuffling: false });
    }, 1500);
  },

  drawCard: (index: number) => {
    const card = get().deck[index];
    const isReversed = Math.random() > 0.5;
    set({ drawnCard: { ...card, isReversed } });
  },

  reset: () => {
    set({ drawnCard: null, deck: [...majorArcana] });
  }
}));
