import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, PlayCircle } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
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
    title: 'Freelancing Platform Backend',
    description: 'Architected and built a scalable backend for a freelancing platform supporting user authentication, bids, and project management.',
    tech: ['Java', 'Spring Boot', 'MongoDB', 'JWT Auth'],
    result: 'High-performance API handling thousands of concurrent connections.',
    links: [
      { type: 'github', url: '#' }
    ]
  },
  {
    title: 'Tech Wealth Coach YouTube Channel',
    description: 'Managed full-cycle content production for an AI-focused educational channel including scriptwriting, editing, and YouTube SEO.',
    tech: ['Premiere Pro', 'AI Tools', 'YouTube SEO', 'Canva'],
    result: 'Grew organic viewership and subscriber retention significantly.',
    links: [
      { type: 'video', url: '#' }
    ]
  },
  {
    title: 'Daydream Epoxy SEO Campaign',
    description: 'Executed off-page SEO strategies, backlinking, and high-authority citations to boost client search rankings.',
    tech: ['Ahrefs', 'Search Console', 'Content Strategy'],
    result: 'Improved domain authority and search visibility within 3 months.',
    links: [
      { type: 'demo', url: '#' }
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  {project.links.map((link, lidx) => (
                    <a key={lidx} href={link.url} className="text-gray-400 hover:text-white transition-colors">
                      {link.type === 'github' && <FaGithub size={20} />}
                      {link.type === 'demo' && <ExternalLink size={20} />}
                      {link.type === 'video' && <PlayCircle size={20} />}
                    </a>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4 p-3 bg-white/5 rounded-lg border border-white/5">
                <p className="text-xs text-gray-300">
                  <span className="font-semibold text-accent">Impact:</span> {project.result}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, tidx) => (
                  <span key={tidx} className="text-xs font-medium px-2.5 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
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
