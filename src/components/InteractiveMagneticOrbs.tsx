import { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  shape: 'circle' | 'square' | 'triangle';
  shimmer: boolean;
}

export default function InteractiveMagneticOrbs() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const shapes: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle'];
    const initialParticles: Particle[] = Array.from({ length: 70 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: 3 + Math.random() * 5,
      opacity: 0.3 + Math.random() * 0.5,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      shimmer: Math.random() > 0.6,
    }));
    setParticles(initialParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let { x, y, vx, vy } = particle;

          const currentSpeed = Math.sqrt(vx * vx + vy * vy);

          const dx = x - mousePosition.x;
          const dy = y - mousePosition.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120 && distance > 0) {
            const force = (120 - distance) / 120;
            vx += (dx / distance) * force * 0.5;
            vy += (dy / distance) * force * 0.5;

            const newSpeed = Math.sqrt(vx * vx + vy * vy);
            if (newSpeed > 0) {
              vx = (vx / newSpeed) * currentSpeed;
              vy = (vy / newSpeed) * currentSpeed;
            }
          }

          x += vx;
          y += vy;

          if (x < 0 || x > window.innerWidth) {
            vx *= -1;
            x = Math.max(0, Math.min(window.innerWidth, x));
          }
          if (y < 0 || y > window.innerHeight) {
            vy *= -1;
            y = Math.max(0, Math.min(window.innerHeight, y));
          }

          return { ...particle, x, y, vx, vy };
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

  const renderParticle = (particle: Particle) => {
    const fadeThreshold = window.innerHeight * 0.75;
    const fadeStart = window.innerHeight * 0.65;
    let calculatedOpacity = particle.opacity;

    if (particle.y > fadeStart) {
      const fadeProgress = (particle.y - fadeStart) / (fadeThreshold - fadeStart);
      calculatedOpacity = particle.opacity * (1 - Math.min(fadeProgress, 1));
    }

    const baseStyle = {
      position: 'absolute' as const,
      left: particle.x,
      top: particle.y,
      width: particle.size,
      height: particle.size,
      opacity: calculatedOpacity,
      willChange: 'transform',
      animation: particle.shimmer ? 'shimmer 2s ease-in-out infinite' : 'none',
    };

    switch (particle.shape) {
      case 'circle':
        return (
          <div
            key={particle.id}
            style={{
              ...baseStyle,
              borderRadius: '50%',
              background: 'rgba(59, 130, 246, 0.8)',
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
            }}
          />
        );
      case 'square':
        return (
          <div
            key={particle.id}
            style={{
              ...baseStyle,
              background: 'rgba(34, 211, 238, 0.8)',
              boxShadow: '0 0 10px rgba(34, 211, 238, 0.5)',
              transform: 'rotate(45deg)',
            }}
          />
        );
      case 'triangle':
        return (
          <div
            key={particle.id}
            style={{
              ...baseStyle,
              width: 0,
              height: 0,
              borderLeft: `${particle.size / 2}px solid transparent`,
              borderRight: `${particle.size / 2}px solid transparent`,
              borderBottom: `${particle.size}px solid rgba(147, 197, 253, 0.8)`,
              boxShadow: '0 0 10px rgba(147, 197, 253, 0.5)',
            }}
          />
        );
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-20"
      style={{ overflow: 'hidden' }}
    >
      {particles.map((particle) => renderParticle(particle))}
    </div>
  );
}
