import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', updateCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
    };
  }, [isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-150 ${
            isPointer ? 'w-12 h-12' : 'w-8 h-8'
          }`}
          style={{
            opacity: 0.6,
          }}
        />
      </div>
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.1s ease-out, top 0.1s ease-out',
        }}
      >
        <div
          className={`rounded-full border-2 border-white transition-all duration-200 ${
            isPointer ? 'w-16 h-16 opacity-80' : 'w-10 h-10 opacity-60'
          }`}
          style={{
            mixBlendMode: 'difference',
          }}
        />
      </div>
    </>
  );
}
