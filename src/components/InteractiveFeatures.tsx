import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import TiltCard from './TiltCard';
import MagneticButton from './MagneticButton';
import RippleEffect from './RippleEffect';

const features = [
  {
    title: 'AI-Powered Analysis',
    description: 'Advanced machine learning algorithms analyze stone patterns with precision',
    icon: '🔍',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Real-Time Insights',
    description: 'Get instant feedback and recommendations for your stone inventory',
    icon: '⚡',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    title: 'Smart Pricing',
    description: 'Dynamic pricing suggestions based on market trends and stone quality',
    icon: '💎',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    title: 'Cloud Sync',
    description: 'Access your data anywhere, anytime with seamless cloud synchronization',
    icon: '☁️',
    color: 'from-emerald-500 to-green-500',
  },
];

export default function InteractiveFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, scale }}
      className="relative py-20 md:py-32 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Powerful Features
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto px-4">
            Everything you need to revolutionize your stone business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setActiveFeature(index)}
              onHoverEnd={() => setActiveFeature(null)}
            >
              <TiltCard>
                <RippleEffect>
                  <div
                    className={`relative p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border border-white/10 backdrop-blur-xl transition-all duration-500 ${
                      activeFeature === index ? 'bg-white/10' : 'bg-white/5'
                    }`}
                  >
                    <motion.div
                      className={`absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 bg-gradient-to-br ${feature.color} transition-opacity duration-500`}
                      animate={{ opacity: activeFeature === index ? 0.1 : 0 }}
                    />

                    <div className="relative z-10">
                      <motion.div
                        className="text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6"
                        animate={{
                          scale: activeFeature === index ? 1.2 : 1,
                          rotate: activeFeature === index ? 360 : 0,
                        }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                      >
                        {feature.icon}
                      </motion.div>

                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4">
                        {feature.title}
                      </h3>

                      <p className="text-sm md:text-base lg:text-lg text-white/70 mb-4 md:mb-6 leading-relaxed">
                        {feature.description}
                      </p>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: activeFeature === index ? 1 : 0,
                          x: activeFeature === index ? 0 : -20,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <MagneticButton className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm md:text-base font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                          Learn More
                        </MagneticButton>
                      </motion.div>
                    </div>
                  </div>
                </RippleEffect>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 md:mt-20"
        >
          <MagneticButton className="px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-base md:text-lg lg:text-xl font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">
            Get Started Today
          </MagneticButton>
        </motion.div>
      </div>

      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
    </motion.div>
  );
}
