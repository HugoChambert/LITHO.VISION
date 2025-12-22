import { useEffect, useRef } from 'react';

export default function NoiseOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay"
      style={{ willChange: 'transform' }}
    />
  );
}
