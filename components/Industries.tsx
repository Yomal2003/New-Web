
import React, { useState } from 'react';
import Section from './ui/Section';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const industries = [
  { id: 'travel', name: 'Travel', img: 'https://picsum.photos/id/1036/400/400' },
  { id: 'retail', name: 'Retail', img: 'https://picsum.photos/id/119/400/400' },
  { id: 'legal', name: 'Legal', img: 'https://picsum.photos/id/106/400/400' },
  { id: 'logistics', name: 'Logistics', img: 'https://picsum.photos/id/1055/400/400' },
  { id: 'finance', name: 'Finance', img: 'https://picsum.photos/id/160/400/400' },
  { id: 'healthcare', name: 'Healthcare', img: 'https://picsum.photos/id/96/400/400' },
];

const Industries: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((prev) => (prev + 1) % industries.length);
  const prev = () => setActiveIdx((prev) => (prev - 1 + industries.length) % industries.length);

  return (
    <Section id="industries">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light mb-6">Industries we serve</h2>
        <p className="text-gray-500 max-w-lg mx-auto text-xs uppercase tracking-widest">
           Coaxia applies industry-specific knowledge to each product design and development project.
        </p>
        
        <div className="flex justify-center gap-4 mt-8">
          <button onClick={prev} className="p-3 border border-gray-200 rounded-full hover:bg-brand-blue hover:text-white transition-colors">
            <ArrowLeft size={20} />
          </button>
          <button onClick={next} className="p-3 border border-gray-200 rounded-full hover:bg-brand-blue hover:text-white transition-colors">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* List */}
        <div className="space-y-2">
           <p className="text-xs text-gray-400 font-bold mb-4">/ INDUSTRIES</p>
           {industries.map((ind, idx) => (
             <div 
              key={ind.id}
              onClick={() => setActiveIdx(idx)}
              className={`
                cursor-pointer text-2xl md:text-3xl font-medium transition-all duration-300
                ${activeIdx === idx ? 'text-brand-blue pl-6 border-l-4 border-brand-blue' : 'text-gray-300 hover:text-gray-400'}
              `}
             >
               {ind.name}
             </div>
           ))}
        </div>

        {/* Image Display */}
        <div className="relative h-[400px] w-full flex items-center justify-center">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={activeIdx}
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-gray-100 shadow-2xl"
                >
                    <img 
                        src={industries[activeIdx].img} 
                        alt={industries[activeIdx].name} 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay"></div>
                </motion.div>
            </AnimatePresence>
            
            {/* Decorative circle behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gray-200 rounded-full -z-10"></div>
        </div>
      </div>
    </Section>
  );
};

export default Industries;