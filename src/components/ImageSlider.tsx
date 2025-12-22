import { useState } from 'react';

interface ImageSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  zoomAfter?: boolean;
}

export default function ImageSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  zoomAfter = false
}: ImageSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging && e.type !== 'click') return;

    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    let clientX: number;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  return (
    <div className="relative group">
      <div
        className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-white/10 transition-all duration-500 hover:border-white/30 hover:shadow-2xl hover:shadow-white/10"
        style={{
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
        }}
        onMouseMove={handleMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={handleMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onClick={handleMove}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={afterImage}
            alt={afterLabel}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ${zoomAfter ? 'scale-110' : 'group-hover:scale-105'}`}
          />
        </div>

        <div
          className="absolute top-0 bottom-0 w-0.5 md:w-1 bg-white shadow-lg transition-all duration-300 group-hover:w-1 group-hover:shadow-xl group-hover:shadow-white/50"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-xl flex items-center justify-center touch-none transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-white/50">
            <div className="flex gap-0.5 md:gap-1">
              <div className="w-0.5 h-3 md:h-4 bg-gray-600 transition-all duration-300 group-hover:bg-gray-800"></div>
              <div className="w-0.5 h-3 md:h-4 bg-gray-600 transition-all duration-300 group-hover:bg-gray-800"></div>
            </div>
          </div>
        </div>

        <div className="absolute top-3 md:top-4 left-3 md:left-4 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium text-white transition-all duration-300 group-hover:scale-105"
             style={{
               background: 'rgba(0, 0, 0, 0.6)',
               backdropFilter: 'blur(10px)',
               WebkitBackdropFilter: 'blur(10px)'
             }}>
          {beforeLabel}
        </div>

        <div className="absolute top-3 md:top-4 right-3 md:right-4 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium text-white transition-all duration-300 group-hover:scale-105"
             style={{
               background: 'rgba(0, 0, 0, 0.6)',
               backdropFilter: 'blur(10px)',
               WebkitBackdropFilter: 'blur(10px)'
             }}>
          {afterLabel}
        </div>
      </div>

      <p className="text-center text-white/60 mt-4 md:mt-6 text-xs md:text-sm transition-all duration-300 group-hover:text-white/80">
        Drag the slider to compare before and after results
      </p>
    </div>
  );
}
