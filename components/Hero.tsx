import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-brand-blue text-white overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      {/* Background Graphic Elements - Abstract Curves */}
      <svg className="absolute top-0 right-0 w-[80vw] h-[90vh] pointer-events-none opacity-40" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          d="M 100 600 C 200 500, 400 500, 600 300 C 700 200, 750 100, 800 50" 
          stroke="#ccff00" 
          strokeWidth="4" 
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.circle 
          cx="700" 
          cy="150" 
          r="20" 
          fill="#ccff00"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: "spring" }}
        />
        <motion.path 
          d="M 0 400 Q 400 600 800 400" 
          stroke="#5D3FD3" 
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center min-h-[85vh]">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-8">
            Smart software <span className="text-brand-lime">for</span><br />
            travel, transport &<br />
            logistics
          </h1>
        </motion.div>

        {/* Floating Cards Container */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
          
          {/* Video / Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-brand-lime/50 transition-colors"
          >
            <Link to="/about" className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0 group cursor-pointer block">
              <img src="https://picsum.photos/id/4/200/200" alt="Delivery Center" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 p-2 rounded-full backdrop-blur-md">
                   <Play size={16} fill="white" className="text-white" />
                </div>
              </div>
            </Link>
            <div>
              <p className="text-xs text-gray-300 uppercase tracking-wider mb-1">Delivery Center</p>
              <p className="text-sm font-medium leading-tight mb-2">
                ..Colombo<br />Western-Province, Sri Lanka
              </p>
              <span className="text-xs text-brand-lime flex items-center gap-1">
                Since 2022
              </span>
            </div>
          </motion.div>

          {/* Estimation Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col justify-center bg-[#2a2a5e] p-6 rounded-xl border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-brand-lime blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <p className="text-lg font-medium mb-4 text-white">
              / Your partner for stunning mobile and web products, delivered in excellent quality and on time
            </p>
            <Link to="/contact">
              <button className="self-start bg-white text-brand-blue px-6 py-2.5 rounded-sm font-bold text-sm flex items-center gap-2 hover:bg-brand-lime hover:text-brand-dark transition-colors">
                Request An Estimation <ArrowUpRight size={16} />
              </button>
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;