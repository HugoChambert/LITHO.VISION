import AnimatedBackground from "@/components/AnimatedBackground"
import Hero from "@/components/Hero"
import HeroParallaxDemo from "@/components/hero-parallax-demo"

export default function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10">
        <Hero />
        <HeroParallaxDemo />
      </div>
    </>
  )
}
