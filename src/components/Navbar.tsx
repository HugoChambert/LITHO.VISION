export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000] flex items-center justify-between gap-20 px-12 py-4 rounded-full border-2 border-[#7d7d7d2b] shadow-[0_2px_20px_rgba(0,0,0,0.08)] transition-all duration-300 min-w-[700px]"
         style={{
           background: '#d3d3d357',
           backdropFilter: 'saturate(180%) blur(20px)',
           WebkitBackdropFilter: 'saturate(180%) blur(20px)'
         }}>
      <a
        href="/"
        className="flex items-center gap-2.5 text-[15px] font-semibold text-black no-underline tracking-[-0.02em] transition-all duration-300 hover:-translate-y-1 hover:opacity-90 cursor-auto"
      >
        <span className="font-semibold uppercase tracking-wider leading-none" style={{ fontFamily: 'HelveticaNeueLTPro-Bd, Helvetica, Arial, sans-serif' }}>
          LITHOVISION
        </span>
      </a>

      <div className="flex gap-8 items-center">
        <a
          href="#how-it-works"
          className="text-black no-underline text-[15px] font-normal tracking-[-0.01em] whitespace-nowrap relative pb-1 leading-none transition-opacity duration-300 hover:opacity-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full cursor-auto"
        >
          How It Works
        </a>
        <a
          href="#contact"
          className="text-black no-underline text-[15px] font-normal tracking-[-0.01em] whitespace-nowrap relative pb-1 leading-none transition-opacity duration-300 hover:opacity-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full cursor-auto"
        >
          Contact Us
        </a>
        <a
          href="#demo"
          className="text-black no-underline text-[15px] font-normal tracking-[-0.01em] whitespace-nowrap relative pb-1 leading-none transition-opacity duration-300 hover:opacity-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full cursor-auto"
        >
          Schedule Demo
        </a>
      </div>
    </nav>
  );
}
