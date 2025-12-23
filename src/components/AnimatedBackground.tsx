import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function AnimatedBackground() {
  const isMobile = useIsMobile();

  const blob1X = useMotionValue(25);
  const blob1Y = useMotionValue(35);
  const blob2X = useMotionValue(75);
  const blob2Y = useMotionValue(45);
  const blob3X = useMotionValue(50);
  const blob3Y = useMotionValue(70);
  const blob4X = useMotionValue(20);
  const blob4Y = useMotionValue(80);
  const blob5X = useMotionValue(80);
  const blob5Y = useMotionValue(20);

  const springConfig = { damping: 50, stiffness: 40 };

  const blob1XSpring = useSpring(blob1X, springConfig);
  const blob1YSpring = useSpring(blob1Y, springConfig);
  const blob2XSpring = useSpring(blob2X, springConfig);
  const blob2YSpring = useSpring(blob2Y, springConfig);
  const blob3XSpring = useSpring(blob3X, springConfig);
  const blob3YSpring = useSpring(blob3Y, springConfig);
  const blob4XSpring = useSpring(blob4X, springConfig);
  const blob4YSpring = useSpring(blob4Y, springConfig);
  const blob5XSpring = useSpring(blob5X, springConfig);
  const blob5YSpring = useSpring(blob5Y, springConfig);

  const blob1XPercent = useTransform(blob1XSpring, (v) => `${v}%`);
  const blob1YPercent = useTransform(blob1YSpring, (v) => `${v}%`);
  const blob2XPercent = useTransform(blob2XSpring, (v) => `${v}%`);
  const blob2YPercent = useTransform(blob2YSpring, (v) => `${v}%`);
  const blob3XPercent = useTransform(blob3XSpring, (v) => `${v}%`);
  const blob3YPercent = useTransform(blob3YSpring, (v) => `${v}%`);
  const blob4XPercent = useTransform(blob4XSpring, (v) => `${v}%`);
  const blob4YPercent = useTransform(blob4YSpring, (v) => `${v}%`);
  const blob5XPercent = useTransform(blob5XSpring, (v) => `${v}%`);
  const blob5YPercent = useTransform(blob5YSpring, (v) => `${v}%`);

  useEffect(() => {
    if (isMobile) return;

    const animateBlobs = () => {
      const time = Date.now() * 0.0003;

      blob1X.set(25 + Math.sin(time * 0.8) * 20);
      blob1Y.set(35 + Math.cos(time * 0.6) * 20);

      blob2X.set(75 + Math.sin(time * 0.7 + 2) * 18);
      blob2Y.set(45 + Math.cos(time * 0.5 + 2) * 18);

      blob3X.set(50 + Math.sin(time * 0.6 + 4) * 25);
      blob3Y.set(70 + Math.cos(time * 0.8 + 4) * 25);

      blob4X.set(20 + Math.sin(time * 0.5 + 1) * 22);
      blob4Y.set(80 + Math.cos(time * 0.7 + 1) * 22);

      blob5X.set(80 + Math.sin(time * 0.9 + 3) * 15);
      blob5Y.set(20 + Math.cos(time * 0.4 + 3) * 15);
    };

    const interval = setInterval(animateBlobs, 50);
    return () => clearInterval(interval);
  }, [isMobile, blob1X, blob1Y, blob2X, blob2Y, blob3X, blob3Y, blob4X, blob4Y, blob5X, blob5Y]);

  if (isMobile) {
    return (
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 40%, rgba(59, 130, 246, 0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(96, 165, 250, 0.12) 0%, transparent 60%)',
          }}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <motion.div
        className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '900px',
          height: '900px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(37, 99, 235, 0.3) 30%, rgba(29, 78, 216, 0.2) 50%, transparent 70%)',
          filter: 'blur(140px)',
          left: blob1XPercent,
          top: blob1YPercent,
        }}
        initial={false}
      />

      <motion.div
        className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '850px',
          height: '850px',
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.35) 0%, rgba(59, 130, 246, 0.25) 30%, rgba(37, 99, 235, 0.15) 50%, transparent 70%)',
          filter: 'blur(130px)',
          left: blob2XPercent,
          top: blob2YPercent,
        }}
        initial={false}
      />

      <motion.div
        className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '750px',
          height: '750px',
          background: 'radial-gradient(circle, rgba(147, 197, 253, 0.3) 0%, rgba(96, 165, 250, 0.2) 30%, rgba(59, 130, 246, 0.15) 50%, transparent 70%)',
          filter: 'blur(120px)',
          left: blob3XPercent,
          top: blob3YPercent,
        }}
        initial={false}
      />

      <motion.div
        className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, rgba(29, 78, 216, 0.2) 30%, rgba(30, 58, 138, 0.15) 50%, transparent 70%)',
          filter: 'blur(110px)',
          left: blob4XPercent,
          top: blob4YPercent,
        }}
        initial={false}
      />

      <motion.div
        className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(191, 219, 254, 0.25) 0%, rgba(147, 197, 253, 0.2) 30%, rgba(96, 165, 250, 0.1) 50%, transparent 70%)',
          filter: 'blur(100px)',
          left: blob5XPercent,
          top: blob5YPercent,
        }}
        initial={false}
      />

      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 40%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(96, 165, 250, 0.06) 0%, transparent 50%)',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
}
