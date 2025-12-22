import AnimatedBackground from "@/components/AnimatedBackground"
import Hero from "@/components/Hero"
import HeroParallaxDemo from "@/components/hero-parallax-demo"
import InteractiveFeatures from "@/components/InteractiveFeatures"
import ScrollReveal from "@/components/ScrollReveal"

export default function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10">
        <Hero />
        <ScrollReveal>
          <InteractiveFeatures />
        </ScrollReveal>
        <ScrollReveal>
          <HeroParallaxDemo />
        </ScrollReveal>
      </div>
    </>
  )
}
