export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000] flex items-center justify-between gap-20 px-12 py-4 min-w-[700px] rounded-full border-2 border-[#7d7d7d2b] shadow-[0_2px_20px_rgba(0,0,0,0.08)] transition-all duration-300"
         style={{
           background: '#d3d3d357',
           backdropFilter: 'saturate(180%) blur(20px)',
           WebkitBackdropFilter: 'saturate(180%) blur(20px)'
         }}>
      <a
        href="/"
        className="flex items-center gap-2.5 text-[15px] font-semibold text-black no-underline tracking-tight leading-none transition-all duration-300 hover:-translate-y-1 hover:opacity-90"
      >
        <span className="font-semibold uppercase tracking-wider leading-none">
          LITHOVISION
        </span>
      </a>

      <div className="flex items-center gap-8">
        <a
          href="#how-it-works"
          className="relative text-black no-underline text-[15px] font-normal transition-opacity duration-300 whitespace-nowrap pb-1 leading-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:opacity-100"
        >
          How It Works
        </a>
        <a
          href="#contact"
          className="relative text-black no-underline text-[15px] font-normal transition-opacity duration-300 whitespace-nowrap pb-1 leading-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:opacity-100"
        >
          Contact Us
        </a>
        <a
          href="#demo"
          className="relative text-black no-underline text-[15px] font-normal transition-opacity duration-300 whitespace-nowrap pb-1 leading-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:opacity-100"
        >
          Schedule Demo
        </a>
      </div>
    </nav>
  )
}
