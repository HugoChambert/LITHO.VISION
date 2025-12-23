import { useState } from "react"
import AnimatedBackground from "@/components/AnimatedBackground"
import Hero from "@/components/Hero"
import HeroParallaxDemo from "@/components/hero-parallax-demo"
import NoiseOverlay from "@/components/NoiseOverlay"
import MagneticGrid from "@/components/MagneticGrid"

export default function HomePage() {
  const [isMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768
    }
    return false
  })

  return (
    <>
      <AnimatedBackground />
      <NoiseOverlay />
      <MagneticGrid />
      <div className="relative z-10">
        <Hero />
        {!isMobile && <HeroParallaxDemo />}
      </div>
    </>
  )
}
