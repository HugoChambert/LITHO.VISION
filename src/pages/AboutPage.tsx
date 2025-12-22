export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
          About LithoVision
        </h1>

        <div className="space-y-6 text-white/70 text-sm sm:text-base leading-relaxed">
          <p>
            LithoVision is revolutionizing the stone and countertop industry with cutting-edge AI technology.
            Our platform empowers professionals to visualize custom stone installations with unprecedented accuracy
            and speed, transforming the way customers experience and select their perfect countertops.
          </p>

          <p>
            Founded by industry experts who understand the challenges of traditional visualization methods,
            we've developed a solution that combines advanced artificial intelligence with deep industry knowledge.
            Our mission is to bridge the gap between imagination and reality, helping fabricators and retailers
            close more sales while delighting their customers.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            Our Technology
          </h2>

          <p>
            LithoVision uses state-of-the-art AI algorithms to process customer photos and generate
            photorealistic visualizations of stone installations. Our technology accounts for lighting,
            perspective, and material properties to create renders that accurately represent how the
            finished product will look in the customer's space.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
            Why Choose Us
          </h2>

          <ul className="space-y-3 list-disc list-inside">
            <li>Lightning-fast visualization in minutes, not hours</li>
            <li>Photorealistic results that wow customers</li>
            <li>Easy-to-use platform requiring no technical expertise</li>
            <li>Proven to increase conversion rates and customer satisfaction</li>
            <li>Dedicated support from industry professionals</li>
          </ul>

          <p className="mt-10 sm:mt-12">
            Join the growing community of stone professionals who are transforming their business with LithoVision.
          </p>
        </div>
      </div>
    </div>
  );
}
