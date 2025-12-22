import ScrollReveal from '../components/ScrollReveal';
import AnimatedGradient from '../components/AnimatedGradient';
import MagneticButton from '../components/MagneticButton';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <AnimatedGradient />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 relative z-10">
        <ScrollReveal>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
            Contact Us
          </h1>
        </ScrollReveal>

        <div className="space-y-8 text-white/70 text-sm sm:text-base">
          <ScrollReveal>
            <p className="leading-relaxed">
              We'd love to hear from you. Whether you have questions about our platform, need technical support,
              or want to explore how LithoVision can transform your business, we're here to help.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <ScrollReveal delay={100}>
              <div className="p-6 sm:p-8 rounded-2xl border border-white/10 hover-lift"
                   style={{
                     background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                     backdropFilter: 'blur(20px)',
                     WebkitBackdropFilter: 'blur(20px)'
                   }}>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Sales Inquiries</h3>
                <p className="mb-4">
                  Interested in bringing LithoVision to your business? Our sales team is ready to help you get started.
                </p>
                <MagneticButton
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).Cal) {
                      (window as any).Cal.ns['book-a-demo']('ui', {
                        hideEventTypeDetails: false,
                        layout: 'month_view'
                      });
                    }
                  }}
                  className="px-6 py-3 rounded-full text-sm font-medium text-white glass-effect transition-all duration-300"
                >
                  Schedule a Demo
                </MagneticButton>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="p-6 sm:p-8 rounded-2xl border border-white/10 hover-lift"
                   style={{
                     background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                     backdropFilter: 'blur(20px)',
                     WebkitBackdropFilter: 'blur(20px)'
                   }}>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Support</h3>
                <p className="mb-4">
                  Need help with your account or have technical questions? Our support team is here to assist.
                </p>
                <MagneticButton
                  href="mailto:support@lithovision.com"
                  className="inline-block px-6 py-3 rounded-full text-sm font-medium text-white glass-effect transition-all duration-300"
                >
                  Email Support
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-white/10 hover-lift"
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
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
