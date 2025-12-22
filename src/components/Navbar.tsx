import { Link, useLocation } from 'react-router-dom'
import { useState, useRef } from 'react'

export default function Navbar() {
  const location = useLocation()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showContactDropdown, setShowContactDropdown] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleScheduleClick = () => {
    if (typeof window !== 'undefined' && (window as any).Cal) {
      (window as any).Cal.ns['book-a-demo']('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view'
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = () => {
    setShowContactDropdown(true)
  }

  const handleMouseLeave = () => {
    setShowContactDropdown(false)
  }

  return (
    <nav
      ref={navRef}
      onMouseMove={handleMouseMove}
      className="fixed top-3 md:top-6 left-1/2 -translate-x-1/2 z-[1000] flex items-center justify-between gap-4 md:gap-12 lg:gap-20 px-4 md:px-8 lg:px-12 py-3 md:py-4 rounded-full border border-white/10 transition-all duration-500 w-[95%] md:w-auto md:min-w-[650px] lg:min-w-[700px] max-w-[1200px] hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 group overflow-hidden"
         style={{
           background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
           backdropFilter: 'blur(40px) saturate(180%)',
           WebkitBackdropFilter: 'blur(40px) saturate(180%)',
           boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
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
      <Link
        to="/"
        className="flex items-center gap-2.5 text-xs md:text-sm lg:text-[15px] font-semibold text-white no-underline tracking-[-0.02em] cursor-pointer whitespace-nowrap relative z-10"
      >
        <span className="font-semibold uppercase tracking-wider leading-none" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
          LITHOVISION
        </span>
      </Link>

      <div className="flex gap-2 md:gap-6 lg:gap-8 items-center">
        <Link
          to="/how-it-works"
          className={`no-underline text-[10px] sm:text-xs md:text-sm lg:text-[15px] font-normal tracking-[-0.01em] whitespace-nowrap relative pb-1 leading-none transition-all duration-500 hover:text-white hover:scale-105 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full hover:after:shadow-lg hover:after:shadow-blue-500/50 cursor-pointer ${
            location.pathname === '/how-it-works' ? 'text-white after:w-full' : 'text-white/90 after:w-0'
          }`}
        >
          <span className="hidden sm:inline">How It Works</span>
          <span className="sm:hidden">Works</span>
        </Link>
        <button
          onClick={handleScheduleClick}
          data-cal-link="hugo.chambert/book-a-demo"
          data-cal-namespace="book-a-demo"
          data-cal-config='{"layout":"month_view"}'
          className="text-white/90 no-underline text-[10px] sm:text-xs md:text-sm lg:text-[15px] font-normal tracking-[-0.01em] whitespace-nowrap relative pb-1 leading-none transition-all duration-500 hover:text-white hover:scale-110 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full hover:after:shadow-lg hover:after:shadow-blue-500/50 cursor-pointer bg-transparent border-none p-0"
        >
          <span className="hidden sm:inline">Schedule Demo</span>
          <span className="sm:hidden">Demo</span>
        </button>
        <div className="relative" ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button
            className="text-white/90 no-underline text-[10px] sm:text-xs md:text-sm lg:text-[15px] font-normal tracking-[-0.01em] whitespace-nowrap relative pb-1 leading-none transition-all duration-500 hover:text-white hover:scale-105 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full hover:after:shadow-lg hover:after:shadow-blue-500/50 cursor-pointer bg-transparent border-none p-0"
          >
            <span className="hidden sm:inline">Contact Us</span>
            <span className="sm:hidden">Contact</span>
          </button>

          {showContactDropdown && (
            <div className="absolute top-full right-0 pt-2 z-[2000]">
              <div className="w-[320px] sm:w-[380px] rounded-2xl border border-white/10 overflow-hidden"
                   style={{
                     background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.9))',
                     backdropFilter: 'blur(40px)',
                     WebkitBackdropFilter: 'blur(40px)',
                     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                   }}>
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-base font-bold text-white mb-3">Sales Inquiries</h4>
                  <p className="text-xs text-white/60 mb-3 leading-relaxed">
                    Interested in bringing LithoVision to your business?
                  </p>
                  <button
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).Cal) {
                        (window as any).Cal.ns['book-a-demo']('ui', {
                          hideEventTypeDetails: false,
                          layout: 'month_view'
                        });
                      }
                      setShowContactDropdown(false)
                    }}
                    data-cal-link="hugo.chambert/book-a-demo"
                    data-cal-namespace="book-a-demo"
                    data-cal-config='{"layout":"month_view"}'
                    className="px-4 py-2 rounded-full text-xs font-medium text-white transition-all duration-300 hover:scale-105 cursor-pointer w-full"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.1))',
                      border: '1px solid rgba(59, 130, 246, 0.3)'
                    }}
                  >
                    Schedule a Demo
                  </button>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <h4 className="text-base font-bold text-white mb-3">Support</h4>
                  <p className="text-xs text-white/60 mb-3 leading-relaxed">
                    Need help with your account or have technical questions?
                  </p>
                  <a
                    href="mailto:support@lithovision.com"
                    className="inline-block px-4 py-2 rounded-full text-xs font-medium text-white transition-all duration-300 hover:scale-105 w-full text-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    Email Support
                  </a>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <h4 className="text-base font-bold text-white mb-2">General Contact</h4>
                  <div className="space-y-2 text-xs text-white/60">
                    <p>
                      <a href="mailto:info@lithovision.com" className="hover:text-white transition-colors">
                        info@lithovision.com
                      </a>
                    </p>
                    <p>Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
