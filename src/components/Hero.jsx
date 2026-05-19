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
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm text-gray-300">Available for new opportunities</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent neon-text">
                Amritpal Singh
              </span>
            </h1>

            <div className="h-12 text-xl sm:text-2xl md:text-3xl text-gray-300 font-light flex items-center">
              <span>I am a&nbsp;</span>
              <div className="relative inline-block overflow-hidden w-full h-full align-bottom">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute left-0 text-white font-medium"
                  >
                    {roles[currentRole]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
              Blending strong software engineering with creative branding. From scalable backends and engaging mobile apps to high-converting AI content strategies.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors flex items-center gap-2 group">
                View Projects 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#" className="px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 backdrop-blur-md transition-colors flex items-center gap-2 border border-white/5">
                Download CV
                <Download size={18} />
              </a>
            </div>

            <div className="flex items-center gap-6 pt-6 text-gray-400">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/amritpal-singh" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:jot60103@gmail.com" className="hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          {/* Abstract visual/image area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex justify-center relative"
          >
            <div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden glass-card p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-medium text-lg">Code + Creativity</p>
                  <div className="h-1 w-12 bg-primary mt-2 rounded-full"></div>
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
