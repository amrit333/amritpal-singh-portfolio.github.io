import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillCategories = [
  {
    id: 'development',
    label: 'Development',
    skills: ['Java', 'Spring Boot', 'Android', 'React.js', 'REST APIs', 'SQL', 'C++']
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    skills: ['Prompt Engineering', 'ChatGPT', 'Perplexity AI', 'Leonardo AI', 'AI Video Gen', 'AI Copywriting']
  },
  {
    id: 'marketing',
    label: 'Marketing & SEO',
    skills: ['SEO (On/Off Page)', 'Instagram Growth', 'YouTube SEO', 'Content Strategy', 'Performance Marketing', 'Google Analytics 4']
  },
  {
    id: 'design',
    label: 'Design & Video',
    skills: ['Adobe Premiere Pro', 'CapCut', 'Canva', 'Thumbnail Design', 'Visual Storytelling']
  }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('development');

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-teal)]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm tracking-[0.3em] text-[var(--color-text-muted)] uppercase mb-4 font-semibold">Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Technical <span className="emerald-text">&</span> Creative Arsenal</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-emerald)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
                activeTab === category.id 
                  ? 'text-white border border-[var(--color-emerald)]/50 bg-[var(--color-emerald)]/10 shadow-[0_0_20px_rgba(16,185,129,0.15)]' 
                  : 'text-[var(--color-text-muted)] border border-white/10 bg-white/5 hover:text-white hover:border-white/20'
              }`}
            >
              <span className="relative z-10">{category.label}</span>
              {activeTab === category.id && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-[var(--color-teal)]/20 to-[var(--color-emerald)]/20"
                />
              )}
            </button>
          ))}
        </div>

        <div className="min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
            >
              {skillCategories.find(c => c.id === activeTab)?.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="glass-card px-8 py-4 rounded-2xl hover:glass-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-[var(--color-text-premium)] font-medium">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
