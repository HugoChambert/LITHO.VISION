export default function Navbar() {
  const handleScheduleClick = () => {
    if (typeof window !== 'undefined' && (window as any).Cal) {
      (window as any).Cal.ns['book-a-demo']('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view'
      });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000] flex items-center justify-between gap-20 px-12 py-4 rounded-full border border-white/10 transition-all duration-300 min-w-[700px]"
         style={{
           background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
           backdropFilter: 'blur(40px) saturate(180%)',
           WebkitBackdropFilter: 'blur(40px) saturate(180%)',
           boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
         }}>
      <a
        href="/"
        className="flex items-center gap-2.5 text-[15px] font-semibold text-white no-underline tracking-[-0.02em] transition-all duration-300 hover:-translate-y-1 hover:opacity-90 cursor-auto"
      >
        <span className="font-semibold uppercase tracking-wider leading-none" style={{ fontFamily: 'HelveticaNeueLTPro-Bd, Helvetica, Arial, sans-serif' }}>
          LITHOVISION
        </span>
      </a>

      <div className="flex gap-8 items-center">
        <a
          href="#how-it-works"
          className="text-white/90 no-underline text-[15px] font-normal tracking-[-0.01em] whitespace-nowrap relative pb-1 leading-none transition-all duration-300 hover:text-white hover:opacity-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white/80 after:transition-all after:duration-300 hover:after:w-full cursor-auto"
        >
          How It Works
        </a>
        <a
          href="#contact"
          className="text-white/90 no-underline text-[15px] font-normal tracking-[-0.01em] whitespace-nowrap relative pb-1 leading-none transition-all duration-300 hover:text-white hover:opacity-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white/80 after:transition-all after:duration-300 hover:after:w-full cursor-auto"
        >
          Contact Us
        </a>
        <button
          onClick={handleScheduleClick}
          data-cal-link="hugo.chambert/book-a-demo"
          data-cal-namespace="book-a-demo"
          data-cal-config='{"layout":"month_view"}'
          className="text-white/90 no-underline text-[15px] font-normal tracking-[-0.01em] whitespace-nowrap relative pb-1 leading-none transition-all duration-300 hover:text-white hover:opacity-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white/80 after:transition-all after:duration-300 hover:after:w-full cursor-pointer bg-transparent border-none p-0"
        >
          Schedule Demo
        </button>
      </div>
    </nav>
  );
}
