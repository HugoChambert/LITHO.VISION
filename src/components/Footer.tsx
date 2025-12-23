import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <footer
      onMouseMove={handleMouseMove}
      className="border-t border-white/5 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 relative overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 group"
      style={{
        background: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        marginTop: '-1px'
      }}>
      <div
        className="pointer-events-none absolute rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          width: '300px',
          height: '300px',
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">LithoVision</h3>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              AI-powered visualization for stone and countertop professionals
            </p>
          </div>

          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/how-it-works" className="text-xs sm:text-sm text-white/60 hover:text-white relative pb-1 inline-block transition-all duration-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full hover:after:shadow-lg hover:after:shadow-blue-500/50">
                  How It Works
                </Link>
              </li>
              <li>
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
                  className="text-xs sm:text-sm text-white/60 hover:text-white relative pb-1 transition-all duration-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full hover:after:shadow-lg hover:after:shadow-blue-500/50 text-left bg-transparent border-none p-0 cursor-pointer"
                >
                  Request Demo
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-xs sm:text-sm text-white/60 hover:text-white relative pb-1 inline-block transition-all duration-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full hover:after:shadow-lg hover:after:shadow-blue-500/50">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-xs sm:text-sm text-white/60 hover:text-white relative pb-1 inline-block transition-all duration-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full hover:after:shadow-lg hover:after:shadow-blue-500/50">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-xs sm:text-sm text-white/60 hover:text-white relative pb-1 inline-block transition-all duration-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full hover:after:shadow-lg hover:after:shadow-blue-500/50">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-xs sm:text-sm text-white/60 hover:text-white relative pb-1 inline-block transition-all duration-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full hover:after:shadow-lg hover:after:shadow-blue-500/50">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <p className="text-xs sm:text-sm text-white/40 text-center">
            &copy; {new Date().getFullYear()} LithoVision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
