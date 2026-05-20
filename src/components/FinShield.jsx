import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ExternalLink, Cpu, Database, Lock, Activity, Zap, Bell, CheckCircle2, RefreshCw } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

// Predefined set of mock transactions for the live simulator
const transactionTemplates = [
  { type: 'transfer', amount: '$1,250.00', status: 'APPROVED', info: 'Acc *3842 ➔ *9018', detail: 'Normal velocity' },
  { type: 'login', amount: 'IP 185.220.101.5', status: 'BLOCKED', info: 'Tor Exit Node detected', detail: 'Flagged malicious IP' },
  { type: 'purchase', amount: '$4,999.00', status: 'FLAGGED', info: 'Card *8829 ➔ Electronics Store', detail: 'High value transaction' },
  { type: 'transfer', amount: '$120.00', status: 'APPROVED', info: 'Acc *1092 ➔ *7829', detail: 'Verified device' },
  { type: 'auth', amount: 'MFA Request', status: 'APPROVED', info: 'User session verified', detail: 'Biometric matched' },
  { type: 'phishing', amount: 'URL Scan', status: 'BLOCKED', info: 'Suspicious link blocked', detail: 'Phishing domain match' },
  { type: 'card', amount: '$78.50', status: 'APPROVED', info: 'Card *4112 ➔ Grocery Store', detail: 'Frequent location' },
  { type: 'access', amount: 'New Login', status: 'FLAGGED', info: 'IP 103.88.22.11 ➔ Mumbai, IN', detail: 'Geographic anomaly' }
];

const keyFeatures = [
  { icon: Activity, title: 'Real-Time Fraud Detection', desc: 'Instant pattern checking' },
  { icon: Shield, title: 'Secure Transaction Monitoring', desc: 'Rule-based compliance engine' },
  { icon: Bell, title: 'Fraud Alerts & Notifications', desc: 'Instant system dispatch' },
  { icon: Lock, title: 'JWT Authentication', desc: 'Secure session management' },
  { icon: Zap, title: 'Kafka Event Streaming', desc: 'High-throughput architecture' },
  { icon: Database, title: 'Redis Caching & Audit Logs', desc: 'Ultra-low latency data retrieval' },
  { icon: Cpu, title: 'Microservices Architecture', desc: 'Decoupled, scalable services' },
  { icon: CheckCircle2, title: 'Scalable Fintech Design', desc: 'Built for enterprise volumes' }
];

const FinShield = () => {
  const [streamRate, setStreamRate] = useState(148);
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'transfer', amount: '$1,250.00', status: 'APPROVED', info: 'Acc *3842 ➔ *9018', detail: 'Normal velocity' },
    { id: 2, type: 'login', amount: 'IP 185.220.101.5', status: 'BLOCKED', info: 'Tor Exit Node detected', detail: 'Flagged malicious IP' },
    { id: 3, type: 'purchase', amount: '$4,999.00', status: 'FLAGGED', info: 'Card *8829 ➔ Electronics Store', detail: 'High value transaction' }
  ]);
  const [activeTab, setActiveTab] = useState('monitor'); // monitor | logs | metrics

  // Fluctuating event stream rate simulation
  useEffect(() => {
    const rateInterval = setInterval(() => {
      setStreamRate(prev => {
        const change = Math.floor(Math.random() * 9) - 4; // -4 to +4
        const newRate = prev + change;
        return newRate < 130 ? 130 : newRate > 165 ? 165 : newRate;
      });
    }, 1500);

    return () => clearInterval(rateInterval);
  }, []);

  // Live transaction simulator
  useEffect(() => {
    let idCounter = 4;
    const transactionInterval = setInterval(() => {
      const randomTemplate = transactionTemplates[Math.floor(Math.random() * transactionTemplates.length)];
      const newTransaction = {
        ...randomTemplate,
        id: idCounter++
      };
      
      setTransactions(prev => [newTransaction, ...prev.slice(0, 3)]);
    }, 3000);

    return () => clearInterval(transactionInterval);
  }, []);

  return (
    <section id="finshield" className="py-28 relative overflow-hidden bg-[#0A0E17]/40 border-y border-blue-900/10">
      {/* Background gradients specific to FinShield's Fintech Cyber Blue theme */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/15 mb-4 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.5)]"></span>
            <span className="text-xs font-semibold text-blue-300 tracking-widest uppercase">Featured Architecture Showcase</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Fintech Security: <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-white bg-clip-text text-fill-transparent">FinShield</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Details */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white mb-2">FinShield</h3>
            <p className="text-cyan-400 font-medium text-sm tracking-wide mb-6 uppercase">
              Real-Time Financial Fraud Detection & Transaction Monitoring
            </p>
            <p className="text-slate-400 text-[1.05rem] mb-8 leading-relaxed font-light">
              FinShield is a scalable, real-time transaction monitoring platform designed to shield financial ecosystems from fraud, anomalies, phishing links, and malicious accounts. Driven by a microservices architecture, it streams transaction flows to run parallel analytics rules, dispatching immediate security warnings.
            </p>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.01] border border-white/5 hover:border-blue-500/20 hover:bg-blue-500/[0.02] transition-all duration-300">
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-cyan-400 mt-0.5">
                    <feat.icon size={16} />
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-semibold">{feat.title}</h4>
                    <p className="text-slate-500 text-[10px]">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="mb-8">
              <p className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-3">Enterprise Stack</p>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'Spring Boot', 'Kafka', 'Redis', 'JWT Auth', 'Docker', 'Microservices', 'Tailwind CSS'].map((tech, idx) => (
                  <span key={idx} className="text-xs px-3 py-1.5 bg-blue-500/5 text-blue-300 rounded-lg border border-blue-500/10 hover:border-cyan-400/30 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://fin-shield-real-time-financial-frau.vercel.app/" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_8px_30px_rgba(34,211,238,0.4)] transition-all transform hover:-translate-y-0.5"
              >
                <span>Live System Demo</span>
                <ExternalLink size={16} />
              </a>
              
              <a 
                href="#" 
                onClick={(e) => e.preventDefault()} 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all transform hover:-translate-y-0.5"
              >
                <FaGithub size={16} />
                <span>GitHub (Private Repo)</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Dashboard Simulator */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            {/* Main Window */}
            <div className="w-full glass-card rounded-[2rem] border border-blue-900/20 shadow-[0_25px_60px_rgba(0,0,0,0.4)] overflow-hidden">
              
              {/* Window Header */}
              <div className="flex justify-between items-center px-6 py-4 bg-slate-950/60 border-b border-blue-900/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                
                {/* Browser Address Bar */}
                <div className="hidden sm:flex items-center gap-2 bg-slate-900/80 px-4 py-1.5 rounded-lg border border-white/5 w-64 text-center justify-center text-[11px] text-slate-400 font-mono">
                  <Lock size={10} className="text-cyan-400" />
                  <span>finshield.security/dashboard</span>
                </div>

                <div className="flex items-center gap-2 text-slate-400">
                  <RefreshCw size={14} className="animate-spin-slow hover:text-cyan-400 cursor-pointer" />
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 bg-slate-950/40">
                
                {/* Status Bar */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">Active Protection</span>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-sm font-semibold text-white">5/5 Nodes Online</span>
                    </div>
                  </div>
                  
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">Stream Rate</span>
                    <span className="text-sm font-bold text-cyan-400 mt-1 font-mono">{streamRate} ev/s</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">Cache Hit Rate</span>
                    <span className="text-sm font-bold text-white mt-1 font-mono">99.42%</span>
                  </div>
                </div>

                {/* Tab Selectors */}
                <div className="flex border-b border-white/5 mb-6 text-xs font-semibold">
                  {['monitor', 'metrics', 'architecture'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-3 px-4 capitalize transition-all relative ${
                        activeTab === tab ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {tab}
                      {activeTab === tab && (
                        <motion.div 
                          layoutId="activeTabUnderline" 
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Tab Views */}
                <div className="min-h-[220px]">
                  <AnimatePresence mode="wait">
                    
                    {/* MONITOR TAB */}
                    {activeTab === 'monitor' && (
                      <motion.div
                        key="monitor"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3"
                      >
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                          <Activity size={10} className="text-blue-500 animate-pulse" />
                          Live event-driven transaction ledger (1s latency)
                        </p>
                        
                        <div className="space-y-2">
                          <AnimatePresence initial={false}>
                            {transactions.map((tx) => (
                              <motion.div
                                key={tx.id}
                                initial={{ opacity: 0, height: 0, y: -10 }}
                                animate={{ opacity: 1, height: 'auto', y: 0 }}
                                exit={{ opacity: 0, height: 0, y: 15 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                className="overflow-hidden"
                              >
                                <div className="p-3 rounded-xl bg-slate-900/50 border border-white/5 flex items-center justify-between hover:bg-slate-900/80 transition-colors">
                                  <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${
                                      tx.status === 'APPROVED' ? 'bg-emerald-500/10 text-emerald-400' :
                                      tx.status === 'FLAGGED' ? 'bg-amber-500/10 text-amber-400' :
                                      'bg-rose-500/10 text-rose-400'
                                    }`}>
                                      {tx.status === 'APPROVED' && <CheckCircle2 size={16} />}
                                      {tx.status === 'FLAGGED' && <Bell size={16} />}
                                      {tx.status === 'BLOCKED' && <Shield size={16} />}
                                    </div>
                                    
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <span className="text-white text-xs font-semibold font-mono">{tx.amount}</span>
                                        <span className="text-slate-500 text-[10px]">{tx.info}</span>
                                      </div>
                                      <p className="text-slate-400 text-[10px] mt-0.5">{tx.detail}</p>
                                    </div>
                                  </div>

                                  <div>
                                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                                      tx.status === 'APPROVED' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                      tx.status === 'FLAGGED' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                                      'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                                    }`}>
                                      {tx.status}
                                    </span>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    )}

                    {/* METRICS TAB */}
                    {activeTab === 'metrics' && (
                      <motion.div
                        key="metrics"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="grid grid-cols-2 gap-4 pt-2"
                      >
                        <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5">
                          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Rule Processing Latency</span>
                          <p className="text-2xl font-bold text-white mt-1 font-mono">1.2ms</p>
                          <div className="w-full bg-slate-950 h-1.5 rounded-full mt-3 overflow-hidden border border-white/5">
                            <div className="bg-cyan-400 h-full w-[95%] rounded-full"></div>
                          </div>
                          <span className="text-[9px] text-slate-500 mt-1 block">99.9th percentile: 2.8ms</span>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5">
                          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Event Broker Overhead</span>
                          <p className="text-2xl font-bold text-white mt-1 font-mono">0.45ms</p>
                          <div className="w-full bg-slate-950 h-1.5 rounded-full mt-3 overflow-hidden border border-white/5">
                            <div className="bg-blue-500 h-full w-[88%] rounded-full"></div>
                          </div>
                          <span className="text-[9px] text-slate-500 mt-1 block">Kafka message broker roundtrip</span>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5">
                          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Redis Cache Hit Rate</span>
                          <p className="text-2xl font-bold text-white mt-1 font-mono">98.9%</p>
                          <div className="w-full bg-slate-950 h-1.5 rounded-full mt-3 overflow-hidden border border-white/5">
                            <div className="bg-emerald-400 h-full w-[98%] rounded-full"></div>
                          </div>
                          <span className="text-[9px] text-slate-500 mt-1 block">JWT tokens & rule templates caches</span>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5">
                          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Audit Log Persistence</span>
                          <p className="text-2xl font-bold text-white mt-1 font-mono">100%</p>
                          <div className="w-full bg-slate-950 h-1.5 rounded-full mt-3 overflow-hidden border border-white/5">
                            <div className="bg-cyan-500 h-full w-full rounded-full"></div>
                          </div>
                          <span className="text-[9px] text-slate-500 mt-1 block">Zero drop rate - Postgres write pool</span>
                        </div>
                      </motion.div>
                    )}

                    {/* ARCHITECTURE TAB */}
                    {activeTab === 'architecture' && (
                      <motion.div
                        key="architecture"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col items-center justify-center p-4"
                      >
                        <div className="w-full max-w-md p-4 rounded-xl bg-slate-900/50 border border-white/5 space-y-4">
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider text-center">Data Pipeline Flow</p>
                          
                          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-300 font-semibold font-mono">
                            <div className="px-2.5 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 w-full sm:w-auto text-center">Next.js UI</div>
                            <div className="text-cyan-400 text-sm hidden sm:block">➔</div>
                            <div className="px-2.5 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 w-full sm:w-auto text-center">API Gateway (JWT)</div>
                            <div className="text-cyan-400 text-sm hidden sm:block">➔</div>
                            <div className="px-2.5 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 w-full sm:w-auto text-center">Kafka Queue</div>
                          </div>

                          <div className="text-center text-slate-600 text-sm -my-1 hidden sm:block">▼</div>

                          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[10px] text-slate-300 font-semibold font-mono">
                            <div className="px-3 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-center w-full sm:w-40">
                              <p className="text-white text-xs font-bold mb-1">Fraud Rule Service</p>
                              <span className="text-[9px] text-slate-500">Redis validation checks</span>
                            </div>
                            <div className="px-3 py-2 rounded-lg bg-sky-500/10 border border-sky-500/20 text-center w-full sm:w-40">
                              <p className="text-white text-xs font-bold mb-1">Audit Log Service</p>
                              <span className="text-[9px] text-slate-500">PostgreSQL data sink</span>
                            </div>
                          </div>

                          <p className="text-[9px] text-slate-500 text-center leading-normal">
                            Decoupled spring-boot microservices communicate asynchronously via Kafka topics, caching rule definitions in Redis to minimize network roundtrips.
                          </p>
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>
              </div>

              {/* Simulated Console Log Footer */}
              <div className="px-6 py-3.5 bg-slate-950 border-t border-blue-900/10 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></div>
                  <span>WS listener active | listening on port: 9092</span>
                </div>
                <div>
                  <span className="text-slate-600">v1.0.4-stable</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FinShield;
