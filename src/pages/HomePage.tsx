import AnimatedBackground from "@/components/AnimatedBackground"
import Hero from "@/components/Hero"
import HeroParallaxDemo from "@/components/hero-parallax-demo"
import NoiseOverlay from "@/components/NoiseOverlay"
import InteractiveMagneticOrbs from "@/components/InteractiveMagneticOrbs"

export default function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <NoiseOverlay />
      <InteractiveMagneticOrbs />
      <div className="relative z-10">
        <Hero />
        <HeroParallaxDemo />
      </div>
    </>
  )
}
