
import React, { useState } from 'react';
import Section from '../components/ui/Section';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Coffee, Laptop, Heart, GraduationCap, 
  MapPin, Clock, DollarSign, Search, Briefcase, Zap, Users 
} from 'lucide-react';

const jobs = [
    { 
      id: 1,
      title: "Senior React Developer", 
      type: "Remote", 
      location: "Global",
      dept: "Engineering",
      tags: ["React", "TypeScript", "Node.js"],
      salary: "$80k - $120k"
    },
    { 
      id: 2,
      title: "Lead UI/UX Designer", 
      type: "Hybrid", 
      location: "San Francisco, USA",
      dept: "Design",
      tags: ["Figma", "Design Systems", "Prototyping"],
      salary: "$90k - $130k"
    },
    { 
      id: 3,
      title: "AI/ML Engineer", 
      type: "Remote", 
      location: "Europe",
      dept: "Data Science",
      tags: ["Python", "TensorFlow", "PyTorch"],
      salary: "$100k - $150k"
    },
    { 
      id: 4,
      title: "DevOps Specialist", 
      type: "Remote", 
      location: "Global",
      dept: "Engineering",
      tags: ["AWS", "Docker", "Kubernetes"],
      salary: "$85k - $125k"
    },
    { 
      id: 5,
      title: "Product Manager", 
      type: "On-site", 
      location: "Kyiv, Ukraine",
      dept: "Product",
      tags: ["Agile", "Strategy", "Jira"],
      salary: "$70k - $100k"
    },
];

const perks = [
    { icon: Laptop, title: "Top-tier Equipment", desc: "Latest MacBook Pros and 4K monitors for everyone." },
    { icon: Coffee, title: "Remote-First", desc: "Work from anywhere in the world, or visit our hubs." },
    { icon: Heart, title: "Health & Wellness", desc: "Comprehensive insurance and gym memberships." },
    { icon: GraduationCap, title: "Learning Budget", desc: "$2000/yr for courses, conferences, and books." },
    { icon: DollarSign, title: "Performance Bonus", desc: "Quarterly bonuses based on company success." },
    { icon: Clock, title: "Flexible Hours", desc: "We focus on output, not hours logged." },
];

const hiringProcess = [
  { step: "01", title: "Apply", desc: "Send us your CV and portfolio." },
  { step: "02", title: "Screening", desc: "A quick chat with HR to align on values." },
  { step: "03", title: "Tech Task", desc: "Show us your skills in a practical challenge." },
  { step: "04", title: "Final Interview", desc: "Meet the team and leadership." },
  { step: "05", title: "Offer", desc: "Welcome to the Coaxia family!" },
];

const Careers: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const filteredJobs = filter === "All" ? jobs : jobs.filter(j => j.dept === filter);
  const departments = ["All", ...Array.from(new Set(jobs.map(j => j.dept)))];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* --- HERO SECTION --- */}
      <div className="bg-brand-blue text-white relative overflow-hidden py-32 px-4">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        {/* Abstract Background */}
        {/* <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue rounded-full blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-lime rounded-full blur-[120px] opacity-10"></div> */}
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
               <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse"></span>
               <span className="text-sm font-medium tracking-wide">We are hiring</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-[1.1]">
               Shape the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-brand-lightLime">Future</span><br/>
               of Software.
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
              Join a team of visionaries, engineers, and creators. We solve complex problems with elegant code and have fun doing it.
            </p>

            <button onClick={() => document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' })} className="bg-brand-lime text-brand-dark px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors">
               View Open Positions
            </button>
          </motion.div>
        </div>
      </div>

      {/* --- CULTURE / PERKS --- */}
      <Section className="py-24">
         <div className="max-w-7xl mx-auto">
             <div className="flex flex-col md:flex-row justify-between items-end mb-16">
               <div className="max-w-xl">
                  <h2 className="text-4xl font-bold mb-4 text-brand-dark">More than just a job.</h2>
                  <p className="text-gray-600 text-lg">
                    We believe that happy people write better code. That's why we provide an environment where you can thrive, learn, and grow.
                  </p>
               </div>
               <div className="hidden md:block">
                  <div className="flex items-center gap-2 text-brand-blue font-bold">
                     <Users size={20} />
                     <span>4.9/5 Employee Satisfaction</span>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {perks.map((perk, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-blue/30 transition-all group"
                  >
                     <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                        <perk.icon size={24} />
                     </div>
                     <h3 className="text-xl font-bold text-brand-dark mb-3">{perk.title}</h3>
                     <p className="text-gray-500 leading-relaxed text-sm">
                        {perk.desc}
                     </p>
                  </motion.div>
               ))}
            </div>
         </div>
      </Section>

      {/* --- HIRING PROCESS --- */}
      <section className="bg-brand-dark text-white py-24 overflow-hidden relative">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
               <h2 className="text-4xl font-bold mb-4">Our Hiring Process</h2>
               <p className="text-gray-400">Simple, transparent, and respectful of your time.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
               {hiringProcess.map((step, idx) => (
                  <div key={idx} className="relative group">
                     {idx !== hiringProcess.length - 1 && (
                        <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-white/10 -z-10 group-hover:bg-brand-lime/50 transition-colors"></div>
                     )}
                     <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-brand-dark border-2 border-brand-lime flex items-center justify-center text-xl font-bold text-brand-lime mb-6 shadow-[0_0_15px_rgba(204,255,0,0.3)] group-hover:scale-110 transition-transform bg-brand-dark z-10">
                           {step.step}
                        </div>
                        <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                        <p className="text-xs text-gray-400 max-w-[160px]">{step.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- JOB OPENINGS --- */}
      <Section id="positions" className="bg-gray-50 py-32">
         <div className="max-w-5xl mx-auto">
             <div className="text-center mb-12">
                 <h2 className="text-4xl font-bold mb-8">Open Positions</h2>
                 
                 {/* Filter Tabs */}
                 <div className="flex flex-wrap justify-center gap-2">
                    {departments.map((dept) => (
                       <button
                          key={dept}
                          onClick={() => setFilter(dept)}
                          className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                             filter === dept 
                             ? 'bg-brand-blue text-white shadow-lg' 
                             : 'bg-white text-gray-600 hover:bg-gray-200 border border-gray-200'
                          }`}
                       >
                          {dept}
                       </button>
                    ))}
                 </div>
             </div>

             <div className="space-y-4">
                 {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (
                       <motion.div 
                          key={job.id}
                          layout
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-brand-blue shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                       >
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                             <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                   <h3 className="text-2xl font-bold text-brand-dark group-hover:text-brand-blue transition-colors">
                                      {job.title}
                                   </h3>
                                   {job.id === 1 && (
                                      <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Hot</span>
                                   )}
                                </div>
                                
                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 mb-4">
                                   <span className="flex items-center gap-1.5">
                                      <Briefcase size={14} className="text-brand-lime" /> {job.dept}
                                   </span>
                                   <span className="flex items-center gap-1.5">
                                      <MapPin size={14} className="text-brand-lime" /> {job.location} ({job.type})
                                   </span>
                                   <span className="flex items-center gap-1.5">
                                      <DollarSign size={14} className="text-brand-lime" /> {job.salary}
                                   </span>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                   {job.tags.map(tag => (
                                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md group-hover:bg-blue-50 group-hover:text-brand-blue transition-colors">
                                         {tag}
                                      </span>
                                   ))}
                                </div>
                             </div>

                             <div className="flex items-center justify-between md:justify-end gap-4 md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100">
                                <div className="md:hidden text-sm font-bold text-brand-blue">Apply Now</div>
                                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-brand-blue group-hover:border-brand-blue transition-colors">
                                   <ArrowRight size={20} className="text-gray-400 group-hover:text-white" />
                                </div>
                             </div>
                          </div>
                       </motion.div>
                    ))
                 ) : (
                    <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300">
                        <Search className="mx-auto text-gray-300 mb-4" size={48} />
                        <h3 className="text-lg font-bold text-gray-600">No positions found</h3>
                        <p className="text-gray-400">Try changing the filter or check back later.</p>
                    </div>
                 )}
             </div>
         </div>
      </Section>

      {/* --- CTA --- */}
      <section className="bg-brand-blue text-white py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
              <Zap size={48} className="mx-auto mb-6 text-brand-lime animate-bounce" />
              <h2 className="text-4xl font-bold mb-6">Don't see a perfect fit?</h2>
              <p className="text-xl text-blue-100 mb-8">
                  We are always looking for talent. Send us your CV and we will keep you in mind for future openings.
              </p>
              <button className="bg-white text-brand-blue px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-brand-lime hover:text-brand-dark transition-colors shadow-lg">
                  Send Spontaneous Application
              </button>
          </div>
      </section>
    </div>
  );
};

export default Careers;