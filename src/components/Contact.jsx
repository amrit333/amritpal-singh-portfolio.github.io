import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request/processing time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Open email client
    const mailtoUrl = `mailto:jot60103@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;

    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form and success state after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/amrit333', name: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/amritpal-singh-50334133b', name: 'LinkedIn' }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-emerald)]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-6">
            Let's Build Something Amazing Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-emerald)] mx-auto rounded-full mb-6"></div>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto text-lg font-light">
            Ready to start a project or just want to say hi? I'm always open to discussing new opportunities, creative ideas, or visions to bring to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Details Cards */}
            <a href="mailto:jot60103@gmail.com" className="block">
              <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:border-[var(--color-emerald)]/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:-translate-y-1">
                <div className="p-4 rounded-full bg-white/5 text-[var(--color-emerald)] group-hover:bg-[var(--color-emerald)] group-hover:text-white transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-[var(--color-text-muted)] text-sm mb-1 uppercase tracking-wider font-medium">Email Me</h4>
                  <p className="text-lg text-white font-medium">jot60103@gmail.com</p>
                </div>
              </div>
            </a>

            <a href="tel:+918544926441" className="block">
              <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:border-[var(--color-emerald)]/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:-translate-y-1">
                <div className="p-4 rounded-full bg-white/5 text-[var(--color-emerald)] group-hover:bg-[var(--color-emerald)] group-hover:text-white transition-colors duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-[var(--color-text-muted)] text-sm mb-1 uppercase tracking-wider font-medium">Call Me</h4>
                  <p className="text-lg text-white font-medium">+91 85449-26441</p>
                </div>
              </div>
            </a>

            <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:border-[var(--color-emerald)]/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]">
              <div className="p-4 rounded-full bg-white/5 text-[var(--color-emerald)] group-hover:bg-[var(--color-emerald)] group-hover:text-white transition-colors duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-[var(--color-text-muted)] text-sm mb-1 uppercase tracking-wider font-medium">Location</h4>
                <p className="text-lg text-white font-medium">Patiala, Punjab, India</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-[var(--color-text-muted)] text-sm uppercase tracking-wider font-medium mb-4">Connect With Me</p>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 glass-card rounded-xl text-[var(--color-text-muted)] hover:text-white hover:border-[var(--color-emerald)]/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300 relative group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-emerald)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <social.icon size={26} className="relative z-10" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 glass-card p-8 md:p-10 rounded-[2rem] relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--color-emerald)]/10 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[var(--color-teal)]/10 blur-[80px] rounded-full pointer-events-none"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 relative group">
                  <label className="text-sm text-[var(--color-text-muted)] font-medium pl-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[var(--color-secondary)]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[var(--color-emerald)] focus:ring-1 focus:ring-[var(--color-emerald)] transition-all duration-300 placeholder-[var(--color-text-muted)]/50 hover:border-white/20" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2 relative group">
                  <label className="text-sm text-[var(--color-text-muted)] font-medium pl-1">Your Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[var(--color-secondary)]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[var(--color-emerald)] focus:ring-1 focus:ring-[var(--color-emerald)] transition-all duration-300 placeholder-[var(--color-text-muted)]/50 hover:border-white/20" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-[var(--color-text-muted)] font-medium pl-1">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[var(--color-secondary)]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[var(--color-emerald)] focus:ring-1 focus:ring-[var(--color-emerald)] transition-all duration-300 placeholder-[var(--color-text-muted)]/50 hover:border-white/20" 
                  placeholder="Project Inquiry" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-[var(--color-text-muted)] font-medium pl-1">Message</label>
                <textarea 
                  rows="5" 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[var(--color-secondary)]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[var(--color-emerald)] focus:ring-1 focus:ring-[var(--color-emerald)] transition-all duration-300 resize-none placeholder-[var(--color-text-muted)]/50 hover:border-white/20" 
                  placeholder="Hello Amritpal, I would like to discuss..."
                ></textarea>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={isSubmitting || isSuccess}
                className={`w-full py-4 rounded-xl text-white font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden relative ${
                  isSuccess 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50 hover:bg-green-500/30' 
                    : 'btn-primary'
                }`}
              >
                {!isSubmitting && !isSuccess && (
                  <>
                    <span>Send Message</span>
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
                {isSubmitting && (
                  <>
                    <Loader2 size={22} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                )}
                {isSuccess && (
                  <>
                    <CheckCircle2 size={22} />
                    <span>Message Initiated!</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
