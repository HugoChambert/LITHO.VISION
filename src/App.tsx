import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import HomePage from "@/pages/HomePage"
import HowItWorksPage from "@/pages/HowItWorksPage"
import AboutPage from "@/pages/AboutPage"
import ContactPage from "@/pages/ContactPage"
import PrivacyPage from "@/pages/PrivacyPage"
import TermsPage from "@/pages/TermsPage"

function App() {
  return (
    <Router basename="/LITHO.VISION">
      <div className="bg-black min-h-screen relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
