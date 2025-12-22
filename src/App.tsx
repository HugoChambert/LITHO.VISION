import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "@/components/Navbar"
import AnimatedBackground from "@/components/AnimatedBackground"
import HomePage from "@/pages/HomePage"
import HowItWorksPage from "@/pages/HowItWorksPage"

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen relative">
        <AnimatedBackground />
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
