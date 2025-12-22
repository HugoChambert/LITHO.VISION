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
            Welcome to LithoVision. By accessing or using our platform, you agree to be bound by these Terms of Service.
            Please read them carefully.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            1. Acceptance of Terms
          </h2>

          <p>
            By creating an account or using LithoVision's services, you agree to these terms and our Privacy Policy.
            If you don't agree to these terms, you may not use our services.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            2. Use of Service
          </h2>

          <p>
            LithoVision provides AI-powered stone visualization services. You agree to:
          </p>

          <ul className="space-y-2 list-disc list-inside ml-4">
            <li>Use the service only for lawful purposes</li>
            <li>Not upload inappropriate or copyrighted content without permission</li>
            <li>Maintain the security of your account credentials</li>
            <li>Not attempt to reverse engineer or copy our technology</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            3. Intellectual Property
          </h2>

          <p>
            LithoVision retains all rights to our platform, technology, and generated visualizations. You retain
            ownership of the images you upload. By using our service, you grant us a license to process your images
            for visualization purposes.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            4. Payment Terms
          </h2>

          <p>
            Subscription fees are billed according to your chosen plan. Payments are non-refundable except as
            required by law. We reserve the right to change pricing with 30 days notice.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            5. Limitation of Liability
          </h2>

          <p>
            LithoVision is provided "as is" without warranties. We are not liable for any indirect, incidental,
            or consequential damages arising from your use of the service.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            6. Termination
          </h2>

          <p>
            We may suspend or terminate your account for violation of these terms. You may cancel your subscription
            at any time through your account settings.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            7. Contact
          </h2>

          <p>
            For questions about these Terms of Service, contact us at:
            <br />
            <a href="mailto:legal@lithovision.com" className="text-white hover:underline">
              legal@lithovision.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
