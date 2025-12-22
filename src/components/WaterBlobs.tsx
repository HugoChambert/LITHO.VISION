import { useEffect, useRef } from 'react';

interface Blob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  targetX?: number;
  targetY?: number;
}

export default function WaterBlobs() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blobsRef = useRef<Blob[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const initBlobs = () => {
      blobsRef.current = [];
      const numBlobs = 12;

      for (let i = 0; i < numBlobs; i++) {
        blobsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          radius: 60 + Math.random() * 80,
        });
      }
    };

    initBlobs();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const metaball = (x: number, y: number, blobs: Blob[]) => {
      let sum = 0;
      for (const blob of blobs) {
        const dx = x - blob.x;
        const dy = y - blob.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 0.001) continue;
        sum += (blob.radius * blob.radius) / (dist * dist);
      }
      return sum;
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      const blobs = blobsRef.current;

      blobs.forEach((blob) => {
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - blob.x;
          const dy = mouseRef.current.y - blob.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 200) {
            const force = (200 - dist) / 200;
            blob.vx -= (dx / dist) * force * 0.5;
            blob.vy -= (dy / dist) * force * 0.5;
          }
        }

        blob.vx *= 0.98;
        blob.vy *= 0.98;

        blob.x += blob.vx;
        blob.y += blob.vy;

        if (blob.x < blob.radius) {
          blob.x = blob.radius;
          blob.vx *= -0.8;
        }
        if (blob.x > canvas.width - blob.radius) {
          blob.x = canvas.width - blob.radius;
          blob.vx *= -0.8;
        }
        if (blob.y < blob.radius) {
          blob.y = blob.radius;
          blob.vy *= -0.8;
        }
        if (blob.y > canvas.height - blob.radius) {
          blob.y = canvas.height - blob.radius;
          blob.vy *= -0.8;
        }

        for (let j = 0; j < blobs.length; j++) {
          if (blob === blobs[j]) continue;
          const other = blobs[j];
          const dx = other.x - blob.x;
          const dy = other.y - blob.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < blob.radius + other.radius) {
            const force = (blob.radius + other.radius - dist) / dist;
            blob.vx -= (dx / dist) * force * 0.02;
            blob.vy -= (dy / dist) * force * 0.02;
          }
        }
      });

      const step = 3;
      for (let y = 0; y < canvas.height; y += step) {
        for (let x = 0; x < canvas.width; x += step) {
          const value = metaball(x, y, blobs);
          const threshold = 1.0;

          if (value > threshold) {
            const intensity = Math.min(1, (value - threshold) * 0.5);

            const r = Math.floor(50 + intensity * 100);
            const g = Math.floor(150 + intensity * 105);
            const b = Math.floor(200 + intensity * 55);
            const a = Math.floor(180 + intensity * 75);

            for (let dy = 0; dy < step && y + dy < canvas.height; dy++) {
              for (let dx = 0; dx < step && x + dx < canvas.width; dx++) {
                const idx = ((y + dy) * canvas.width + (x + dx)) * 4;
                data[idx] = r;
                data[idx + 1] = g;
                data[idx + 2] = b;
                data[idx + 3] = a;
              }
            }
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);

      blobs.forEach((blob) => {
        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius * 1.5
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius * 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ filter: 'blur(2px)' }}
    />
  );
}
