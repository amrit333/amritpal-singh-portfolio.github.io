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
    <section id="skills" className="py-24 relative bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category.id 
                  ? 'bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              {skillCategories.find(c => c.id === activeTab)?.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="glass-card p-4 rounded-xl text-center hover:border-primary/50 transition-colors group"
                >
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
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
