import { motion, useMotionValue, useSpring, animate } from "motion/react";
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

      <div className="absolute inset-0 z-10">
        {letters.map((letter, index) => (
          <FloatingLetter
            key={index}
            letter={letter}
            index={index}
            mousePosition={mousePosition}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-5 pointer-events-none">
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-white/90 tracking-wide select-none"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontWeight: 300,
            letterSpacing: '0.05em',
            marginTop: '200px',
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
  const baseX = useMotionValue(0);
  const baseY = useMotionValue(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 100 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const [containerSize, setContainerSize] = useState({ width: 1000, height: 800 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setContainerSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const handleResize = () => {
        setContainerSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const centerX = containerSize.width / 2;
    const centerY = containerSize.height / 2;
    const radius = 250;
    const angleStep = (Math.PI * 2) / 11;
    const angle = angleStep * index;

    const startX = centerX + Math.cos(angle) * radius - 50;
    const startY = centerY + Math.sin(angle) * radius - 50;

    baseX.set(startX);
    baseY.set(startY);
    x.set(startX);
    y.set(startY);

    const randomX1 = startX + (Math.random() - 0.5) * 200;
    const randomY1 = startY + (Math.random() - 0.5) * 200;
    const randomX2 = startX + (Math.random() - 0.5) * 200;
    const randomY2 = startY + (Math.random() - 0.5) * 200;

    const duration = 8000 + Math.random() * 4000;

    const animateFloat = async () => {
      while (true) {
        await animate(baseX, randomX1, { duration: duration / 4, ease: "easeInOut" });
        await animate(baseX, randomX2, { duration: duration / 4, ease: "easeInOut" });
        await animate(baseX, startX, { duration: duration / 4, ease: "easeInOut" });
      }
    };

    const animateFloatY = async () => {
      while (true) {
        await animate(baseY, randomY1, { duration: duration / 4 + 500, ease: "easeInOut" });
        await animate(baseY, randomY2, { duration: duration / 4 + 500, ease: "easeInOut" });
        await animate(baseY, startY, { duration: duration / 4 + 500, ease: "easeInOut" });
      }
    };

    animateFloat();
    animateFloatY();
  }, [index, baseX, baseY, containerSize]);

  useEffect(() => {
    const updatePosition = () => {
      const currentBaseX = baseX.get();
      const currentBaseY = baseY.get();

      const distance = Math.sqrt(
        Math.pow(mousePosition.x - currentBaseX, 2) +
        Math.pow(mousePosition.y - currentBaseY, 2)
      );

      const maxDistance = 250;
      const repelStrength = Math.max(0, (maxDistance - distance) / maxDistance);

      if (repelStrength > 0) {
        const deltaX = currentBaseX - mousePosition.x;
        const deltaY = currentBaseY - mousePosition.y;
        const angle = Math.atan2(deltaY, deltaX);

        const offsetX = Math.cos(angle) * repelStrength * 150;
        const offsetY = Math.sin(angle) * repelStrength * 150;

        x.set(currentBaseX + offsetX);
        y.set(currentBaseY + offsetY);
      } else {
        x.set(currentBaseX);
        y.set(currentBaseY);
      }
    };

    const interval = setInterval(updatePosition, 16);
    return () => clearInterval(interval);
  }, [mousePosition, baseX, baseY, x, y]);

  return (
    <motion.span
      className="absolute text-8xl md:text-9xl font-black select-none"
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        background: 'linear-gradient(135deg, #ffffff 0%, #e0f7ff 50%, #ffffff 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 0 80px rgba(59, 130, 246, 0.3)',
        left: springX,
        top: springY,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        opacity: { duration: 0.8, delay: index * 0.1, ease: "easeOut" },
        scale: { duration: 0.8, delay: index * 0.1, ease: "backOut" },
      }}
    >
      {letter}
    </motion.span>
  );
}
