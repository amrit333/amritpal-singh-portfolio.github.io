import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Server, LineChart, PenTool, Search, Brain, Palette } from 'lucide-react';

const services = [
  { icon: Smartphone, title: 'Mobile App Development', desc: 'Native Android and cross-platform apps with clean UI/UX and solid backend integration.' },
  { icon: Server, title: 'Backend Development', desc: 'Scalable Spring Boot APIs, database design, and secure authentication systems.' },
  { icon: LineChart, title: 'Social Media Strategy', desc: 'Data-driven growth strategies for platforms like Instagram, boosting engagement and reach.' },
  { icon: PenTool, title: 'Content Creation', desc: 'High-quality video editing, scripting, and visual content production using modern tools.' },
  { icon: Search, title: 'SEO Optimization', desc: 'On-page and off-page SEO, keyword targeting, and authority building for websites.' },
  { icon: Brain, title: 'AI Prompt Engineering', desc: 'Leveraging Generative AI tools to automate workflows, write copy, and ideate concepts.' },
  { icon: Palette, title: 'Brand Design', desc: 'Crafting consistent brand identities, engaging graphics, and professional thumbnails.' }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[var(--color-secondary)]/30 border-y border-white/[0.02]">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[var(--color-teal)]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm tracking-[0.3em] text-[var(--color-text-muted)] uppercase mb-4 font-semibold">Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">What I <span className="emerald-text">Offer</span></h3>
          <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-emerald)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 group hover:shadow-[0_15px_40px_rgba(16,185,129,0.1)] hover:border-white/20"
            >
              <div className="mb-6 inline-block p-4 rounded-2xl bg-white/5 text-[var(--color-text-muted)] group-hover:bg-[var(--color-emerald)] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300">
                <service.icon size={30} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[var(--color-silver)] transition-colors">{service.title}</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed font-light">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
