import AnimatedBackground from "@/components/AnimatedBackground"
import Hero from "@/components/Hero"
import HeroParallaxDemo from "@/components/hero-parallax-demo"
import NoiseOverlay from "@/components/NoiseOverlay"

export default function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <NoiseOverlay />
      <div className="relative z-10">
        <Hero />
        <HeroParallaxDemo />
      </div>
    </>
  )
}
