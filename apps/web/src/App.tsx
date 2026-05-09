import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DrawCard from './pages/DrawCard'
import Result from './pages/Result'
import Gallery from './pages/Gallery'

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen w-full bg-tarot-dark flex flex-col items-center justify-center relative overflow-hidden text-gray-100 font-sans">
        {/* Starry background effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-tarot-dark to-tarot-dark -z-10" />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/draw" element={<DrawCard />} />
          <Route path="/result" element={<Result />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
