
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Play } from 'lucide-react';

const AboutSummary: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-20 md:mb-32 text-center md:text-left">
           <span className="text-5xl md:text-7xl lg:text-8xl font-normal text-gray-800 tracking-tight">We are</span>
           
           {/* Circular Video/Image Placeholder */}
           <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl flex-shrink-0 z-10 mx-auto md:mx-0">
               <img 
                 src="https://picsum.photos/id/3/400/400" 
                 alt="Office Life" 
                 className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
               />
               <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                   <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center pl-1">
                       <Play size={16} fill="white" className="text-white" />
                   </div>
               </div>
               {/* Decorative Ring */}
               <div className="absolute inset-0 border border-white/20 rounded-full"></div>
           </div>
           
           <span className="text-5xl md:text-7xl lg:text-8xl font-normal text-gray-800 tracking-tight">
             Coaxia
           </span>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-gray-100 pt-12">
            
            {/* Left Column: Mission & CTA */}
            <div className="lg:col-span-5 space-y-8">
                
                <h3 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight">
                    Coaxia's mission is to help our customers and teammates grow
                </h3>
                
                <Link to="/about">
                    <button className="bg-brand-blue text-white px-8 py-4 text-sm font-bold flex items-center gap-2 hover:bg-brand-lime hover:text-brand-dark transition-colors mt-4 shadow-lg group">
                        Learn more about us
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </Link>
            </div>

            {/* Middle Spacer (optional, using grid gap instead) */}
            <div className="lg:col-span-1"></div>

            {/* Right Column: Stats */}
            <div className="lg:col-span-6 flex flex-col md:flex-row justify-between gap-8 md:gap-0">
                {/* Stat 1 */}
                <div className="flex-1 md:border-l border-gray-200 md:pl-8">
                    <p className="text-sm text-gray-400 mb-2 font-medium">Team</p>
                    <div className="text-6xl md:text-7xl font-normal text-brand-blue mb-2 tracking-tighter">20+</div>
                </div>
                
                {/* Stat 2 */}
                <div className="flex-1 md:border-l border-gray-200 md:pl-8">
                    <p className="text-sm text-gray-400 mb-2 font-medium">Projects in the last 2 years</p>
                    <div className="text-6xl md:text-7xl font-normal text-brand-blue mb-2 tracking-tighter">37</div>
                </div>
                
                {/* Stat 3 */}
                <div className="flex-1 md:border-l border-gray-200 md:pl-8">
                    <p className="text-sm text-gray-400 mb-2 font-medium">Dev centers</p>
                    <div className="text-6xl md:text-7xl font-normal text-brand-blue mb-2 tracking-tighter">2</div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;