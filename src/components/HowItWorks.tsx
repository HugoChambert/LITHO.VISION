import ImageSlider from './ImageSlider';

export default function HowItWorks() {
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
            <div className="p-6 md:p-8 rounded-3xl border border-white/10 transition-all duration-500 hover:border-white/30 hover:shadow-2xl hover:shadow-white/5 hover:scale-105 group cursor-default relative overflow-hidden"
                 style={{
                   background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                   backdropFilter: 'blur(20px) saturate(180%)',
                   WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                 }}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-3xl md:text-4xl mb-3 md:mb-4 transition-transform duration-500 group-hover:scale-110 relative z-10">📐</div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4 relative z-10">Design Analysis</h3>
              <p className="text-sm md:text-base text-white/70 leading-relaxed transition-all duration-300 group-hover:text-white/90 relative z-10">
                We begin by analyzing your design requirements and specifications to ensure optimal results for your lithography project.
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-3xl border border-white/10 transition-all duration-500 hover:border-white/30 hover:shadow-2xl hover:shadow-white/5 hover:scale-105 group cursor-default relative overflow-hidden"
                 style={{
                   background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                   backdropFilter: 'blur(20px) saturate(180%)',
                   WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                 }}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-3xl md:text-4xl mb-3 md:mb-4 transition-transform duration-500 group-hover:scale-110 relative z-10">⚡</div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4 relative z-10">Precision Processing</h3>
              <p className="text-sm md:text-base text-white/70 leading-relaxed transition-all duration-300 group-hover:text-white/90 relative z-10">
                Our state-of-the-art lithography systems deliver nanometer-level precision for even the most complex patterns.
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-3xl border border-white/10 transition-all duration-500 hover:border-white/30 hover:shadow-2xl hover:shadow-white/5 hover:scale-105 group cursor-default relative overflow-hidden"
                 style={{
                   background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                   backdropFilter: 'blur(20px) saturate(180%)',
                   WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                 }}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-3xl md:text-4xl mb-3 md:mb-4 transition-transform duration-500 group-hover:scale-110 relative z-10">✨</div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4 relative z-10">Quality Assurance</h3>
              <p className="text-sm md:text-base text-white/70 leading-relaxed transition-all duration-300 group-hover:text-white/90 relative z-10">
                Every project undergoes rigorous quality checks to ensure it meets our exacting standards and your expectations.
              </p>
            </div>
          </div>

          <div>
            <ImageSlider
              beforeImage="/assets/img/3.jpg"
              afterImage="/assets/img/1.jpg"
              zoomAfter={true}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
          <div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Precision Results
            </h3>
            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8">
              Experience the difference our advanced lithography technology makes. Every detail is captured with unmatched precision and clarity.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-all duration-500 group-hover:bg-white/10 group-hover:scale-110 group-hover:border-white/30">
                  <span className="text-xl">🎯</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1 transition-all duration-300 group-hover:text-white">Nanometer Accuracy</h4>
                  <p className="text-sm text-white/60 transition-all duration-300 group-hover:text-white/80">Precision down to the nanometer level</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-all duration-500 group-hover:bg-white/10 group-hover:scale-110 group-hover:border-white/30">
                  <span className="text-xl">⚡</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1 transition-all duration-300 group-hover:text-white">Lightning Fast</h4>
                  <p className="text-sm text-white/60 transition-all duration-300 group-hover:text-white/80">Rapid processing without compromising quality</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ImageSlider
              beforeImage="/assets/img/4.JPG"
              afterImage="/assets/img/6.PNG"
            />
          </div>
        </div>

        <div className="text-center p-8 md:p-12 rounded-3xl border border-white/10 transition-all duration-500 hover:border-white/30 hover:shadow-2xl hover:shadow-white/5 group cursor-default"
             style={{
               background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
               backdropFilter: 'blur(20px) saturate(180%)',
               WebkitBackdropFilter: 'blur(20px) saturate(180%)',
               boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
             }}>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 transition-all duration-300 group-hover:scale-105">
            Ready to get started?
          </h3>
          <p className="text-white/70 mb-6 md:mb-8 text-base md:text-lg transition-all duration-300 group-hover:text-white/90">
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
            className="px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium text-white transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-white/30 cursor-pointer relative overflow-hidden group/btn"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)'
            }}
          >
            <span className="relative z-10">Schedule Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
