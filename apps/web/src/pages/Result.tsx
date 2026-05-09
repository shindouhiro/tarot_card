import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, RotateCw, Sparkles, Hand } from 'lucide-react'
import { useTarotStore } from '../store/useTarotStore'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Result() {
  const navigate = useNavigate()
  const { drawnCard, reset } = useTarotStore()
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    if (!drawnCard) {
      navigate('/')
    }
  }, [drawnCard, navigate])

  if (!drawnCard) return null

  const { name, nameEn, image, isReversed, upright, reversed } = drawnCard
  const meaning = isReversed ? reversed : upright
  const positionText = isReversed ? '逆位' : '正位'

  const handleRetry = () => {
    reset()
    navigate('/draw')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full p-4 md:p-8 bg-background text-foreground">
      <Button
        variant="ghost"
        className="absolute top-8 left-8 text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors"
        onClick={() => navigate('/')}
      >
        <ArrowLeft size={20} /> 返回首页
      </Button>

      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-12 mt-12 justify-center">
        {/* Card Image Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative w-64 h-96 md:w-80 md:h-[30rem] shrink-0 cursor-pointer group"
          style={{ perspective: '1000px' }}
          onClick={() => !isRevealed && setIsRevealed(true)}
        >
          {/* Glow effect behind card */}
          <div className="absolute inset-0 bg-tarot-accent/40 blur-[50px] -z-10 rounded-full transition-opacity duration-1000" style={{ opacity: isRevealed ? 1 : 0 }} />
          
          <motion.div
            className="w-full h-full relative preserve-3d transition-all duration-1000"
            animate={{ rotateY: isRevealed ? (isReversed ? 180 + 180 : 180) : 0 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Card Back (Front face before flip) */}
            <div 
              className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-indigo-800 to-purple-900 border-2 border-purple-500/30 rounded-xl shadow-xl flex items-center justify-center overflow-hidden"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="absolute inset-2 border border-purple-400/20 rounded-lg flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-tarot-gold/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <div className="w-8 h-8 bg-tarot-gold/20 rounded-full flex items-center justify-center animate-pulse">
                    <Sparkles className="text-tarot-gold/60 w-4 h-4" />
                  </div>
                </div>
              </div>
              {!isRevealed && (
                <div className="absolute bottom-8 flex flex-col items-center text-purple-300/80 animate-bounce">
                  <Hand size={24} className="mb-2" />
                  <span className="text-sm font-light tracking-widest">点击翻开命运</span>
                </div>
              )}
            </div>

            {/* Card Front (Back face before flip) */}
            <div 
              className="absolute inset-0 w-full h-full backface-hidden rounded-xl shadow-2xl border-2 border-tarot-gold/30 overflow-hidden"
              style={{ 
                backfaceVisibility: 'hidden',
                transform: `rotateY(180deg) ${isRevealed && isReversed ? 'rotateZ(180deg)' : ''}` 
              }}
            >
              <img 
                src={image} 
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Info Area */}
        <AnimatePresence>
          {isRevealed && (
            <motion.div 
              initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col flex-1"
            >
              <div className="flex items-end gap-4 mb-2">
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-tarot-gold">
                  {name}
                </h2>
                <span className="text-xl text-purple-400 font-light mb-1">{nameEn}</span>
              </div>

              <div className="inline-flex items-center w-fit px-3 py-1 rounded-full bg-purple-900/50 border border-purple-500/30 text-purple-200 mb-8 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <span className="text-sm tracking-widest">{positionText}</span>
              </div>

              <Card className="bg-card/40 backdrop-blur-md border-border shadow-2xl mb-8">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-medium text-tarot-gold mb-4 flex items-center gap-2">
                    <Sparkles size={20} className="text-tarot-gold" /> 命运指引
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground font-light tracking-wide">
                    {meaning}
                  </p>
                </CardContent>
              </Card>

              <Button
                size="lg"
                className="w-full md:w-auto font-medium shadow-lg transition-all hover:shadow-purple-500/20"
                onClick={handleRetry}
              >
                <RotateCw size={20} className="mr-2" /> 重新占卜
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
