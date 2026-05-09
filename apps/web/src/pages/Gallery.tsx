import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Sparkles, BookOpen } from 'lucide-react'
import { fullTarotDeck, TarotCard } from '../data/tarotData'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function Gallery() {
  const navigate = useNavigate()
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null)

  return (
    <div className="flex flex-col min-h-screen w-full bg-background text-foreground relative pb-12">
      {/* Header */}
      <div className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/80 border-b border-border p-4 md:px-8 flex items-center justify-between">
        <Button
          variant="ghost"
          className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors"
          onClick={() => navigate('/')}
        >
          <ArrowLeft size={20} /> 返回首页
        </Button>
        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tarot-gold to-pink-400 flex items-center gap-2">
          <BookOpen size={20} className="text-tarot-gold" />
          塔罗牌图鉴预览
        </h2>
        <div className="w-24" /> {/* Spacer for centering */}
      </div>

      {/* Grid */}
      <ScrollArea className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {fullTarotDeck.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group cursor-pointer flex flex-col items-center"
              onClick={() => setSelectedCard(card)}
            >
              <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden border-2 border-border/50 group-hover:border-tarot-gold/50 shadow-lg group-hover:shadow-tarot-accent/30 transition-all duration-300">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Sparkles className="text-tarot-gold w-8 h-8" />
                </div>
              </div>
              <div className="mt-3 text-center">
                <h3 className="font-semibold text-foreground group-hover:text-tarot-gold transition-colors">{card.name}</h3>
                <p className="text-xs text-muted-foreground">{card.nameEn}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollArea>

      {/* Dialog for details */}
      <Dialog open={!!selectedCard} onOpenChange={(open) => !open && setSelectedCard(null)}>
        <DialogContent className="max-w-3xl bg-card/90 backdrop-blur-xl border-border text-card-foreground">
          {selectedCard && (
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start p-2">
              <div className="w-48 md:w-64 shrink-0 rounded-xl overflow-hidden border-2 border-tarot-gold/30 shadow-2xl">
                <img src={selectedCard.image} alt={selectedCard.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col pt-2">
                <DialogHeader className="text-left mb-6">
                  <DialogTitle className="text-3xl font-bold text-tarot-gold">{selectedCard.name}</DialogTitle>
                  <DialogDescription className="text-lg text-purple-300">{selectedCard.nameEn}</DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-foreground mb-2 border-b border-border/50 pb-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500" /> 正位解析
                    </h4>
                    <p className="text-muted-foreground leading-relaxed font-light">{selectedCard.upright}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-foreground mb-2 border-b border-border/50 pb-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500" /> 逆位解析
                    </h4>
                    <p className="text-muted-foreground leading-relaxed font-light">{selectedCard.reversed}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
