
import React from 'react';
import Section from '../components/ui/Section';
import { motion } from 'framer-motion';
import { Wrench, Settings, BarChart3, Users, Calendar, ShieldCheck, ArrowRight, Laptop, Smartphone, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero */}
      <div className="pt-32 bg-brand-blue text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
         {/* <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue rounded-full blur-[100px] opacity-30"></div> */}
         
         <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            >
               Software that <span className="text-brand-lime">Works</span><br/> Out of the Box.
            </motion.h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
               Proven, white-label solutions for niche industries. Deploy in weeks, not months.
            </p>
            <div className="flex justify-center gap-4">
               <button onClick={() => document.getElementById('gearmaster')?.scrollIntoView({ behavior: 'smooth' })} className="bg-brand-lime text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-white transition-colors">
                  Explore GearMaster
               </button>
            </div>
         </div>
      </div>

      {/* GearMaster Section */}
      <section id="gearmaster" className="py-24 bg-white relative">
         <div className="max-w-7xl mx-auto px-4">
             {/* Product Header */}
             <div className="flex flex-col lg:flex-row gap-12 mb-20 items-center">
                 <div className="lg:w-1/2">
                    <div className="inline-block px-4 py-1.5 rounded-lg bg-orange-100 text-orange-700 font-bold uppercase tracking-wider text-xs mb-6">
                        Automotive
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        GearMaster <span className="text-gray-400">GMS</span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        The ultimate Garage Management System designed for modern auto repair shops. Manage inventory, appointments, and invoicing from a single dashboard.
                    </p>
                    <div className="flex gap-4">
                         <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                             <Laptop size={18} className="text-brand-blue" /> Web
                         </div>
                         <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                             <Smartphone size={18} className="text-brand-blue" /> Mobile App
                         </div>
                    </div>
                 </div>
                 <div className="lg:w-1/2 relative">
                    <div className="aspect-video bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-100 relative group">
                        <img src="https://picsum.photos/id/1070/800/500" alt="GearMaster Interface" className="w-full h-full object-cover opacity-90" />
                        <div className="absolute inset-0 flex items-center justify-center">
                             <motion.div 
                               whileHover={{ scale: 1.1 }}
                               className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer border border-white/50"
                             >
                                 <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                             </motion.div>
                        </div>
                    </div>
                 </div>
             </div>

             {/* Features Grid */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                     { icon: Calendar, title: "Smart Scheduling", desc: "Drag-and-drop appointment booking with automated SMS reminders for customers." },
                     { icon: Wrench, title: "Job Cards", desc: "Digital job cards track parts, labor, and mechanic notes in real-time." },
                     { icon: BarChart3, title: "Analytics", desc: "Visualize revenue, mechanic efficiency, and most common repairs." },
                     { icon: Users, title: "CRM", desc: "Customer vehicle history, loyalty tracking, and automated follow-ups." },
                     { icon: Settings, title: "Inventory", desc: "Real-time stock tracking with low-stock alerts and automatic reordering." },
                     { icon: ShieldCheck, title: "Invoicing", desc: "One-click invoice generation integrated with Xero and QuickBooks." }
                 ].map((feat, i) => (
                     <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-brand-blue/30 hover:shadow-lg transition-all group">
                         <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-dark mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                             <feat.icon size={24} />
                         </div>
                         <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                         <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                     </div>
                 ))}
             </div>
             
             {/* CTA */}
             <div className="mt-20 bg-brand-blue rounded-3xl p-12 text-center text-white relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                 <div className="relative z-10">
                     <h3 className="text-3xl font-bold mb-6">Ready to digitize your garage?</h3>
                     <p className="text-blue-100 mb-8 max-w-xl mx-auto">Get a free demo of GearMaster today and see how you can save 20+ hours a week.</p>
                     <Link to="/contact">
                        <button className="bg-brand-lime text-brand-dark px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-lg">
                            Request Demo
                        </button>
                     </Link>
                 </div>
             </div>
         </div>
      </section>
      
      {/* Other Products Placeholder */}
      <Section className="bg-gray-100">
          <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-400">More Coming Soon</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto opacity-60">
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center h-64">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
                  <h3 className="font-bold text-xl text-gray-500">LogiTrack</h3>
                  <p className="text-gray-400">Freight Management for Logistics</p>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center h-64">
                   <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
                  <h3 className="font-bold text-xl text-gray-500">MediFlow</h3>
                  <p className="text-gray-400">Patient Queue System</p>
              </div>
          </div>
      </Section>

    </div>
  );
};

export default ProductsPage;
