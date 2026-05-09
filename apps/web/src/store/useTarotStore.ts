import { create } from 'zustand'
import { fullTarotDeck, TarotCard } from '../data/tarotData'

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
  deck: [...fullTarotDeck],
  drawnCard: null,
  isShuffling: false,
  
  shuffle: () => {
    set({ isShuffling: true });
    // Simple Fisher-Yates shuffle
    const newDeck = [...fullTarotDeck];
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

  shuffleAndDraw: () => {
    set({ isShuffling: true, drawnCard: null })

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * fullTarotDeck.length)
      const isReversed = Math.random() > 0.5
      
      set({
        isShuffling: false,
        drawnCard: {
          ...fullTarotDeck[randomIndex],
          isReversed
        }
      })
    }, 2000)
  },

  reset: () => {
    set({ drawnCard: null, deck: [...fullTarotDeck] });
  }
}));
