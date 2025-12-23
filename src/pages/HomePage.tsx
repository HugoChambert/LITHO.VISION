import AnimatedBackground from "@/components/AnimatedBackground"
import Hero from "@/components/Hero"
import HeroParallaxDemo from "@/components/hero-parallax-demo"
import NoiseOverlay from "@/components/NoiseOverlay"
import MagneticGrid from "@/components/MagneticGrid"

export default function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <NoiseOverlay />
      <MagneticGrid />
      <div className="relative z-10">
        <Hero />
        <HeroParallaxDemo />
      </div>
    </>
  )
}
