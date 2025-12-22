import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, useEffect } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  const blob1X = useMotionValue(30)
  const blob1Y = useMotionValue(40)
  const blob2X = useMotionValue(70)
  const blob2Y = useMotionValue(50)
  const blob3X = useMotionValue(50)
  const blob3Y = useMotionValue(60)

  const springConfig = { damping: 40, stiffness: 50 }
  const blob1XSpring = useSpring(blob1X, springConfig)
  const blob1YSpring = useSpring(blob1Y, springConfig)
  const blob2XSpring = useSpring(blob2X, springConfig)
  const blob2YSpring = useSpring(blob2Y, springConfig)
  const blob3XSpring = useSpring(blob3X, springConfig)
  const blob3YSpring = useSpring(blob3Y, springConfig)

  useEffect(() => {
    const animateBlobs = () => {
      const time = Date.now() * 0.0005

      blob1X.set(30 + Math.sin(time * 0.8) * 15)
      blob1Y.set(40 + Math.cos(time * 0.6) * 15)

      blob2X.set(70 + Math.sin(time * 0.7 + 2) * 18)
      blob2Y.set(50 + Math.cos(time * 0.5 + 2) * 18)

      blob3X.set(50 + Math.sin(time * 0.6 + 4) * 20)
      blob3Y.set(60 + Math.cos(time * 0.8 + 4) * 20)
    }

    const interval = setInterval(animateBlobs, 50)
    return () => clearInterval(interval)
  }, [blob1X, blob1Y, blob2X, blob2Y, blob3X, blob3Y])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100

      const influenceRadius = 25

      const distance1 = Math.sqrt(Math.pow(x - blob1X.get(), 2) + Math.pow(y - blob1Y.get(), 2))
      if (distance1 < influenceRadius) {
        const force = 1 - (distance1 / influenceRadius)
        blob1X.set(blob1X.get() + (x - blob1X.get()) * force * 0.3)
        blob1Y.set(blob1Y.get() + (y - blob1Y.get()) * force * 0.3)
      }

      const distance2 = Math.sqrt(Math.pow(x - blob2X.get(), 2) + Math.pow(y - blob2Y.get(), 2))
      if (distance2 < influenceRadius) {
        const force = 1 - (distance2 / influenceRadius)
        blob2X.set(blob2X.get() + (x - blob2X.get()) * force * 0.3)
        blob2Y.set(blob2Y.get() + (y - blob2Y.get()) * force * 0.3)
      }

      const distance3 = Math.sqrt(Math.pow(x - blob3X.get(), 2) + Math.pow(y - blob3Y.get(), 2))
      if (distance3 < influenceRadius) {
        const force = 1 - (distance3 / influenceRadius)
        blob3X.set(blob3X.get() + (x - blob3X.get()) * force * 0.3)
        blob3Y.set(blob3Y.get() + (y - blob3Y.get()) * force * 0.3)
      }
    }
  }

  return (
    <div
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      <motion.div
        className="absolute rounded-full z-0"
        style={{
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(37, 99, 235, 0.5) 30%, rgba(29, 78, 216, 0.3) 50%, transparent 70%)',
          filter: 'blur(120px)',
          left: blob1XSpring,
          top: blob1YSpring,
          x: '-50%',
          y: '-50%',
        }}
      />

      <motion.div
        className="absolute rounded-full z-0"
        style={{
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.7) 0%, rgba(59, 130, 246, 0.4) 30%, rgba(37, 99, 235, 0.2) 50%, transparent 70%)',
          filter: 'blur(100px)',
          left: blob2XSpring,
          top: blob2YSpring,
          x: '-50%',
          y: '-50%',
        }}
      />

      <motion.div
        className="absolute rounded-full z-0"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(147, 197, 253, 0.6) 0%, rgba(96, 165, 250, 0.4) 30%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)',
          filter: 'blur(90px)',
          left: blob3XSpring,
          top: blob3YSpring,
          x: '-50%',
          y: '-50%',
        }}
      />

      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(96, 165, 250, 0.12) 0%, transparent 50%), linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, transparent 50%, rgba(147, 197, 253, 0.08) 100%)',
          mixBlendMode: 'screen',
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.h1
          className="text-[12vw] font-black tracking-tight select-none relative"
          style={{
            fontFamily: 'HelveticaNeueLTPro-Bd, Helvetica, Arial, sans-serif',
            background: 'linear-gradient(135deg, #ffffff 0%, #e0f7ff 50%, #ffffff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 80px rgba(59, 130, 246, 0.3)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          LITHOVISION
        </motion.h1>
      </div>

      <motion.div
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="text-white text-xs md:text-sm tracking-widest opacity-70">
          SCROLL TO EXPLORE
        </div>
      </motion.div>

      <div
        className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none z-5"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 60%, #000000 100%)',
        }}
      />
    </div>
  );
}
