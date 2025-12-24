import ImageSlider from './ImageSlider';
import { useState } from 'react';

export default function HowItWorks() {
  const [mousePositions, setMousePositions] = useState<{ [key: number]: { x: number; y: number } }>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePositions(prev => ({
      ...prev,
      [index]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }));
  };
  return (
    <section id="how-it-works" className="min-h-screen py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 tracking-tight px-2">
            How It Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed px-4 sm:px-6">
            Our AI-powered visualization system transforms your project spaces with photorealistic stone renderings in seconds
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20 md:mb-28 lg:mb-32">
          <div
               onMouseMove={(e) => handleMouseMove(e, 0)}
               className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/10 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 group cursor-default relative overflow-hidden"
               style={{
                 background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                 backdropFilter: 'blur(20px) saturate(180%)',
                 WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
               }}>
            <div
              className="pointer-events-none absolute rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{
                width: '300px',
                height: '300px',
                left: mousePositions[0] ? `${mousePositions[0].x}px` : '0px',
                top: mousePositions[0] ? `${mousePositions[0].y}px` : '0px',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 relative z-10">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center text-base sm:text-lg font-bold text-white border border-white/20 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 transition-all duration-500 flex-shrink-0">1</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">Image Intake & Scene Detection</h3>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed transition-all duration-300 group-hover:text-white/90 relative z-10">
              Users upload a photo of a kitchen, bathroom, or project space. LithoVision's computer vision models automatically detect countertops, edges, backsplashes, and surrounding geometry.
            </p>
          </div>

          <div
               onMouseMove={(e) => handleMouseMove(e, 1)}
               className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/10 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 group cursor-default relative overflow-hidden"
               style={{
                 background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                 backdropFilter: 'blur(20px) saturate(180%)',
                 WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
               }}>
            <div
              className="pointer-events-none absolute rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{
                width: '300px',
                height: '300px',
                left: mousePositions[1] ? `${mousePositions[1].x}px` : '0px',
                top: mousePositions[1] ? `${mousePositions[1].y}px` : '0px',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 relative z-10">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center text-base sm:text-lg font-bold text-white border border-white/20 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 transition-all duration-500 flex-shrink-0">2</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">Inventory-Based Stone Selection</h3>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed transition-all duration-300 group-hover:text-white/90 relative z-10">
              Stone options are selected directly from your actual slab inventory. Each slab image is processed to preserve true veining direction, scale, and color accuracy.
            </p>
          </div>

          <div
               onMouseMove={(e) => handleMouseMove(e, 2)}
               className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/10 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 group cursor-default relative overflow-hidden"
               style={{
                 background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                 backdropFilter: 'blur(20px) saturate(180%)',
                 WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
               }}>
            <div
              className="pointer-events-none absolute rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{
                width: '300px',
                height: '300px',
                left: mousePositions[2] ? `${mousePositions[2].x}px` : '0px',
                top: mousePositions[2] ? `${mousePositions[2].y}px` : '0px',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 relative z-10">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center text-base sm:text-lg font-bold text-white border border-white/20 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 transition-all duration-500 flex-shrink-0">3</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">AI Surface Mapping</h3>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed transition-all duration-300 group-hover:text-white/90 relative z-10">
              Our AI maps the selected slab onto the detected surfaces using perspective correction and depth estimation to ensure realistic alignment, proportions, and edge continuity.
            </p>
          </div>

          <div
               onMouseMove={(e) => handleMouseMove(e, 3)}
               className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/10 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 group cursor-default relative overflow-hidden"
               style={{
                 background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                 backdropFilter: 'blur(20px) saturate(180%)',
                 WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
               }}>
            <div
              className="pointer-events-none absolute rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{
                width: '300px',
                height: '300px',
                left: mousePositions[3] ? `${mousePositions[3].x}px` : '0px',
                top: mousePositions[3] ? `${mousePositions[3].y}px` : '0px',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 relative z-10">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center text-base sm:text-lg font-bold text-white border border-white/20 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 transition-all duration-500 flex-shrink-0">4</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">Lighting & Texture Adaptation</h3>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed transition-all duration-300 group-hover:text-white/90 relative z-10">
              The system analyzes ambient lighting, reflections, and shadows in the photo and adjusts the stone's appearance to match the real environment—avoiding flat or artificial renders.
            </p>
          </div>

          <div
               onMouseMove={(e) => handleMouseMove(e, 4)}
               className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/10 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 group cursor-default relative overflow-hidden"
               style={{
                 background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                 backdropFilter: 'blur(20px) saturate(180%)',
                 WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
               }}>
            <div
              className="pointer-events-none absolute rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{
                width: '300px',
                height: '300px',
                left: mousePositions[4] ? `${mousePositions[4].x}px` : '0px',
                top: mousePositions[4] ? `${mousePositions[4].y}px` : '0px',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 relative z-10">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center text-base sm:text-lg font-bold text-white border border-white/20 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 transition-all duration-500 flex-shrink-0">5</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">Real-Time Rendering</h3>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed transition-all duration-300 group-hover:text-white/90 relative z-10">
              Visualizations are generated in seconds, allowing instant comparisons between slabs, layouts, and orientations without re-uploading images.
            </p>
          </div>

          <div
               onMouseMove={(e) => handleMouseMove(e, 5)}
               className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/10 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 group cursor-default relative overflow-hidden"
               style={{
                 background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                 backdropFilter: 'blur(20px) saturate(180%)',
                 WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
               }}>
            <div
              className="pointer-events-none absolute rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{
                width: '300px',
                height: '300px',
                left: mousePositions[5] ? `${mousePositions[5].x}px` : '0px',
                top: mousePositions[5] ? `${mousePositions[5].y}px` : '0px',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 relative z-10">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center text-base sm:text-lg font-bold text-white border border-white/20 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 transition-all duration-500 flex-shrink-0">6</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">Review, Export & Share</h3>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed transition-all duration-300 group-hover:text-white/90 relative z-10">
              Final visuals can be reviewed live with clients, exported for proposals, or shared digitally—helping teams move from selection to approval faster.
            </p>
          </div>
        </div>

        <div className="mb-16 sm:mb-20 md:mb-28 lg:mb-32">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight px-2">
              See the Transformation
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
              Experience the power of AI-driven visualization with real before and after examples
            </p>
          </div>
          <ImageSlider
            beforeImage="/LITHO.VISION/assets/img/1.jpg"
            afterImage="/LITHO.VISION/assets/img/3.JPG"
            zoomAfter={true}
          />
        </div>

        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <ImageSlider
            beforeImage="/LITHO.VISION/assets/img/7.JPG"
            afterImage="/LITHO.VISION/assets/img/8.PNG"
          />
        </div>

        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <ImageSlider
            beforeImage="/LITHO.VISION/assets/img/9.jpg"
            afterImage="/LITHO.VISION/assets/img/10.PNG"
          />
        </div>
      </div>
    </section>
  );
}
