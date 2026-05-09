import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import { StarBorder } from '../components/react-bits/StarBorder'
import { ShinyText } from '../components/react-bits/ShinyText'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-tarot-gold drop-shadow-lg">
          <ShinyText text="神秘塔罗" speed={5} />
        </h1>
        <p className="text-xl md:text-2xl text-purple-200 mb-12 max-w-lg mx-auto font-light tracking-wide">
          倾听命运的低语，揭开未来的面纱。
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row items-center gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/draw')}
          className="cursor-pointer"
        >
          <StarBorder color="#8b5cf6" speed="3s">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-tarot-gold animate-pulse" />
              <span className="text-xl font-medium tracking-widest text-white relative z-10">开始占卜</span>
            </div>
          </StarBorder>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(251, 191, 36, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/gallery')}
          className="relative group px-8 py-[18px] bg-transparent border border-tarot-gold/50 rounded-full overflow-hidden flex items-center justify-center gap-3 backdrop-blur-md transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-tarot-gold/10 to-yellow-500/10 group-hover:opacity-100 opacity-50 transition-opacity" />
          <span className="text-lg font-medium tracking-widest text-tarot-gold relative z-10">图鉴预览</span>
        </motion.button>
      </div>
    </div>
  )
}
