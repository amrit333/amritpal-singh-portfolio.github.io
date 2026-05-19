import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[var(--color-secondary)]/30 border-y border-white/[0.02]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm tracking-[0.3em] text-[var(--color-text-muted)] uppercase mb-4 font-semibold">Career Path</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Professional <span className="emerald-text">Experience</span></h3>
          <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-emerald)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 relative pl-10 md:pl-0"
          >
            {/* Timeline Indicator */}
            <div className="absolute left-[-5px] md:left-[50%] md:ml-[-5px] top-8 w-[11px] h-[11px] rounded-full bg-[var(--color-emerald)] shadow-[0_0_15px_var(--color-emerald)] z-10"></div>
            
            <div className="md:grid md:grid-cols-2 md:gap-16 items-start">
              <div className="md:text-right pb-6 md:pb-0 pt-6">
                <h3 className="text-2xl font-bold text-white mb-2">Digital Marketing Executive & Trainer</h3>
                <h4 className="text-[var(--color-emerald)] font-medium text-lg mb-2">Solitaire Infosys Pvt. Ltd.</h4>
                <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[var(--color-text-muted)] text-sm">
                  Jan 2024 — Present
                </div>
              </div>
              
              <div className="glass-card p-8 rounded-[2rem] relative group hover:glass-card-hover transition-all duration-300">
                <div className="absolute top-8 -left-3 w-4 h-4 bg-white/5 rotate-45 border-l border-b border-white/10 hidden md:block group-hover:bg-[var(--color-emerald)]/10 group-hover:border-[var(--color-emerald)]/30 transition-colors"></div>
                <ul className="space-y-4 text-[var(--color-text-muted)] text-sm leading-relaxed font-light">
                  <li className="flex items-start">
                    <span className="text-[var(--color-teal)] mr-3 mt-1 opacity-80">▹</span>
                    Spearheaded end-to-end digital growth, managed organic and paid campaigns across Instagram, YouTube, and Google.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--color-teal)] mr-3 mt-1 opacity-80">▹</span>
                    Produced 50+ high-quality promotional videos and marketing creatives monthly, cutting content turnaround time by ~40%.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--color-teal)] mr-3 mt-1 opacity-80">▹</span>
                    Implemented Generative AI + Prompt Engineering workflow for copywriting and ideation, saving massive production time.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--color-teal)] mr-3 mt-1 opacity-80">▹</span>
                    Trained junior team members on AI content tools, social media best practices, and efficient video editing workflows.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--color-teal)] mr-3 mt-1 opacity-80">▹</span>
                    Collaborated on technical backend implementations and SEO-focused frontend deployments for multiple client projects.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
