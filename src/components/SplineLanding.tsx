import { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

export default function SplineLanding() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      app.load('https://prod.spline.design/QyJH2x4RYSNRXJzU/scene.splinecode');
    }
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        id="canvas3d"
        className="w-full h-full"
      />
    </div>
  );
}
