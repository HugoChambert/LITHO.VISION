import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "@/components/Navbar"
import HomePage from "@/pages/HomePage"
import HowItWorksPage from "@/pages/HowItWorksPage"

function App() {
  return (
    <Router>
      <div className="bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
