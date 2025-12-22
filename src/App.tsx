import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "@/components/Navbar"
import HomePage from "@/pages/HomePage"
import HowItWorksPage from "@/pages/HowItWorksPage"
import CustomCursor from "@/components/CustomCursor"

function App() {
  return (
    <Router>
      <div className="bg-black">
        <CustomCursor />
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
