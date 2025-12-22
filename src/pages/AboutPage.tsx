import ScrollReveal from '../components/ScrollReveal';
import AnimatedGradient from '../components/AnimatedGradient';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <AnimatedGradient />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 relative z-10">
        <ScrollReveal>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
            About LithoVision
          </h1>
        </ScrollReveal>

        <div className="space-y-6 text-white/70 text-sm sm:text-base leading-relaxed">
          <ScrollReveal>
            <p>
              LithoVision is revolutionizing the stone and countertop industry with cutting-edge AI technology.
              Our platform empowers professionals to visualize custom stone installations with unprecedented accuracy
              and speed, transforming the way customers experience and select their perfect countertops.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p>
              Founded by industry experts who understand the challenges of traditional visualization methods,
              we've developed a solution that combines advanced artificial intelligence with deep industry knowledge.
              Our mission is to bridge the gap between imagination and reality, helping fabricators and retailers
              close more sales while delighting their customers.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
              Our Technology
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p>
              LithoVision uses state-of-the-art AI algorithms to process customer photos and generate
              photorealistic visualizations of stone installations. Our technology accounts for lighting,
              perspective, and material properties to create renders that accurately represent how the
              finished product will look in the customer's space.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4">
              Why Choose Us
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <ul className="space-y-3 list-disc list-inside">
              <li>Lightning-fast visualization in minutes, not hours</li>
              <li>Photorealistic results that wow customers</li>
              <li>Easy-to-use platform requiring no technical expertise</li>
              <li>Proven to increase conversion rates and customer satisfaction</li>
              <li>Dedicated support from industry professionals</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <p className="mt-10 sm:mt-12">
              Join the growing community of stone professionals who are transforming their business with LithoVision.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
