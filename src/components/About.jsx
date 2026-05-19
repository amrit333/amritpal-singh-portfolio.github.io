import React from 'react';
import { motion } from 'framer-motion';
import { Code2, PenTool, BrainCircuit } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Cinematic ambient background */}
      <div className="absolute inset-0 z-0 bg-[var(--color-secondary)]/30 border-y border-white/[0.02]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm tracking-[0.3em] text-[var(--color-text-muted)] uppercase mb-4 font-semibold">About Me</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Bridging the gap between <br/><span className="emerald-text">Logic and Creativity</span></h3>
          <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-emerald)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden glass-card p-2 group hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)] transition-shadow duration-500">
              <div className="w-full h-full bg-[var(--color-secondary)] rounded-[1.5rem] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-transparent to-transparent opacity-80"></div>
              </div>
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -right-8 bottom-20 glass-card px-6 py-4 rounded-2xl flex items-center gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.3)] border-white/10"
            >
              <div className="p-3 bg-[var(--color-emerald)]/10 rounded-full text-[var(--color-emerald)]">
                <Code2 size={28} />
              </div>
              <div>
                <p className="text-white font-bold text-lg">BCA</p>
                <p className="text-[var(--color-text-muted)] text-xs uppercase tracking-wider">Graduate</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-6 text-[var(--color-text-muted)] text-lg leading-relaxed font-light">
              <p>
                I am a unique blend of a technical developer and a creative marketer. With a strong foundation in Computer Applications (BCA) and deep expertise in software development, I build robust Android apps, scalable Spring Boot backends, and responsive React web interfaces.
              </p>
              
              <p>
                Simultaneously, my creative side thrives in digital marketing, social media growth, and content strategy. I leverage Generative AI, prompt engineering, and modern video editing tools to craft compelling brand narratives that drive engagement and ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {[
                { icon: Code2, title: 'Development', desc: 'Java, Android, React, APIs' },
                { icon: PenTool, title: 'Marketing', desc: 'SEO, Content, Social Media' },
                { icon: BrainCircuit, title: 'AI Tools', desc: 'Prompt Eng., Gen AI workflows' },
              ].map((item, idx) => (
                <div key={idx} className="glass-card p-6 rounded-2xl hover:glass-card-hover transition-all duration-300 group">
                  <div className="mb-4 inline-block p-3 rounded-xl bg-white/5 text-[var(--color-text-muted)] group-hover:bg-[var(--color-emerald)]/10 group-hover:text-[var(--color-emerald)] transition-colors">
                    <item.icon size={24} />
                  </div>
                  <h4 className="text-white font-medium mb-2">{item.title}</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
