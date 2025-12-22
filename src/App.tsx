import HeroParallaxDemo from "@/components/hero-parallax-demo"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <HeroParallaxDemo />
    </div>
  )
}

export default App
