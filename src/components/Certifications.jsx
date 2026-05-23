import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ExternalLink, Calendar, Server, Award, Cloud, Lock } from 'lucide-react';
import awsCertImg from '../assets/images/aws-cloud-practitioner-2024.png';

const certifications = [
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Cloud Practitioner Essentials',
    subtitle: 'Amazon Web Services | Skill Builder Certification',
    description: 'Foundational certification demonstrating comprehensive knowledge of AWS cloud services, architecture, security, and cost management. Covers core services including EC2, RDS, S3, Lambda, IAM, and cloud computing principles.',
    date: 'May 20, 2026',
    status: 'Verified Credential',
    isActive: true,
    image: awsCertImg,
    skills: [
      'Cloud Computing Fundamentals',
      'AWS Services: EC2, S3, RDS, Lambda',
      'Security & Cost Management'
    ],
    credentialUrl: 'https://drive.google.com/file/d/19lXZx3M7VHPxQZX4-yO3V9RILyUHcXjH/view?usp=sharing'
  },
  {
    id: 'aws-solutions-architect',
    title: 'AWS Solutions Architect Associate',
    subtitle: 'Amazon Web Services Certification',
    description: 'Advanced certification focusing on the design of cost-optimized, fault-tolerant, and highly available systems on AWS.',
    status: 'In Progress / Planned',
    isActive: false,
    skills: [
      'Resilient Architectures',
      'High-Performance Architectures',
      'Secure Applications & Architectures',
      'Cost-Optimized Architectures'
    ]
  },
  {
    id: 'aws-developer-associate',
    title: 'AWS Developer Associate',
    subtitle: 'Amazon Web Services Certification',
    description: 'Focuses on developing, deploying, and debugging cloud-based applications using AWS core services.',
    status: 'Planned',
    isActive: false,
    skills: [
      'Deployment & CI/CD',
      'Security & IAM Integration',
      'Development with AWS SDKs',
      'Refactoring & Monitoring'
    ]
  }
];

const Certifications = () => {
  // Schema.org Structured Data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    "name": "AWS Cloud Practitioner Essentials",
    "credentialCategory": "Certification",
    "educationalLevel": "Beginner",
    "about": [
      {
        "@type": "Thing",
        "name": "Cloud Computing Fundamentals"
      },
      {
        "@type": "Thing",
        "name": "AWS Services: EC2, S3, RDS, Lambda"
      },
      {
        "@type": "Thing",
        "name": "Security & Cost Management"
      }
    ],
    "validIn": {
      "@type": "AdministrativeArea",
      "name": "Global"
    },
    "recognizedBy": {
      "@type": "Organization",
      "name": "Amazon Web Services",
      "alternateName": "AWS",
      "sameAs": "https://aws.amazon.com/"
    },
    "awardee": {
      "@type": "Person",
      "name": "Amritpal Singh"
    },
    "dateCreated": "2026-05-20"
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* Decorative Orbs */}
      <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-[#FF9900]/5 rounded-full blur-[150px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[var(--color-emerald)]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm tracking-[0.3em] text-[var(--color-text-muted)] uppercase mb-4 font-semibold">Qualifications</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Certifications & <span className="text-[#FF9900]">Credentials</span>
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FF9900] to-[var(--color-emerald)] mx-auto rounded-full"></div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert, idx) => {
            if (cert.isActive) {
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="lg:col-span-2 glass-card rounded-[2rem] p-8 group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,153,0,0.15)] hover:border-[#FF9900]/30 border border-white/5 relative flex flex-col lg:flex-row gap-8"
                >
                  {/* Left Side: Thumbnail Preview */}
                  <div className="lg:w-1/2 flex flex-col justify-center items-center">
                    <a 
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#FF9900]/40 transition-colors shadow-2xl"
                    >
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-[2px]">
                        <span className="bg-[#FF9900] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg scale-90 group-hover:scale-100 transition-all duration-300">
                          View Full Certificate <ExternalLink size={16} />
                        </span>
                      </div>
                    </a>
                    
                    <span className="text-xs text-[var(--color-text-muted)] mt-3 flex items-center gap-1.5 font-light">
                      Click image to inspect certificate details
                    </span>
                  </div>

                  {/* Right Side: Certificate Info */}
                  <div className="lg:w-1/2 flex flex-col justify-between">
                    <div className="space-y-4">
                      
                      {/* Badge / Status row */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#FF9900]/10 text-[#FF9900] rounded-full text-xs font-semibold border border-[#FF9900]/20 shadow-[0_0_15px_rgba(255,153,0,0.1)]">
                          <ShieldCheck size={14} />
                          {cert.status}
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 text-[var(--color-text-muted)] rounded-full text-xs border border-white/10">
                          <Calendar size={14} />
                          {cert.date}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <div>
                        <h4 className="text-2xl font-bold text-white group-hover:text-[#FF9900] transition-colors leading-tight flex items-center gap-2.5">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-[var(--color-text-muted)] mt-1.5 font-medium">
                          {cert.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-[var(--color-text-muted)] text-sm leading-relaxed font-light">
                        {cert.description}
                      </p>

                      {/* Key Topics */}
                      <div className="space-y-2 pt-2">
                        <p className="text-xs font-semibold text-[var(--color-silver)] uppercase tracking-wider">Key Focus Areas</p>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, sIdx) => (
                            <span 
                              key={sIdx}
                              className="text-xs font-medium px-3 py-1 bg-white/[0.03] text-[var(--color-silver)] rounded-full border border-white/5 shadow-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* View credential button */}
                    <div className="pt-6">
                      <a 
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold inline-flex items-center justify-center gap-2 group relative overflow-hidden shadow-[0_0_20px_rgba(255,153,0,0.1)] border-white/10"
                        style={{
                          background: 'linear-gradient(135deg, #FF9900, #FF6600)',
                          boxShadow: '0 0 20px rgba(255, 153, 0, 0.15)'
                        }}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          View Certificate <ExternalLink size={16} />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6600] to-[#E05300] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </a>
                    </div>

                  </div>
                </motion.div>
              );
            } else {
              // Future/Planned Certifications
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="glass-card rounded-[2rem] p-8 group border border-white/5 transition-all duration-300 relative flex flex-col justify-between opacity-60 hover:opacity-85 hover:border-white/10"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 text-[var(--color-text-muted)] rounded-full text-xs font-medium border border-white/10">
                        <Lock size={12} className="text-gray-500" />
                        {cert.status}
                      </span>
                      <Award size={24} className="text-[var(--color-text-muted)] group-hover:text-white transition-colors" />
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-[var(--color-silver)] transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-[var(--color-text-muted)] mt-1">
                        {cert.subtitle}
                      </p>
                    </div>

                    <p className="text-[var(--color-text-muted)] text-sm leading-relaxed font-light">
                      {cert.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">Planned Topics</p>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill, sIdx) => (
                          <span 
                            key={sIdx}
                            className="text-[11px] font-medium px-2 py-0.5 bg-white/[0.01] text-[var(--color-text-muted)] rounded-full border border-white/[0.03]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/[0.03] flex items-center justify-between text-xs text-[var(--color-text-muted)] font-light">
                    <span>AWS Certification Path</span>
                    <Cloud size={16} />
                  </div>
                </motion.div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
