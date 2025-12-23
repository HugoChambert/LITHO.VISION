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
}

export default function InteractiveMagneticOrbs() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const shapes: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle'];
    const initialParticles: Particle[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: 3 + Math.random() * 5,
      opacity: 0.3 + Math.random() * 0.5,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    }));
    setParticles(initialParticles);

    const animate = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let { x, y, vx, vy } = particle;

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
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const renderParticle = (particle: Particle) => {
    const baseStyle = {
      position: 'absolute' as const,
      left: particle.x,
      top: particle.y,
      width: particle.size,
      height: particle.size,
      opacity: particle.opacity,
      willChange: 'transform',
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
