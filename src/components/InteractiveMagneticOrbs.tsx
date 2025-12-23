import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface Orb {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

export default function InteractiveMagneticOrbs() {
  const [orbs, setOrbs] = useState<Orb[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const initialOrbs: Orb[] = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: 60 + Math.random() * 80,
      color: ['rgba(59, 130, 246, 0.3)', 'rgba(147, 51, 234, 0.3)', 'rgba(236, 72, 153, 0.3)', 'rgba(34, 211, 238, 0.3)'][i % 4],
    }));
    setOrbs(initialOrbs);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      setOrbs((prevOrbs) =>
        prevOrbs.map((orb) => {
          let { x, y, vx, vy } = orb;

          const dx = mousePosition.x - x;
          const dy = mousePosition.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 300 && distance > 0) {
            const force = (300 - distance) / 300;
            vx += (dx / distance) * force * 0.3;
            vy += (dy / distance) * force * 0.3;
          }

          vx *= 0.98;
          vy *= 0.98;

          x += vx;
          y += vy;

          if (x < 0 || x > window.innerWidth) {
            vx *= -0.8;
            x = Math.max(0, Math.min(window.innerWidth, x));
          }
          if (y < 0 || y > window.innerHeight) {
            vy *= -0.8;
            y = Math.max(0, Math.min(window.innerHeight, y));
          }

          return { ...orb, x, y, vx, vy };
        })
      );

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition.x, mousePosition.y]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-20"
      style={{ overflow: 'hidden' }}
    >
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-2xl"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            left: orb.x - orb.size / 2,
            top: orb.y - orb.size / 2,
            willChange: 'transform',
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.id * 0.2,
          }}
        />
      ))}

      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 20,
          height: 20,
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(59, 130, 246, 0.4) 50%, transparent 70%)',
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)',
        }}
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
