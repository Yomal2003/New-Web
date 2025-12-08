
import React from 'react';
import Section from '../components/ui/Section';
import { motion } from 'framer-motion';
import { 
  Code, Cloud, Database, BarChart, Smartphone, Shield, Search, PenTool, Rocket, Repeat,
  Layout, Server, Globe, Cpu, Layers, Palette, Brain, Zap, GitBranch, Lightbulb, TrendingUp, CheckCircle, Bug
} from 'lucide-react';

const processSteps = [
    { icon: Search, title: "Discovery", desc: "We analyze your business goals and technical requirements." },
    { icon: PenTool, title: "Design", desc: "Creating intuitive UI/UX and robust system architecture." },
    { icon: Code, title: "Development", desc: "Agile coding sprints with regular updates and feedback." },
    { icon: Rocket, title: "Launch", desc: "Deployment, testing, and ensuring a smooth go-live." },
    { icon: Repeat, title: "Support", desc: "Continuous maintenance and feature enhancements." },
];

const ServicesPage: React.FC = () => {
  return (
    <div className=" min-h-screen bg-gray-50">
      <div className=" pt-32 bg-brand-blue text-white py-24 px-4 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-brand-lime">Services</span>
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Comprehensive technology solutions to drive your business forward.
          </p>
        </div>
      </div>

      {/* --- CONSULTING & STRATEGY SECTION --- */}
      <section id="consulting" className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-6">
                  <Lightbulb size={14} /> Consulting & Strategy
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
                  Future-proof your <span className="text-brand-blue">roadmap</span>.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                   We help you navigate the complex digital landscape. From legacy modernization to digital transformation strategies, our experts align technology with your business goals to unlock new revenue streams.
                </p>
                <ul className="space-y-4">
                    {["Digital Transformation", "Technology Audit", "Product Discovery", "Architecture Design"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <CheckCircle size={18} className="text-brand-lime" />
                            <span className="font-medium text-gray-700">{item}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="bg-orange-50 rounded-3xl p-8 border border-orange-100 relative"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-bl-full opacity-50"></div>
                <h3 className="text-2xl font-bold mb-6 text-orange-900">Strategic Impact</h3>
                <div className="space-y-6">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-sm text-gray-500 font-bold uppercase">Efficiency</span>
                            <span className="text-2xl font-bold text-brand-dark">+45%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full w-[45%] bg-brand-lime"></div>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-sm text-gray-500 font-bold uppercase">Cost Reduction</span>
                            <span className="text-2xl font-bold text-brand-dark">-30%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full w-[30%] bg-brand-blue"></div>
                        </div>
                    </div>
                </div>
            </motion.div>
          </div>
      </section>

      {/* --- UI/UX DESIGN SECTION --- */}
      <section id="ui-ux-design" className="py-24 bg-brand-dark text-white relative overflow-hidden">
         {/* Abstract Lines */}
         <svg className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 C 20 0 50 0 100 100" stroke="white" strokeWidth="0.5" fill="none" />
             <path d="M0 100 C 50 0 80 0 100 100" stroke="white" strokeWidth="0.5" fill="none" />
         </svg>

         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider mb-6 border border-purple-500/30">
                  <Palette size={14} /> UI/UX Design
               </div>
               <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Design that drives <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-brand-lime">engagement</span>.
               </h2>
               <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  We believe that great software starts with great design. Our design process involves deep user research, interactive prototyping, and pixel-perfect interface design that aligns with your brand identity.
               </p>
               
               <div className="flex flex-wrap gap-3">
                   {["Figma", "User Research", "Prototyping", "Design Systems", "Motion Graphics"].map((tag, i) => (
                       <span key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:border-brand-lime/50 transition-colors">
                           {tag}
                       </span>
                   ))}
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="grid grid-cols-2 gap-4"
            >
               <div className="space-y-4 mt-8">
                   <img src="https://picsum.photos/id/119/400/500" className="rounded-2xl shadow-lg opacity-80 hover:opacity-100 transition-opacity" alt="UI" />
                   <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                       <Layers className="text-brand-lime mb-2" />
                       <div className="h-2 w-12 bg-white/20 rounded-full mb-2"></div>
                       <div className="h-2 w-24 bg-white/20 rounded-full"></div>
                   </div>
               </div>
               <div className="space-y-4">
                   <div className="bg-gradient-to-br from-brand-blue to-purple-600 p-6 rounded-2xl text-center">
                       <h3 className="text-3xl font-bold mb-1">40%</h3>
                       <p className="text-xs uppercase opacity-70">Conversion Uplift</p>
                   </div>
                   <img src="https://picsum.photos/id/20/400/500" className="rounded-2xl shadow-lg opacity-80 hover:opacity-100 transition-opacity" alt="UX" />
               </div>
            </motion.div>
         </div>
      </section>

      {/* --- WEB DEVELOPMENT SECTION --- */}
      <section id="web-dev" className="py-24 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-bold uppercase tracking-wider mb-6">
                  <Globe size={14} /> Web Development
               </div>
               <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
                  Scalable, high-performance <span className="text-brand-blue">web solutions</span>.
               </h2>
               <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We build modern web applications that are fast, secure, and easy to scale. From complex enterprise dashboards to high-conversion e-commerce platforms, our code is clean and our architecture is robust.
               </p>
               
               <div className="grid grid-cols-2 gap-6">
                  <div className="flex gap-3">
                     <Layout className="text-brand-lime shrink-0" />
                     <div>
                        <h4 className="font-bold text-brand-dark">SPA & PWA</h4>
                        <p className="text-sm text-gray-500">React, Next.js, Vue</p>
                     </div>
                  </div>
                  <div className="flex gap-3">
                     <Server className="text-brand-lime shrink-0" />
                     <div>
                        <h4 className="font-bold text-brand-dark">Backend Systems</h4>
                        <p className="text-sm text-gray-500">Node.js, Python, Go</p>
                     </div>
                  </div>
                  <div className="flex gap-3">
                     <Database className="text-brand-lime shrink-0" />
                     <div>
                        <h4 className="font-bold text-brand-dark">Cloud Native</h4>
                        <p className="text-sm text-gray-500">AWS, Azure, Docker</p>
                     </div>
                  </div>
                  <div className="flex gap-3">
                     <GitBranch className="text-brand-lime shrink-0" />
                     <div>
                        <h4 className="font-bold text-brand-dark">CI/CD</h4>
                        <p className="text-sm text-gray-500">Automated Pipelines</p>
                     </div>
                  </div>
               </div>
            </motion.div>

            {/* Visual representation of Code/Browser */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative"
            >
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-purple opacity-10 rounded-2xl transform rotate-3 scale-105"></div>
               <div className="bg-brand-dark rounded-xl p-2 shadow-2xl relative overflow-hidden border border-gray-700">
                  <div className="bg-gray-800 rounded-t-lg p-2 flex items-center gap-2 mb-2">
                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="p-4 space-y-4 font-mono text-sm">
                      <div className="text-purple-400">import <span className="text-white">React</span> from <span className="text-green-400">'react'</span>;</div>
                      <div className="text-blue-400">const <span className="text-yellow-400">App</span> = () =&gt; {'{'}</div>
                      <div className="pl-4 text-gray-400">// Building future-proof interfaces</div>
                      <div className="pl-4 text-pink-400">return (</div>
                      <div className="pl-8 text-white">&lt;<span className="text-brand-lime">CoaxiaSolution</span> /&gt;</div>
                      <div className="pl-4 text-pink-400">);</div>
                      <div className="text-blue-400">{'}'};</div>
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
                     <div className="text-brand-lime font-bold text-xl">99.9%</div>
                     <div className="text-xs text-gray-300">Uptime Guaranteed</div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* --- MOBILE DEVELOPMENT SECTION --- */}
      <section id="mobile-app-development" className="py-24 bg-gray-50 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             {/* Visual representation of Mobile */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="order-2 lg:order-1 relative flex justify-center"
            >
               <div className="absolute w-[400px] h-[400px] bg-brand-lime/20 rounded-full blur-3xl -z-10"></div>
               <div className="relative w-[300px] h-[600px] bg-brand-dark rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-8 bg-gray-900 z-20 rounded-b-2xl w-40 mx-auto"></div>
                  <div className="w-full h-full bg-gray-800 relative">
                     <img src="https://picsum.photos/id/160/600/1200" alt="App Screen" className="w-full h-full object-cover opacity-80" />
                     
                     <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                        <div className="flex items-center justify-between mb-4">
                            <div className="h-2 w-12 bg-white/50 rounded-full"></div>
                        </div>
                        <h4 className="text-white font-bold text-xl mb-2">Seamless UX</h4>
                        <button className="bg-brand-lime text-brand-dark px-4 py-2 rounded-full text-sm font-bold w-full">Get Started</button>
                     </div>
                  </div>
               </div>
               {/* Floating Badge */}
               <div className="absolute top-20 -right-4 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                  <Smartphone className="text-brand-blue" />
                  <div>
                      <p className="text-xs text-gray-500 uppercase font-bold">Cross-Platform</p>
                      <p className="font-bold text-brand-dark">React Native</p>
                  </div>
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="order-1 lg:order-2"
            >
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-6">
                  <Smartphone size={14} /> Mobile Apps
               </div>
               <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
                  Your business, right in <span className="text-brand-lime bg-brand-dark px-2">their pocket</span>.
               </h2>
               <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We develop native and cross-platform mobile applications that provide flawless user experiences. Whether it's iOS, Android, or both, we ensure high performance and intuitive navigation.
               </p>
               
               <ul className="space-y-4">
                  {[
                      "Native iOS (Swift) & Android (Kotlin)",
                      "Cross-platform (React Native, Flutter)",
                      "Offline functionality & Local storage",
                      "Push notifications & Real-time updates"
                  ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                              <Shield size={12} />
                          </div>
                          <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                  ))}
               </ul>
            </motion.div>
         </div>
      </section>

      {/* --- DEVOPS & DATA SECTION --- */}
      <section id="devops" className="py-24 bg-gray-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/50 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-6 border border-cyan-500/30">
                  <Cloud size={14} /> DevOps & Data
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Infrastructure as <span className="text-cyan-400">Scale</span>.
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                   We optimize your cloud environment for speed, security, and cost-efficiency. Our data engineering services turn raw data into actionable insights, fueling better decision making.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    {["AWS & Azure", "Kubernetes", "Data Pipelines", "Security Audits"].map((item, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-lg text-center hover:bg-white/10 transition-colors">
                            <span className="text-sm font-bold text-cyan-100">{item}</span>
                        </div>
                    ))}
                </div>
             </motion.div>
             
             <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
             >
                {/* Code Terminal Visual */}
                <div className="bg-black rounded-xl border border-gray-800 p-6 font-mono text-xs md:text-sm text-green-400 shadow-2xl">
                    <div className="mb-2 text-gray-500"># Deploying infrastructure...</div>
                    <div className="mb-2"><span className="text-blue-400">➜</span> terraform apply</div>
                    <div className="mb-1 text-white">aws_instance.server: Creating...</div>
                    <div className="mb-4 text-white">aws_s3_bucket.data: Creating...</div>
                    <div className="h-1 bg-gray-800 rounded-full w-full mb-4 overflow-hidden">
                        <div className="h-full bg-green-500 w-3/4 animate-pulse"></div>
                    </div>
                    <div><span className="text-blue-400">➜</span> Apply complete! Resources: 12 added, 0 changed.</div>
                </div>
             </motion.div>
          </div>
      </section>

      {/* --- MARKETING SECTION --- */}
      <section id="marketing" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 text-center mb-16">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-bold uppercase tracking-wider mb-6">
                <TrendingUp size={14} /> Marketing Services
             </div>
             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
                Growth driven by data.
             </h2>
             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We don't just build products; we help you launch and grow them. From SEO to ASO and user acquisition campaigns.
             </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
                 { title: "SEO Optimization", desc: "Rank higher on search engines and drive organic traffic." },
                 { title: "ASO (App Store)", desc: "Optimize your mobile app listings for maximum downloads." },
                 { title: "Analytics Setup", desc: "Track every user interaction to optimize conversion funnels." }
             ].map((card, i) => (
                 <div key={i} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all border border-gray-100 group">
                     <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-500 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                         <BarChart size={24} />
                     </div>
                     <h3 className="text-xl font-bold mb-3 text-brand-dark">{card.title}</h3>
                     <p className="text-gray-500">{card.desc}</p>
                 </div>
             ))}
          </div>
      </section>

      {/* --- AI & ML SECTION --- */}
      <section id="ai-machine-learning" className="py-24 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="order-2 lg:order-1 relative"
            >
               <div className="relative aspect-square bg-gray-900 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/3/3c/Shiki_Suijin.png')] opacity-20 mix-blend-overlay"></div>
                  {/* Neural Net visualization css */}
                   <div className="grid grid-cols-3 gap-8 relative z-10">
                      {[1,2,3,4,5,6,7,8,9].map(i => (
                          <motion.div 
                            key={i}
                            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                            className="w-4 h-4 bg-brand-lime rounded-full shadow-[0_0_15px_#ccff00]"
                          />
                      ))}
                   </div>
                   <div className="absolute inset-0 flex items-center justify-center">
                       <svg className="w-full h-full absolute top-0 left-0">
                           <line x1="33%" y1="33%" x2="50%" y2="50%" stroke="rgba(204, 255, 0, 0.3)" strokeWidth="2" />
                           <line x1="66%" y1="33%" x2="50%" y2="50%" stroke="rgba(204, 255, 0, 0.3)" strokeWidth="2" />
                           <line x1="33%" y1="66%" x2="50%" y2="50%" stroke="rgba(204, 255, 0, 0.3)" strokeWidth="2" />
                           <line x1="66%" y1="66%" x2="50%" y2="50%" stroke="rgba(204, 255, 0, 0.3)" strokeWidth="2" />
                       </svg>
                   </div>
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="order-1 lg:order-2"
            >
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6">
                  <Brain size={14} /> AI & Machine Learning
               </div>
               <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
                  Turn data into <span className="text-brand-blue">decisions</span>.
               </h2>
               <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We integrate advanced AI and Machine Learning models into your business processes. From predictive analytics to Large Language Models (LLMs) and computer vision, we help you automate and innovate.
               </p>
               
               <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                     <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600"><Cpu size={20}/></div>
                     <div>
                        <h4 className="font-bold text-gray-900">Predictive Analytics</h4>
                        <p className="text-sm text-gray-500">Forecast trends and optimize logistics routes.</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                     <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600"><Zap size={20}/></div>
                     <div>
                        <h4 className="font-bold text-gray-900">Generative AI</h4>
                        <p className="text-sm text-gray-500">Custom LLM integration for support and content.</p>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* --- QUALITY & SUPPORT SECTION --- */}
      <section id="quality" className="py-24 bg-gray-100 relative">
         <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-wider mb-6">
                <Bug size={14} /> Quality & Support
             </div>
             <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center max-w-2xl">
                We don't just build. We ensure it <span className="text-teal-600">works perfectly</span>.
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                 <div className="bg-white p-8 rounded-2xl shadow-sm">
                     <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
                     <p className="text-gray-600 mb-4">Manual and automated testing to ensure bug-free releases.</p>
                     <ul className="text-sm space-y-2 text-gray-500">
                         <li>• Automated Regression Testing</li>
                         <li>• Performance Load Testing</li>
                         <li>• Security Penetration Testing</li>
                     </ul>
                 </div>
                 <div className="bg-white p-8 rounded-2xl shadow-sm">
                     <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
                     <p className="text-gray-600 mb-4">Reliable maintenance SLAs to keep your business running.</p>
                     <ul className="text-sm space-y-2 text-gray-500">
                         <li>• Server Monitoring</li>
                         <li>• Incident Response</li>
                         <li>• Regular Updates & Patching</li>
                     </ul>
                 </div>
             </div>
         </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
                  <p className="text-gray-400">Our proven methodology ensures transparency and results.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                  {processSteps.map((step, idx) => (
                      <div key={idx} className="relative flex flex-col items-center text-center group">
                          {/* Connector Line (Hidden on mobile and last item) */}
                          {idx !== processSteps.length - 1 && (
                              <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-white/10 -z-10"></div>
                          )}
                          
                          <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mb-6 border-4 border-brand-dark group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(52,58,228,0.5)]">
                              <step.icon size={24} className="text-white" />
                          </div>
                          <h3 className="text-lg font-bold mb-2 text-brand-lime">{step.title}</h3>
                          <p className="text-xs text-gray-400 leading-relaxed max-w-[150px]">
                              {step.desc}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
      </section>
    </div>
  );
};

export default ServicesPage;