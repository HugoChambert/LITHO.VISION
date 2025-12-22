import HeroParallaxDemo from "@/components/hero-parallax-demo"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <HowItWorks />
      <HeroParallaxDemo />
    </div>
  )
}

export default App
