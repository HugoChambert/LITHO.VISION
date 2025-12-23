import { useState } from 'react';

export default function ContactPage() {
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
    <div className="min-h-screen bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
          Get in Touch
        </h1>

        <div className="space-y-8 text-white/70 text-sm sm:text-base">
          <p className="leading-relaxed text-lg">
            We'd love to hear from you. Whether you have questions about our platform, need technical support,
            or want to explore how LithoVision can transform your business, we're here to help.
          </p>

          <p className="leading-relaxed">
            Our team of lithography experts and AI specialists is ready to discuss your specific needs and show you
            how our technology can enhance your quality control processes, reduce defects, and increase efficiency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div
                 onMouseMove={(e) => handleMouseMove(e, 0)}
                 className="p-6 sm:p-8 rounded-2xl border border-white/10 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 group cursor-default relative overflow-hidden"
                 style={{
                   background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                   backdropFilter: 'blur(20px)',
                   WebkitBackdropFilter: 'blur(20px)'
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
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 relative z-10">Sales Inquiries</h3>
              <p className="mb-4 relative z-10">
                Interested in bringing LithoVision to your business? Our sales team is ready to help you get started.
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
                className="px-6 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105 cursor-pointer relative z-10"
                style={{
                  position: 'relative',
                  zIndex: 10,
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                Schedule a Demo
              </button>
            </div>

            <div
                 onMouseMove={(e) => handleMouseMove(e, 1)}
                 className="p-6 sm:p-8 rounded-2xl border border-white/10 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 group cursor-default relative overflow-hidden"
                 style={{
                   background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                   backdropFilter: 'blur(20px)',
                   WebkitBackdropFilter: 'blur(20px)'
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
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 relative z-10">Support</h3>
              <p className="mb-4 relative z-10">
                Need help with your account or have technical questions? Our support team is here to assist.
              </p>
              <a
                href="mailto:support@lithovision.com"
                className="inline-block px-6 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105 relative z-10"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                Email Support
              </a>
            </div>
          </div>

          <div
               onMouseMove={(e) => handleMouseMove(e, 2)}
               className="mt-12 p-6 sm:p-8 rounded-2xl border border-white/10 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 group cursor-default relative overflow-hidden"
               style={{
                 background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                 backdropFilter: 'blur(20px)',
                 WebkitBackdropFilter: 'blur(20px)'
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
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 relative z-10">General Information</h3>
            <div className="space-y-4 relative z-10">
              <p>
                <span className="text-white font-medium">Email:</span>{' '}
                <a href="mailto:info@lithovision.com" className="hover:text-white transition-colors">
                  info@lithovision.com
                </a>
              </p>
              <p>
                <span className="text-white font-medium">Business Hours:</span>{' '}
                Monday - Friday, 9:00 AM - 6:00 PM EST
              </p>
              <p>
                <span className="text-white font-medium">Response Time:</span>{' '}
                We typically respond to all inquiries within 24 hours during business days
              </p>
            </div>
          </div>

          <div
               onMouseMove={(e) => handleMouseMove(e, 3)}
               className="mt-12 p-6 sm:p-8 rounded-2xl border border-blue-500/20 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 group cursor-default relative overflow-hidden"
               style={{
                 background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.02))',
                 backdropFilter: 'blur(20px)',
                 WebkitBackdropFilter: 'blur(20px)'
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
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 relative z-10">Why Choose LithoVision?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div>
                <h4 className="text-white font-semibold mb-2">Industry Expertise</h4>
                <p className="text-sm">
                  Our team has decades of combined experience in semiconductor manufacturing and AI technology
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Proven Results</h4>
                <p className="text-sm">
                  Clients report 40% reduction in defect rates and 60% faster quality control processing
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Dedicated Support</h4>
                <p className="text-sm">
                  24/7 technical support and ongoing optimization to ensure your success
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Easy Integration</h4>
                <p className="text-sm">
                  Seamless integration with your existing workflows and equipment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
