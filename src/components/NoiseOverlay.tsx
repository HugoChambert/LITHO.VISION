import { useEffect, useRef, useState } from 'react';

export default function NoiseOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return true;
  });

  useEffect(() => {
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let animationId: number;

    const noise = () => {
      if (canvas.width === 0 || canvas.height === 0) {
        animationId = requestAnimationFrame(noise);
        return;
      }

      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const buffer = new Uint32Array(imageData.data.buffer);

      for (let i = 0; i < buffer.length; i++) {
        if (Math.random() < 0.5) {
          const gray = Math.random() * 255;
          buffer[i] =
            (Math.floor(Math.random() * 50) << 24) |
            (gray << 16) |
            (gray << 8) |
            gray;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      animationId = requestAnimationFrame(noise);
    };

    noise();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, [isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay"
      style={{ willChange: 'transform' }}
    />
  );
}
