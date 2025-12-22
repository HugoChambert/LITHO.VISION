export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000] flex items-center justify-between gap-20 px-12 py-4 rounded-full border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 min-w-[700px]"
         style={{
           background: 'rgba(0, 0, 0, 0.4)',
           backdropFilter: 'saturate(180%) blur(20px)',
           WebkitBackdropFilter: 'saturate(180%) blur(20px)'
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
          className="text-white no-underline text-[15px] font-normal tracking-[-0.01em] whitespace-nowrap relative pb-1 leading-none transition-opacity duration-300 hover:opacity-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full cursor-auto"
        >
          How It Works
        </a>
        <a
          href="#contact"
          className="text-white no-underline text-[15px] font-normal tracking-[-0.01em] whitespace-nowrap relative pb-1 leading-none transition-opacity duration-300 hover:opacity-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full cursor-auto"
        >
          Contact Us
        </a>
        <button
          data-cal-link="hugo.chambert/book-a-demo"
          data-cal-namespace="book-a-demo"
          data-cal-config='{"layout":"month_view"}'
          className="text-white no-underline text-[15px] font-normal tracking-[-0.01em] whitespace-nowrap relative pb-1 leading-none transition-opacity duration-300 hover:opacity-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full cursor-pointer bg-transparent border-none"
        >
          Schedule Demo
        </button>
      </div>
    </nav>
  );
}
