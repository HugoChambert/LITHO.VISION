import AnimatedBackground from "@/components/AnimatedBackground"
import Hero from "@/components/Hero"
import NoiseOverlay from "@/components/NoiseOverlay"
import MagneticGrid from "@/components/MagneticGrid"

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <NoiseOverlay />
      <MagneticGrid />
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  )
}
