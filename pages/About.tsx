
import React from 'react';
import Section from '../components/ui/Section';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Globe, Award, Briefcase, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: "Year of Started", value: 2022, suffix: "" },
  { label: "Projects Delivered", value: 37, suffix: "+" },
  { label: "Global Team", value: 20, suffix: "" },
  { label: "Client Retention", value: 99, suffix: "%" },
];

const timeline = [
  { year: "2010", title: "Inception", desc: "Founded in a small garage in Ivano-Frankivsk with a vision to simplify complex logistics software." },
  { year: "2013", title: "First Enterprise Client", desc: "Secured our first Fortune 500 partner in the travel sector, expanding our team to 20 engineers." },
  { year: "2016", title: "Global Expansion", desc: "Opened our US sales office in San Francisco and started offering dedicated AI consultancy." },
  { year: "2020", title: "Remote-First Shift", desc: "Adapted to the global landscape, becoming a fully distributed team while maintaining 100% delivery capability." },
  { year: "2024", title: "AI Innovation Hub", desc: "Launched our proprietary AI R&D center to support next-gen machine learning projects." },
];

const team = [
  { name: "Alex Morgan", role: "CEO & Founder", img: "https://picsum.photos/id/100/400/400", bio: "Visionary leader with 15 years in distributed systems." },
  { name: "Sarah Chen", role: "CTO", img: "https://picsum.photos/id/101/400/400", bio: "Ex-Google architect passionate about scalable AI infrastructure." },
  { name: "Marcus Johnson", role: "Head of Design", img: "https://picsum.photos/id/102/400/400", bio: "Award-winning designer focused on human-centric interfaces." },
  { name: "Elena Volkov", role: "VP of Engineering", img: "https://picsum.photos/id/103/400/400", bio: "Expert in building high-performance engineering cultures." },
];

const galleryImages = [
  "https://picsum.photos/id/1/600/400",
  "https://picsum.photos/id/2/400/600",
  "https://picsum.photos/id/3/600/400",
  "https://picsum.photos/id/4/400/400",
  "https://picsum.photos/id/5/600/400",
  "https://picsum.photos/id/6/400/600",
];

const About: React.FC = () => {
  return (
    <div className=" min-h-screen bg-white">
      
      {/* --- HERO SECTION --- */}
      <div className="pt-20 bg-brand-blue text-white pt-32 pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        {/* Animated Background Elements */}
        {/* <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-lime rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-lime rounded-full blur-[100px] opacity-10"></div> */}
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-8"
          >
            Architects of the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-brand-lime">Digital Future</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We are more than just developers. We are strategic partners who turn complex business challenges into elegant, scalable software solutions.
          </motion.p>
        </div>
      </div>

      {/* --- STATS SECTION --- */}
      <div className="relative -mt-16 z-20 px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {stats.map((stat, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="text-center relative"
               >
                 {idx !== stats.length - 1 && (
                   <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gray-200"></div>
                 )}
                 <h3 className="text-4xl md:text-5xl font-bold text-brand-blue mb-2 font-mono">
                   {stat.value}{stat.suffix}
                 </h3>
                 <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </div>

      {/* --- MISSION & VISION --- */}
      <Section className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
                <div>
                   <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                     <Target className="text-brand-lime" /> Our Mission
                   </h2>
                   <p className="text-gray-600 leading-relaxed text-lg">
                     To empower businesses with technology that not only solves today's problems but anticipates tomorrow's opportunities. We believe in code that is clean, scalable, and impactful.
                   </p>
                </div>
                <div>
                   <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                     <Globe className="text-brand-lime" /> Our Vision
                   </h2>
                   <p className="text-gray-600 leading-relaxed text-lg">
                     A world where digital transformation is seamless, accessible, and sustainable. We strive to set the global standard for software engineering excellence in the logistics and travel sectors.
                   </p>
                </div>
            </div>
            <div className="relative">
                <div className="absolute inset-0 bg-brand-blue transform rotate-3 rounded-2xl opacity-10"></div>
                <img 
                  src="https://picsum.photos/id/60/800/800" 
                  alt="Vision" 
                  className="relative rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-500" 
                />
            </div>
        </div>
      </Section>

      {/* --- TIMELINE SECTION --- */}
      <div className="bg-gray-50 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-gray-500">From a garage startup to a global powerhouse.</p>
           </div>

           <div className="relative">
              {/* Central Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>

              <div className="space-y-12">
                 {timeline.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                       <div className="w-full md:w-1/2"></div>
                       
                       {/* Dot */}
                       <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-brand-blue rounded-full border-4 border-white shadow-md transform -translate-x-1/2 z-10"></div>
                       
                       <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                             <span className="text-5xl font-bold text-gray-100 absolute -top-4 -z-10 select-none">
                                {item.year}
                             </span>
                             <h3 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h3>
                             <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </div>

            {/* --- CULTURE GALLERY --- */}
      <div className="bg-brand-dark text-white py-24 overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 mb-12 flex justify-between items-end">
             <div>
                <h2 className="text-4xl font-bold mb-2">Life at Coaxia</h2>
                <p className="text-gray-400">Work hard, play hard, create impact.</p>
             </div>
             <Link to="/careers" className="hidden md:flex items-center gap-2 text-brand-lime hover:text-white transition-colors">
                Join our team <ArrowRight size={20} />
             </Link>
         </div>
         
         {/* Masonry-style Grid */}
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
             <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
                 <img src={galleryImages[0]} alt="Office" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
             </div>
             <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
                 <img src={galleryImages[1]} alt="Meeting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             </div>
             <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden group">
                 <img src={galleryImages[2]} alt="Party" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             </div>
             <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
                 <img src={galleryImages[3]} alt="Coding" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             </div>
             <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden group">
                 <img src={galleryImages[5]} alt="Team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             </div>
         </div>
         
         <div className="mt-8 text-center md:hidden">
            <Link to="/careers" className="text-brand-lime font-bold">View Open Positions</Link>
         </div>
      </div>
    </div>
  );
};

export default About;
