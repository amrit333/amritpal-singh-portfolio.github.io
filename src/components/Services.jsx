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
    <section id="services" className="py-24 relative bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What I Offer</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-all duration-300 group hover:bg-white/10"
            >
              <div className="mb-4 inline-block p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
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
