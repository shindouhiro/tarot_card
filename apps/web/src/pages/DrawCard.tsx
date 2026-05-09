import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useTarotStore } from '../store/useTarotStore'

export default function DrawCard() {
  const navigate = useNavigate()
  const { deck, shuffle, isShuffling, drawCard } = useTarotStore()

  useEffect(() => {
    shuffle()
  }, [shuffle])

  const handleDraw = (index: number) => {
    if (isShuffling) return
    drawCard(index)
    // Small delay to show the card was clicked before navigating
    setTimeout(() => {
      navigate('/result')
    }, 600)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full p-6">
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-light mb-8 text-purple-200 tracking-widest"
      >
        {isShuffling ? "命运洗牌中..." : "请抽取一张属于你的牌"}
      </motion.h2>

      <div className="relative w-full max-w-4xl h-[60vh] flex items-center justify-center">
        {deck.map((_, index) => {
          // Spread cards in an arc
          const angle = (index - deck.length / 2) * 5
          const isCenter = index === Math.floor(deck.length / 2)
          
          return (
            <motion.div
              key={index}
              onClick={() => handleDraw(index)}
              initial={false}
              animate={{
                rotate: isShuffling ? 0 : angle,
                y: isShuffling ? 0 : Math.abs(angle) * 1.5,
                x: isShuffling ? 0 : (index - deck.length / 2) * 30,
              }}
              whileHover={{ 
                y: isShuffling ? 0 : Math.abs(angle) * 1.5 - 30,
                scale: 1.1,
                zIndex: 50,
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)"
              }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                delay: isShuffling ? 0 : index * 0.05
              }}
              className="absolute w-24 h-40 md:w-32 md:h-52 bg-gradient-to-br from-indigo-800 to-purple-900 border border-purple-500/30 rounded-xl cursor-pointer shadow-xl"
              style={{
                transformOrigin: "bottom center",
                zIndex: index
              }}
            >
              {/* Card back design */}
              <div className="absolute inset-2 border border-purple-400/20 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border border-tarot-gold/40 flex items-center justify-center">
                  <div className="w-4 h-4 bg-tarot-gold/20 rounded-full" />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
