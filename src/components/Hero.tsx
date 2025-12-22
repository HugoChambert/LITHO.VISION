import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-0">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.5"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.55'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          opacity: 0.4,
          mixBlendMode: 'overlay',
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-auto">
        <motion.div
          className="flex text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white select-none mb-8"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {'LITHOVISION'.split('').map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block transition-all duration-300 hover:-translate-y-4 hover:text-blue-400 cursor-pointer"
              style={{
                transitionDelay: `${index * 20}ms`,
                textShadow: '0 0 40px rgba(59, 130, 246, 0.3)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-white/90 tracking-wide select-none pointer-events-none"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontWeight: 300,
            letterSpacing: '0.05em',
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          See the stone. Sell with certainty
        </motion.p>
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
