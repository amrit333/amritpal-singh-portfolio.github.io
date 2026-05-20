import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, PlayCircle } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'FinShield: Real-Time Fraud Detection',
    description: 'A real-time financial fraud detection and transaction monitoring platform designed to secure user transactions against scams, phishing, and fraud.',
    tech: ['Next.js', 'Spring Boot', 'Kafka', 'Redis', 'JWT', 'Docker'],
    result: 'Real-time alert dispatching with sub-2ms processing latency.',
    links: [
      { type: 'github', url: '#' },
      { type: 'demo', url: 'https://fin-shield-real-time-financial-frau.vercel.app/' }
    ]
  },
  {
    title: 'Tech Wealth Coach Mobile App',
    description: 'Developed a comprehensive mobile application combining financial education with AI-driven insights.',
    tech: ['Java', 'Android Studio', 'Firebase', 'REST APIs'],
    result: 'Streamlined user experience with dynamic content delivery.',
    links: [
      { type: 'github', url: '#' },
      { type: 'demo', url: '#' }
    ]
  },
  {
    title: 'Freelancing Platform App',
    description: 'Architected and built a full-stack freelancing platform supporting user authentication, bids, secure payments, and project management.',
    tech: ['Java', 'Spring Boot', 'React', 'MongoDB', 'JWT Auth'],
    result: 'High-performance API handling thousands of concurrent connections.',
    links: [
      { type: 'github', url: 'https://github.com/amrit333/Freelancing-Platform-APP-Using-Spring-boot-and-React' }
    ]
  },
  {
    title: 'Tech Wealth Coach YouTube Channel',
    description: 'Managed full-cycle content production for an AI-focused educational channel including scriptwriting, editing, and YouTube SEO.',
    tech: ['Premiere Pro', 'AI Tools', 'YouTube SEO', 'Canva'],
    result: 'Grew organic viewership and subscriber retention significantly.',
    links: [
      { type: 'video', url: 'https://www.youtube.com/@techwealthcoach' }
    ]
  },
  {
    title: 'Daydream Epoxy SEO Campaign',
    description: 'Executed off-page SEO strategies, backlinking, and high-authority citations to boost client search rankings.',
    tech: ['Ahrefs', 'Search Console', 'Content Strategy'],
    result: 'Improved domain authority and search visibility within 3 months.',
    links: [
      { type: 'demo', url: 'https://daydreamepoxy.ca/' }
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-emerald)]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm tracking-[0.3em] text-[var(--color-text-muted)] uppercase mb-4 font-semibold">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Featured <span className="emerald-text">Projects</span></h3>
          <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-emerald)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass-card rounded-[2rem] p-8 group hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)] hover:border-white/20"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-[var(--color-emerald)] transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-4">
                  {project.links.map((link, lidx) => (
                    <a key={lidx} href={link.url} className="text-[var(--color-text-muted)] hover:text-white transition-colors hover:scale-110 transform">
                      {link.type === 'github' && <FaGithub size={22} />}
                      {link.type === 'demo' && <ExternalLink size={22} />}
                      {link.type === 'video' && <PlayCircle size={22} />}
                    </a>
                  ))}
                </div>
              </div>
              
              <p className="text-[var(--color-text-muted)] text-base mb-8 flex-grow leading-relaxed font-light">
                {project.description}
              </p>
              
              <div className="mb-6 p-4 bg-white/[0.02] rounded-xl border border-white/5">
                <p className="text-sm text-[var(--color-text-muted)]">
                  <span className="font-semibold text-[var(--color-silver)]">Impact:</span> {project.result}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, tidx) => (
                  <span key={tidx} className="text-xs font-medium px-3 py-1.5 bg-[var(--color-emerald)]/10 text-[var(--color-emerald)] rounded-full border border-[var(--color-emerald)]/20 shadow-[0_0_10px_rgba(16,185,129,0.05)]">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
