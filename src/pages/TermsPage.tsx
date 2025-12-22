export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
          Terms of Service
        </h1>

        <div className="space-y-6 text-white/70 text-sm sm:text-base leading-relaxed">
          <p className="text-white/50 text-sm">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <p>
            Please read these Terms of Service carefully before using LithoVision. By accessing or using our
            platform, you agree to be bound by these terms.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            1. Acceptance of Terms
          </h2>

          <p>
            By creating an account or using LithoVision, you agree to these Terms of Service and our Privacy Policy.
            If you do not agree, you may not use our services.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            2. Use of Service
          </h2>

          <p>
            You agree to use LithoVision only for lawful purposes and in accordance with these terms. You are
            responsible for:
          </p>

          <ul className="space-y-2 list-disc list-inside ml-4">
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Ensuring uploaded content does not violate any third-party rights</li>
            <li>Complying with all applicable laws and regulations</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            3. Intellectual Property
          </h2>

          <p>
            The LithoVision platform, including its software, design, and content, is protected by copyright,
            trademark, and other intellectual property laws. You retain ownership of the images you upload,
            but grant us a license to process them for visualization purposes.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            4. Subscription and Payment
          </h2>

          <p>
            Access to LithoVision requires a paid subscription. You agree to pay all fees associated with your
            chosen plan. Fees are non-refundable except as required by law or as explicitly stated in our refund policy.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            5. Limitation of Liability
          </h2>

          <p>
            LithoVision is provided "as is" without warranties of any kind. We are not liable for any indirect,
            incidental, special, or consequential damages arising from your use of the service.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            6. Termination
          </h2>

          <p>
            We reserve the right to suspend or terminate your account at any time for violation of these terms.
            You may cancel your subscription at any time through your account settings.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            7. Changes to Terms
          </h2>

          <p>
            We may modify these terms at any time. Continued use of LithoVision after changes constitutes
            acceptance of the new terms.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            8. Contact Information
          </h2>

          <p>
            For questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:legal@lithovision.com" className="text-white hover:underline">
              legal@lithovision.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
