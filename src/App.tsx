import HeroParallaxDemo from "@/components/hero-parallax-demo"
import Navbar from "@/components/Navbar"
import SplineLanding from "@/components/SplineLanding"

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <SplineLanding />
      <HeroParallaxDemo />
    </div>
  )
}

export default App
