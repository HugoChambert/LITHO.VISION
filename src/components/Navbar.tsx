import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  const handleScheduleClick = () => {
    if (typeof window !== 'undefined' && (window as any).Cal) {
      (window as any).Cal.ns['book-a-demo']('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view'
      });
    }
  };

  return (
    <nav className="fixed top-3 md:top-6 left-1/2 -translate-x-1/2 z-[1000] flex items-center justify-between gap-4 md:gap-12 lg:gap-20 px-4 md:px-8 lg:px-12 py-3 md:py-4 rounded-full border border-white/10 transition-all duration-500 w-[95%] md:w-auto md:min-w-[650px] lg:min-w-[700px] max-w-[1200px] hover:border-white/30 hover:shadow-2xl hover:shadow-white/10 group"
         style={{
           background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
           backdropFilter: 'blur(40px) saturate(180%)',
           WebkitBackdropFilter: 'blur(40px) saturate(180%)',
           boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
         }}>
      <Link
        to="/"
        className="flex items-center gap-2.5 text-xs md:text-sm lg:text-[15px] font-semibold text-white no-underline tracking-[-0.02em] transition-all duration-500 hover:-translate-y-1 hover:scale-105 cursor-pointer whitespace-nowrap relative group/logo"
      >
        <span className="font-semibold uppercase tracking-wider leading-none relative z-10" style={{ fontFamily: 'HelveticaNeueLTPro-Bd, Helvetica, Arial, sans-serif' }}>
          LITHOVISION
        </span>
        <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover/logo:scale-100 transition-transform duration-300 -z-0"></div>
      </Link>

      <div className="flex gap-3 md:gap-6 lg:gap-8 items-center">
        <Link
          to="/how-it-works"
          className={`no-underline text-xs md:text-sm lg:text-[15px] font-normal tracking-[-0.01em] whitespace-nowrap relative pb-1 leading-none transition-all duration-500 hover:text-white hover:scale-105 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-white/80 after:transition-all after:duration-500 hover:after:w-full hover:after:shadow-lg hover:after:shadow-white/50 cursor-pointer hidden sm:block ${
            location.pathname === '/how-it-works' ? 'text-white after:w-full' : 'text-white/90 after:w-0'
          }`}
        >
          How It Works
        </Link>
        <a
          href="#contact"
          className="text-white/90 no-underline text-xs md:text-sm lg:text-[15px] font-normal tracking-[-0.01em] whitespace-nowrap relative pb-1 leading-none transition-all duration-500 hover:text-white hover:scale-105 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white/80 after:transition-all after:duration-500 hover:after:w-full hover:after:shadow-lg hover:after:shadow-white/50 cursor-pointer hidden sm:block"
        >
          Contact Us
        </a>
        <button
          onClick={handleScheduleClick}
          data-cal-link="hugo.chambert/book-a-demo"
          data-cal-namespace="book-a-demo"
          data-cal-config='{"layout":"month_view"}'
          className="text-white/90 no-underline text-xs md:text-sm lg:text-[15px] font-normal tracking-[-0.01em] whitespace-nowrap relative pb-1 leading-none transition-all duration-500 hover:text-white hover:scale-110 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white/80 after:transition-all after:duration-500 hover:after:w-full hover:after:shadow-lg hover:after:shadow-white/50 cursor-pointer bg-transparent border-none p-0"
        >
          <span className="hidden sm:inline">Schedule Demo</span>
          <span className="sm:hidden">Demo</span>
        </button>
      </div>
    </nav>
  );
}
