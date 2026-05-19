import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Star } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: '1st Prize, Hackathon — UIET',
    desc: 'Built and presented an innovative tech solution independently, beating competing teams across multiple engineering colleges.',
    color: 'text-yellow-400',
    glow: 'shadow-[0_0_15px_rgba(250,204,21,0.4)]'
  },
  {
    icon: Award,
    title: '1st Prize, Hackathon — Chitkara',
    desc: 'Delivered a high-performance software project under tight time constraints, demonstrating strong problem-solving under pressure.',
    color: 'text-yellow-400',
    glow: 'shadow-[0_0_15px_rgba(250,204,21,0.4)]'
  },
  {
    icon: Medal,
    title: '1st Prize, C++ Programming',
    desc: 'Ranked top in a competitive coding event at Chandigarh University, showcasing algorithmic thinking and technical depth.',
    color: 'text-yellow-400',
    glow: 'shadow-[0_0_15px_rgba(250,204,21,0.4)]'
  },
  {
    icon: Star,
    title: 'State Level Gold Medal',
    desc: 'Awarded State Level Gold Medal Winner during school for outstanding extracurricular excellence and dedication.',
    color: 'text-yellow-400',
    glow: 'shadow-[0_0_20px_rgba(250,204,21,0.5)]'
  },
  {
    icon: Award,
    title: '2nd Prize, Web Designing',
    desc: 'Recognized for UI/UX design excellence in an inter-college web design competition at Punjabi University.',
    color: 'text-gray-300',
    glow: 'shadow-[0_0_15px_rgba(209,213,219,0.3)]'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Achievements & Awards</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`glass-card p-6 rounded-2xl flex flex-col items-center text-center group border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden`}
            >
              {/* Subtle animated gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className={`p-4 rounded-full bg-white/5 border border-white/10 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:${item.glow} ${item.color}`}>
                <item.icon size={36} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
