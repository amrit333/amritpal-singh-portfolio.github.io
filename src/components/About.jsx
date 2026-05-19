import React from 'react';
import { motion } from 'framer-motion';
import { Code2, PenTool, BrainCircuit } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden glass-card p-2">
              <div className="w-full h-full bg-gradient-to-tr from-gray-800 to-gray-900 rounded-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -right-6 top-10 glass-card px-6 py-4 rounded-xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <Code2 className="text-primary" size={32} />
              <div>
                <p className="text-white font-bold text-xl">BCA</p>
                <p className="text-gray-400 text-sm">Graduate</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Logic and Creativity</span>
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              I am a unique blend of a technical developer and a creative marketer. With a strong foundation in Computer Applications (BCA) and deep expertise in software development, I build robust Android apps, scalable Spring Boot backends, and responsive React web interfaces.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              Simultaneously, my creative side thrives in digital marketing, social media growth, and content strategy. I leverage Generative AI, prompt engineering, and modern video editing tools to craft compelling brand narratives that drive engagement and ROI.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              {[
                { icon: Code2, title: 'Development', desc: 'Java, Android, React, APIs' },
                { icon: PenTool, title: 'Marketing', desc: 'SEO, Content, Social Media' },
                { icon: BrainCircuit, title: 'AI Tools', desc: 'Prompt Eng., Gen AI workflows' },
              ].map((item, idx) => (
                <div key={idx} className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors">
                  <item.icon className="text-primary mb-4" size={28} />
                  <h4 className="text-white font-medium mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
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
