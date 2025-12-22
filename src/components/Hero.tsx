import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const letters = "LITHOVISION".split("");

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
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

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-4">
        <div className="relative flex items-center justify-center">
          {letters.map((letter, index) => (
            <FloatingLetter
              key={index}
              letter={letter}
              index={index}
              mousePosition={mousePosition}
            />
          ))}
        </div>
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-white/90 tracking-wide select-none"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontWeight: 300,
            letterSpacing: '0.05em',
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
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

function FloatingLetter({
  letter,
  index,
  mousePosition,
}: {
  letter: string;
  index: number;
  mousePosition: { x: number; y: number };
}) {
  const letterRef = useRef<HTMLSpanElement>(null);
  const [letterPosition, setLetterPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (letterRef.current) {
      const rect = letterRef.current.getBoundingClientRect();
      const parentRect = letterRef.current.offsetParent?.getBoundingClientRect();
      if (parentRect) {
        setLetterPosition({
          x: rect.left - parentRect.left + rect.width / 2,
          y: rect.top - parentRect.top + rect.height / 2,
        });
      }
    }
  }, []);

  const distance = Math.sqrt(
    Math.pow(mousePosition.x - letterPosition.x, 2) +
    Math.pow(mousePosition.y - letterPosition.y, 2)
  );

  const maxDistance = 200;
  const repelStrength = Math.max(0, (maxDistance - distance) / maxDistance);

  const deltaX = letterPosition.x - mousePosition.x;
  const deltaY = letterPosition.y - mousePosition.y;
  const angle = Math.atan2(deltaY, deltaX);

  const offsetX = Math.cos(angle) * repelStrength * 80;
  const offsetY = Math.sin(angle) * repelStrength * 80;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    x.set(offsetX);
    y.set(offsetY);
  }, [offsetX, offsetY, x, y]);

  return (
    <motion.span
      ref={letterRef}
      className="text-[12vw] font-black select-none inline-block"
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        background: 'linear-gradient(135deg, #ffffff 0%, #e0f7ff 50%, #ffffff 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 0 80px rgba(59, 130, 246, 0.3)',
        x: springX,
        y: springY,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 1, delay: index * 0.05, ease: "easeOut" },
        y: {
          duration: 2 + index * 0.1,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.1,
        },
      }}
    >
      {letter}
    </motion.span>
  );
}
