import ImageSlider from './ImageSlider';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="min-h-screen py-20 md:py-32 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed px-4">
            Our AI-powered visualization system transforms your project spaces with photorealistic stone renderings in seconds
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-32">
          <div className="p-6 md:p-8 rounded-3xl border border-white/10 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 group cursor-default relative overflow-hidden"
               style={{
                 background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                 backdropFilter: 'blur(20px) saturate(180%)',
                 WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
               }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-lg font-bold text-white border border-white/20 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 transition-all duration-500">1</div>
              <h3 className="text-lg md:text-xl font-bold text-white">Image Intake & Scene Detection</h3>
            </div>
            <p className="text-sm md:text-base text-white/70 leading-relaxed transition-all duration-300 group-hover:text-white/90 relative z-10">
              Users upload a photo of a kitchen, bathroom, or project space. LithoVision's computer vision models automatically detect countertops, edges, backsplashes, and surrounding geometry.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl border border-white/10 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 group cursor-default relative overflow-hidden"
               style={{
                 background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                 backdropFilter: 'blur(20px) saturate(180%)',
                 WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
               }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-lg font-bold text-white border border-white/20 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 transition-all duration-500">2</div>
              <h3 className="text-lg md:text-xl font-bold text-white">Inventory-Based Stone Selection</h3>
            </div>
            <p className="text-sm md:text-base text-white/70 leading-relaxed transition-all duration-300 group-hover:text-white/90 relative z-10">
              Stone options are selected directly from your actual slab inventory. Each slab image is processed to preserve true veining direction, scale, and color accuracy.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl border border-white/10 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 group cursor-default relative overflow-hidden"
               style={{
                 background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                 backdropFilter: 'blur(20px) saturate(180%)',
                 WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
               }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-lg font-bold text-white border border-white/20 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 transition-all duration-500">3</div>
              <h3 className="text-lg md:text-xl font-bold text-white">AI Surface Mapping</h3>
            </div>
            <p className="text-sm md:text-base text-white/70 leading-relaxed transition-all duration-300 group-hover:text-white/90 relative z-10">
              Our AI maps the selected slab onto the detected surfaces using perspective correction and depth estimation to ensure realistic alignment, proportions, and edge continuity.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl border border-white/10 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 group cursor-default relative overflow-hidden"
               style={{
                 background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                 backdropFilter: 'blur(20px) saturate(180%)',
                 WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
               }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-lg font-bold text-white border border-white/20 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 transition-all duration-500">4</div>
              <h3 className="text-lg md:text-xl font-bold text-white">Lighting & Texture Adaptation</h3>
            </div>
            <p className="text-sm md:text-base text-white/70 leading-relaxed transition-all duration-300 group-hover:text-white/90 relative z-10">
              The system analyzes ambient lighting, reflections, and shadows in the photo and adjusts the stone's appearance to match the real environment—avoiding flat or artificial renders.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl border border-white/10 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 group cursor-default relative overflow-hidden"
               style={{
                 background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                 backdropFilter: 'blur(20px) saturate(180%)',
                 WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
               }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-lg font-bold text-white border border-white/20 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 transition-all duration-500">5</div>
              <h3 className="text-lg md:text-xl font-bold text-white">Real-Time Rendering</h3>
            </div>
            <p className="text-sm md:text-base text-white/70 leading-relaxed transition-all duration-300 group-hover:text-white/90 relative z-10">
              Visualizations are generated in seconds, allowing instant comparisons between slabs, layouts, and orientations without re-uploading images.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl border border-white/10 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 group cursor-default relative overflow-hidden"
               style={{
                 background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                 backdropFilter: 'blur(20px) saturate(180%)',
                 WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
               }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-lg font-bold text-white border border-white/20 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 transition-all duration-500">6</div>
              <h3 className="text-lg md:text-xl font-bold text-white">Review, Export & Share</h3>
            </div>
            <p className="text-sm md:text-base text-white/70 leading-relaxed transition-all duration-300 group-hover:text-white/90 relative z-10">
              Final visuals can be reviewed live with clients, exported for proposals, or shared digitally—helping teams move from selection to approval faster.
            </p>
          </div>
        </div>

        <div className="mb-20 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              See the Transformation
            </h3>
            <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              Experience the power of AI-driven visualization with real before and after examples
            </p>
          </div>
          <ImageSlider
            beforeImage="/assets/img/3.jpg"
            afterImage="/assets/img/1.jpg"
            zoomAfter={true}
          />
        </div>

        <div className="mb-16 md:mb-24">
          <ImageSlider
            beforeImage="/assets/img/4.JPG"
            afterImage="/assets/img/6.PNG"
          />
        </div>

        <div className="text-center p-8 md:p-12 rounded-3xl border border-white/10 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 group cursor-default relative overflow-hidden"
             style={{
               background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
               backdropFilter: 'blur(20px) saturate(180%)',
               WebkitBackdropFilter: 'blur(20px) saturate(180%)',
               boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
             }}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 transition-all duration-300 group-hover:scale-105 relative z-10">
            Ready to get started?
          </h3>
          <p className="text-white/70 mb-6 md:mb-8 text-base md:text-lg transition-all duration-300 group-hover:text-white/90 relative z-10">
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
            className="px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium text-white transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 cursor-pointer relative overflow-hidden group/btn z-10"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)'
            }}
          >
            <span className="relative z-10">Schedule Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
