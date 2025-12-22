import { motion } from "motion/react";
import { useState, useRef } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const heroRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      setMousePosition({ x, y })
    }
  }

  return (
    <div
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0a0a0f 0%, #000814 100%)',
      }}
    >
      <div className="absolute inset-0" style={{ backdropFilter: 'blur(100px)' }}>
        <motion.div
          className="absolute rounded-full opacity-30"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(37, 99, 235, 0.2) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            x: '-50%',
            y: '-50%',
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 100,
          }}
        />

        <motion.div
          className="absolute rounded-full opacity-25"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.35) 0%, rgba(59, 130, 246, 0.15) 40%, transparent 70%)',
            filter: 'blur(70px)',
          }}
          animate={{
            left: `${100 - mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            x: '-50%',
            y: '-50%',
          }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 80,
          }}
        />

        <motion.div
          className="absolute rounded-full opacity-20"
          style={{
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(147, 197, 253, 0.3) 0%, rgba(96, 165, 250, 0.15) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            left: `${mousePosition.x}%`,
            top: `${100 - mousePosition.y}%`,
            x: '-50%',
            y: '-50%',
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 70,
          }}
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(2px)',
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
        className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 60%, #000000 100%)',
        }}
      />
    </div>
  );
}
