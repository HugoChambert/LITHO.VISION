export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 relative"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}>
      <div className="max-w-7xl mx-auto">
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
                <a href="#how-it-works" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors duration-300">
                  How It Works
                </a>
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
                  className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors duration-300 text-left"
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
                <a href="#" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-white/40 text-center sm:text-left">
              &copy; {new Date().getFullYear()} LithoVision. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
