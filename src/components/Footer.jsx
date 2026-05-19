import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[var(--color-background)]/80 backdrop-blur-xl pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a href="#" className="text-2xl font-bold tracking-tighter text-white group">
              Amritpal<span className="emerald-text group-hover:text-[var(--color-gold)] transition-colors duration-300">.</span>
            </a>
            <p className="text-[var(--color-text-muted)] text-sm mt-2 font-light">Code + Creativity. Building modern digital experiences.</p>
          </div>
          
          <div className="flex flex-wrap justify-center space-x-6 text-sm text-[var(--color-text-muted)] font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-white/[0.03] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[var(--color-text-muted)] font-light">
          <p>&copy; {new Date().getFullYear()} Amritpal Singh. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built with <span className="emerald-text">React & Tailwind v4</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
