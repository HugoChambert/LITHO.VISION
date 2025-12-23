import { useState, useRef, useEffect } from 'react';

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
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadImage = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = reject;
        img.loading = 'eager';
        img.decoding = 'async';
        img.src = src;
      });
    };

    Promise.all([
      loadImage(beforeImage),
      loadImage(afterImage)
    ]).then(() => {
      setImagesLoaded(true);
    }).catch(err => {
      console.error('Error loading images:', err);
      setImagesLoaded(true);
    });
  }, [beforeImage, afterImage]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleInteractionStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if ('clientX' in e) {
      handleMove(e.clientX);
    } else if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div className="relative group max-w-4xl mx-auto px-2 sm:px-0">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden cursor-ew-resize select-none border border-white/10 transition-all duration-500 hover:border-white/30 hover:shadow-2xl hover:shadow-white/10"
        style={{
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
          backgroundColor: '#000'
        }}
        onMouseDown={handleInteractionStart}
        onMouseMove={handleMouseMove}
        onTouchStart={handleInteractionStart}
        onTouchMove={handleTouchMove}
      >
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 border-3 border-white/20 border-t-white rounded-full animate-spin"></div>
              <div className="text-white/70 text-xs sm:text-sm font-medium">Loading...</div>
            </div>
          </div>
        )}

        <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover object-center"
            draggable={false}
            loading="eager"
            decoding="async"
          />
        </div>

        <div
          className={`absolute inset-0 w-full h-full overflow-hidden transition-opacity duration-500 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
          }}
        >
          <div className={`absolute inset-0 w-full h-full transition-transform duration-300 ${zoomAfter ? 'scale-110' : ''}`}>
            <img
              src={afterImage}
              alt={afterLabel}
              className="absolute inset-0 w-full h-full object-cover object-center"
              draggable={false}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none"
          style={{
            left: `${sliderPosition}%`,
            transform: 'translateX(-50%)',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-2xl flex items-center justify-center transition-transform duration-200 hover:scale-110">
            <div className="flex gap-1">
              <div className="w-0.5 h-5 sm:h-6 bg-gray-900 rounded-full"></div>
              <div className="w-0.5 h-5 sm:h-6 bg-gray-900 rounded-full"></div>
            </div>
          </div>
        </div>

        <div
          className="absolute top-3 sm:top-4 left-3 sm:left-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-white pointer-events-none"
          style={{
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
        >
          {beforeLabel}
        </div>

        <div
          className="absolute top-3 sm:top-4 right-3 sm:right-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-white pointer-events-none"
          style={{
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
        >
          {afterLabel}
        </div>
      </div>

      <p className="text-center text-white/60 mt-4 sm:mt-6 text-xs sm:text-sm transition-all duration-300 group-hover:text-white/80 px-2">
        Drag the slider to compare before and after results
      </p>
    </div>
  );
}
