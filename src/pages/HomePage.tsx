import Hero from "@/components/Hero"
import HeroParallaxDemo from "@/components/hero-parallax-demo"

export default function HomePage() {
  return (
    <div className="relative z-10">
      <Hero />
      <HeroParallaxDemo />
    </div>
  )
}
