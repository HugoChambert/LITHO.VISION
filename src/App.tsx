import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import HomePage from "@/pages/HomePage"
import HowItWorksPage from "@/pages/HowItWorksPage"

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen relative flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
