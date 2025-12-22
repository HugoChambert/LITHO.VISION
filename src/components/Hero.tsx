import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-30">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

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
          whileHover={{ scale: 1.02 }}
        >
          LITHOVISION
          <motion.div
            className="absolute -inset-4 bg-white/5 rounded-3xl -z-10"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
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
