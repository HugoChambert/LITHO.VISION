export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
          Contact Us
        </h1>

        <div className="space-y-8 text-white/70 text-sm sm:text-base">
          <p className="leading-relaxed">
            We'd love to hear from you. Whether you have questions about our platform, need technical support,
            or want to explore how LithoVision can transform your business, we're here to help.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-6 sm:p-8 rounded-2xl border border-white/10"
                 style={{
                   background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                   backdropFilter: 'blur(20px)',
                   WebkitBackdropFilter: 'blur(20px)'
                 }}>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Sales Inquiries</h3>
              <p className="mb-4">
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
                className="px-6 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                Schedule a Demo
              </button>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl border border-white/10"
                 style={{
                   background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                   backdropFilter: 'blur(20px)',
                   WebkitBackdropFilter: 'blur(20px)'
                 }}>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Support</h3>
              <p className="mb-4">
                Need help with your account or have technical questions? Our support team is here to assist.
              </p>
              <a
                href="mailto:support@lithovision.com"
                className="inline-block px-6 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105"
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

          <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-white/10"
               style={{
                 background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                 backdropFilter: 'blur(20px)',
                 WebkitBackdropFilter: 'blur(20px)'
               }}>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">General Contact</h3>
            <div className="space-y-3">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
