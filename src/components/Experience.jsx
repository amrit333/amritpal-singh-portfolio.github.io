import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:pl-0">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 relative pl-8 md:pl-0"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10"></div>
            
            <div className="md:grid md:grid-cols-2 md:gap-8 items-start">
              <div className="md:text-right md:pr-8 pb-4 md:pb-0">
                <h3 className="text-xl font-bold text-white">Digital Marketing Executive & Trainer</h3>
                <h4 className="text-primary font-medium mt-1">Solitaire Infosys Pvt. Ltd.</h4>
                <p className="text-gray-400 text-sm mt-2">Jan 2024 — Present</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl md:ml-8 relative group hover:border-primary/50 transition-colors">
                <div className="absolute top-6 -left-3 w-3 h-3 bg-white/10 rotate-45 hidden md:block group-hover:bg-primary/50 transition-colors"></div>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    Spearheaded end-to-end digital growth, managed organic and paid campaigns across Instagram, YouTube, and Google.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    Produced 50+ high-quality promotional videos and marketing creatives monthly, cutting content turnaround time by ~40%.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    Implemented Generative AI + Prompt Engineering workflow for copywriting and ideation, saving massive production time.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    Trained junior team members on AI content tools, social media best practices, and efficient video editing workflows.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">▹</span>
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
