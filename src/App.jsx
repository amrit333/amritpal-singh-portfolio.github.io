import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import FinShield from './components/FinShield';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] font-sans overflow-x-hidden text-[var(--color-text-premium)] selection:bg-[var(--color-emerald)] selection:text-white relative">
      <div className="noise-bg"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <FinShield />
        <Projects />
        <Certifications />
        <Achievements />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
