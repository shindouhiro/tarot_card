import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, RotateCw, Sparkles } from 'lucide-react'
import { useTarotStore } from '../store/useTarotStore'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Result() {
  const navigate = useNavigate()
  const { drawnCard, reset } = useTarotStore()

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

      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-12 mt-12">
        {/* Card Image Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative w-64 h-96 md:w-80 md:h-[30rem] shrink-0"
        >
          {/* Glow effect behind card */}
          <div className="absolute inset-0 bg-tarot-accent/40 blur-[50px] -z-10 rounded-full" />
          
          <motion.img 
            src={image} 
            alt={name}
            animate={{ rotate: isReversed ? 180 : 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full h-full object-cover rounded-xl shadow-2xl border-2 border-tarot-gold/30"
          />
        </motion.div>

        {/* Info Area */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col flex-1"
        >
          <div className="flex items-end gap-4 mb-2">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-tarot-gold">
              {name}
            </h2>
            <span className="text-xl text-purple-400 font-light mb-1">{nameEn}</span>
          </div>

          <div className="inline-flex items-center w-fit px-3 py-1 rounded-full bg-purple-900/50 border border-purple-500/30 text-purple-200 mb-8">
            <span className="text-sm tracking-widest">{positionText}</span>
          </div>

          <Card className="bg-card/50 backdrop-blur-md border-border shadow-xl mb-8">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-medium text-tarot-gold mb-4 flex items-center gap-2">
                <Sparkles size={20} /> 命运指引
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground font-light tracking-wide">
                {meaning}
              </p>
            </CardContent>
          </Card>

          <Button
            size="lg"
            className="w-full md:w-auto font-medium shadow-lg transition-all"
            onClick={handleRetry}
          >
            <RotateCw size={20} className="mr-2" /> 重新占卜
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
