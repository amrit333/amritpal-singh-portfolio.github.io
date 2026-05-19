import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Download, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const roles = [
  "Java / Android Developer",
  "Backend Developer",
  "AI Prompt Engineer",
  "Social Media Manager",
  "Content Creator"
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Cinematic Lighting & Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[var(--color-emerald)]/10 rounded-full mix-blend-screen blur-[120px] animate-[pulseSlow_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-[var(--color-teal)]/10 rounded-full mix-blend-screen blur-[150px] animate-[pulseSlow_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--color-gold)]/5 rounded-full blur-[100px] opacity-50 transform -rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] w-fit backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-emerald)] animate-pulse shadow-[0_0_10px_var(--color-emerald)]"></span>
              <span className="text-sm font-medium text-[var(--color-text-muted)] tracking-wide">Available for new opportunities</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.1]">
              Hi, I'm <br />
              <span className="gradient-text">
                Amritpal
              </span>
            </h1>

            <div className="h-12 text-xl sm:text-2xl md:text-3xl text-[var(--color-text-muted)] font-light flex items-center">
              <span className="mr-2">I am a</span>
              <div className="relative inline-block overflow-hidden w-full h-full align-bottom">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute left-0 text-white font-medium emerald-text"
                  >
                    {roles[currentRole]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <p className="text-[var(--color-text-muted)] text-lg sm:text-xl max-w-xl leading-relaxed font-light">
              Blending strong software engineering with creative branding. From scalable backends and engaging mobile apps to high-converting AI content strategies.
            </p>

            <div className="flex flex-wrap gap-5 pt-2">
              <a href="#projects" className="btn-primary px-8 py-4 rounded-xl text-sm font-semibold flex items-center gap-3 group relative overflow-hidden">
                <span className="relative z-10">View Projects</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-emerald)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="#" className="btn-secondary px-8 py-4 rounded-xl text-sm font-semibold flex items-center gap-3 hover:bg-white/10 hover:border-white/20 transition-all">
                Download CV
                <Download size={18} />
              </a>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-white/[0.05]">
              <a href="https://github.com/amrit333" target="_blank" rel="noreferrer" className="text-[var(--color-text-muted)] hover:text-white transition-colors hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-full">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/amritpal-singh-50334133b" target="_blank" rel="noreferrer" className="text-[var(--color-text-muted)] hover:text-white transition-colors hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-full">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:jot60103@gmail.com" className="text-[var(--color-text-muted)] hover:text-white transition-colors hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-full">
                <Mail size={26} />
              </a>
            </div>
          </motion.div>

          {/* Abstract visual/image area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex justify-end relative"
          >
            <div className="relative w-[450px] h-[550px] glass-card rounded-[2rem] p-3 transform hover:-translate-y-2 transition-transform duration-700 hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)]">
              <div className="w-full h-full bg-[var(--color-secondary)] rounded-[1.5rem] relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-transparent to-transparent opacity-80"></div>
                
                {/* Decorative UI elements inside card */}
                <div className="absolute top-6 right-6 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                </div>

                <div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-2xl border-white/5">
                  <p className="text-[var(--color-silver)] font-medium text-sm tracking-widest uppercase mb-2">Portfolio</p>
                  <p className="text-white font-semibold text-xl">Code + Creativity</p>
                  <div className="w-full h-1 bg-white/10 mt-4 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-emerald)] w-2/3 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
