import ScrollReveal from '../components/ScrollReveal';
import AnimatedGradient from '../components/AnimatedGradient';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <AnimatedGradient />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 relative z-10">
        <ScrollReveal>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
            Privacy Policy
          </h1>
        </ScrollReveal>

        <div className="space-y-6 text-white/70 text-sm sm:text-base leading-relaxed">
          <p className="text-white/50 text-sm">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <p>
            At LithoVision, we take your privacy seriously. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you use our platform.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            Information We Collect
          </h2>

          <p>
            We collect information that you provide directly to us, including:
          </p>

          <ul className="space-y-2 list-disc list-inside ml-4">
            <li>Account information (name, email, company details)</li>
            <li>Photos and images you upload for visualization</li>
            <li>Payment and billing information</li>
            <li>Communications with our support team</li>
            <li>Usage data and analytics</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            How We Use Your Information
          </h2>

          <p>
            We use the information we collect to:
          </p>

          <ul className="space-y-2 list-disc list-inside ml-4">
            <li>Provide, maintain, and improve our services</li>
            <li>Process your visualization requests</li>
            <li>Send you technical notices and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Analyze usage patterns to enhance user experience</li>
            <li>Protect against fraudulent or illegal activity</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            Data Security
          </h2>

          <p>
            We implement appropriate technical and organizational measures to protect your personal information
            against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
            over the internet is 100% secure.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            Data Retention
          </h2>

          <p>
            We retain your information for as long as necessary to provide our services and fulfill the purposes
            outlined in this Privacy Policy, unless a longer retention period is required by law.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            Your Rights
          </h2>

          <p>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>

          <ul className="space-y-2 list-disc list-inside ml-4">
            <li>Access to your personal information</li>
            <li>Correction of inaccurate data</li>
            <li>Deletion of your data</li>
            <li>Objection to or restriction of processing</li>
            <li>Data portability</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            Contact Us
          </h2>

          <p>
            If you have questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:privacy@lithovision.com" className="text-white hover:underline">
              privacy@lithovision.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
