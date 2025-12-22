import ImageSlider from './ImageSlider';
import TiltCard from './TiltCard';
import { motion } from 'motion/react';
import MagneticButton from './MagneticButton';

const steps = [
  {
    number: 1,
    title: 'Image Intake & Scene Detection',
    description: 'Users upload a photo of a kitchen, bathroom, or project space. LithoVision computer vision models automatically detect countertops, edges, backsplashes, and surrounding geometry.',
  },
  {
    number: 2,
    title: 'Inventory-Based Stone Selection',
    description: 'Stone options are selected directly from your actual slab inventory. Each slab image is processed to preserve true veining direction, scale, and color accuracy.',
  },
  {
    number: 3,
    title: 'AI Surface Mapping',
    description: 'Our AI maps the selected slab onto the detected surfaces using perspective correction and depth estimation to ensure realistic alignment, proportions, and edge continuity.',
  },
  {
    number: 4,
    title: 'Lighting & Texture Adaptation',
    description: 'The system analyzes ambient lighting, reflections, and shadows in the photo and adjusts the stone appearance to match the real environment, avoiding flat or artificial renders.',
  },
  {
    number: 5,
    title: 'Real-Time Rendering',
    description: 'Visualizations are generated in seconds, allowing instant comparisons between slabs, layouts, and orientations without re-uploading images.',
  },
  {
    number: 6,
    title: 'Review, Export & Share',
    description: 'Final visuals can be reviewed live with clients, exported for proposals, or shared digitally—helping teams move from selection to approval faster.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="min-h-screen py-20 md:py-32 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed px-4">
            Our AI-powered visualization system transforms your project spaces with photorealistic stone renderings in seconds
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard>
                <div
                  className="p-6 md:p-8 rounded-3xl border border-white/10 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 group cursor-default relative overflow-hidden h-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-lg font-bold text-white border border-white/20 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 transition-all duration-500">
                      {step.number}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed transition-all duration-300 group-hover:text-white/90 relative z-10">
                    {step.description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-32"
        >
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              See the Transformation
            </h3>
            <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              Experience the power of AI-driven visualization with real before and after examples
            </p>
          </div>
          <ImageSlider
            beforeImage="/assets/img/3.jpg"
            afterImage="/assets/img/1.jpg"
            zoomAfter={true}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <ImageSlider
            beforeImage="/assets/img/4.JPG"
            afterImage="/assets/img/6.PNG"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center p-8 md:p-12 rounded-3xl border border-white/10 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 group cursor-default relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 transition-all duration-300 group-hover:scale-105 relative z-10">
            Ready to get started?
          </h3>
          <p className="text-white/70 mb-6 md:mb-8 text-base md:text-lg transition-all duration-300 group-hover:text-white/90 relative z-10">
            Schedule a demo to see how Lithovision can transform your projects
          </p>
          <div className="relative z-10 inline-block">
            <MagneticButton
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).Cal) {
                  (window as any).Cal.ns['book-a-demo']('ui', {
                    hideEventTypeDetails: false,
                    layout: 'month_view',
                  });
                }
              }}
              className="px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium text-white transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 cursor-pointer relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
              }}
            >
              Schedule Demo
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
