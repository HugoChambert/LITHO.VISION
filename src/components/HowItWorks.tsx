import { useState } from 'react';

export default function HowItWorks() {
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
    <section id="how-it-works" className="min-h-screen py-20 md:py-32 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed px-4">
            Transform your vision into reality with our advanced lithography process
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
          <div className="space-y-6 md:space-y-8">
            <div className="p-6 md:p-8 rounded-3xl border border-white/10 transition-all duration-500 hover:border-white/20"
                 style={{
                   background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                   backdropFilter: 'blur(20px) saturate(180%)',
                   WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                 }}>
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">📐</div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">Design Analysis</h3>
              <p className="text-sm md:text-base text-white/70 leading-relaxed">
                We begin by analyzing your design requirements and specifications to ensure optimal results for your lithography project.
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-3xl border border-white/10 transition-all duration-500 hover:border-white/20"
                 style={{
                   background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                   backdropFilter: 'blur(20px) saturate(180%)',
                   WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                 }}>
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">⚡</div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">Precision Processing</h3>
              <p className="text-sm md:text-base text-white/70 leading-relaxed">
                Our state-of-the-art lithography systems deliver nanometer-level precision for even the most complex patterns.
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-3xl border border-white/10 transition-all duration-500 hover:border-white/20"
                 style={{
                   background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                   backdropFilter: 'blur(20px) saturate(180%)',
                   WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                 }}>
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">✨</div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">Quality Assurance</h3>
              <p className="text-sm md:text-base text-white/70 leading-relaxed">
                Every project undergoes rigorous quality checks to ensure it meets our exacting standards and your expectations.
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-white/10"
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
                src="/assets/img/1.jpg"
                alt="Before"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src="/assets/img/3.jpg"
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>

              <div
                className="absolute top-0 bottom-0 w-0.5 md:w-1 bg-white shadow-lg"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-xl flex items-center justify-center touch-none">
                  <div className="flex gap-0.5 md:gap-1">
                    <div className="w-0.5 h-3 md:h-4 bg-gray-600"></div>
                    <div className="w-0.5 h-3 md:h-4 bg-gray-600"></div>
                  </div>
                </div>
              </div>

              <div className="absolute top-3 md:top-4 left-3 md:left-4 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium text-white"
                   style={{
                     background: 'rgba(0, 0, 0, 0.6)',
                     backdropFilter: 'blur(10px)',
                     WebkitBackdropFilter: 'blur(10px)'
                   }}>
                Before
              </div>

              <div className="absolute top-3 md:top-4 right-3 md:right-4 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium text-white"
                   style={{
                     background: 'rgba(0, 0, 0, 0.6)',
                     backdropFilter: 'blur(10px)',
                     WebkitBackdropFilter: 'blur(10px)'
                   }}>
                After
              </div>
            </div>

            <p className="text-center text-white/60 mt-4 md:mt-6 text-xs md:text-sm">
              Drag the slider to compare before and after results
            </p>
          </div>
        </div>

        <div className="text-center p-8 md:p-12 rounded-3xl border border-white/10"
             style={{
               background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
               backdropFilter: 'blur(20px) saturate(180%)',
               WebkitBackdropFilter: 'blur(20px) saturate(180%)',
               boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
             }}>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
            Ready to get started?
          </h3>
          <p className="text-white/70 mb-6 md:mb-8 text-base md:text-lg">
            Schedule a demo to see how Lithovision can transform your projects
          </p>
          <button
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).Cal) {
                (window as any).Cal.ns['book-a-demo']('ui', {
                  hideEventTypeDetails: false,
                  layout: 'month_view'
                });
              }
            }}
            data-cal-link="hugo.chambert/book-a-demo"
            data-cal-namespace="book-a-demo"
            data-cal-config='{"layout":"month_view"}'
            className="px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium text-white transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)'
            }}
          >
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
}
