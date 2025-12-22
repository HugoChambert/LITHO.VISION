export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-white/70 text-sm sm:text-base leading-relaxed">
          <p className="text-white/50 text-sm">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <p>
            At LithoVision, we take your privacy seriously. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you use our AI-powered stone visualization platform.
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
            <li>Usage data and analytics</li>
            <li>Payment and billing information</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            How We Use Your Information
          </h2>

          <p>
            We use the information we collect to:
          </p>

          <ul className="space-y-2 list-disc list-inside ml-4">
            <li>Provide and improve our visualization services</li>
            <li>Process your images and generate stone renderings</li>
            <li>Communicate with you about your account and our services</li>
            <li>Analyze usage patterns and optimize our platform</li>
            <li>Ensure security and prevent fraud</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            Data Security
          </h2>

          <p>
            We implement industry-standard security measures to protect your information. All data is encrypted
            in transit and at rest. However, no method of transmission over the internet is 100% secure, and we
            cannot guarantee absolute security.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            Your Rights
          </h2>

          <p>
            You have the right to access, correct, or delete your personal information. You may also opt out of
            certain communications or request a copy of your data. Contact us at privacy@lithovision.com for
            any privacy-related requests.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            Contact Us
          </h2>

          <p>
            If you have questions about this Privacy Policy, please contact us at:
            <br />
            <a href="mailto:privacy@lithovision.com" className="text-white hover:underline">
              privacy@lithovision.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
