import { useState, useEffect } from 'react';

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
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAfter(prev => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative group">
      <div
        className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden select-none border border-white/10 transition-all duration-500 hover:border-white/30 hover:shadow-2xl hover:shadow-white/10"
        style={{
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
        }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ${
            showAfter ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />

        <img
          src={afterImage}
          alt={afterLabel}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ${
            showAfter ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } ${zoomAfter ? 'scale-110' : ''}`}
        />

        <div className={`absolute top-3 md:top-4 left-3 md:left-4 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium text-white transition-all duration-500 ${
          showAfter ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'
        }`}
             style={{
               background: 'rgba(0, 0, 0, 0.6)',
               backdropFilter: 'blur(10px)',
               WebkitBackdropFilter: 'blur(10px)'
             }}>
          {beforeLabel}
        </div>

        <div className={`absolute top-3 md:top-4 right-3 md:right-4 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium text-white transition-all duration-500 ${
          showAfter ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}
             style={{
               background: 'rgba(0, 0, 0, 0.6)',
               backdropFilter: 'blur(10px)',
               WebkitBackdropFilter: 'blur(10px)'
             }}>
          {afterLabel}
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
            !showAfter ? 'bg-white w-6' : 'bg-white/40'
          }`}></div>
          <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
            showAfter ? 'bg-white w-6' : 'bg-white/40'
          }`}></div>
        </div>
      </div>

      <p className="text-center text-white/60 mt-4 md:mt-6 text-xs md:text-sm transition-all duration-300 group-hover:text-white/80">
        Watch the AI transformation in action
      </p>
    </div>
  );
}
