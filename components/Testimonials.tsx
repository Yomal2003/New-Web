
import React, { useState } from 'react';
import Section from './ui/Section';
import { Quote, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const feedbacks = [
  {
    id: 1,
    quote: "I was most impressed by the quality of the end product.",
    description: "While my ideas formed the basis for the work, they delivered a far more superior product than I imagined with greater flexibility and viability of features. They exceeded expectations so many times it got to the point I couldn't wait to see what they came up with next.",
    author: "Dan Brooks",
    role: "President",
    company: "Krytter",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png", // Placeholder for Krytter logo
    image: "https://picsum.photos/id/338/600/600"
  },
  {
    id: 2,
    quote: "Coaxia transformed our logistical operations with GearMaster.",
    description: "The automated invoicing alone saved us 20 hours a week. Truly a game changer. Their attention to detail in the UX phase meant our mechanics adopted the new system without any training required.",
    author: "Sarah Jenkins",
    role: "COO",
    company: "FastFleet",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    image: "https://picsum.photos/id/64/600/600"
  },
  {
    id: 3,
    quote: "Their team seamlessly integrated with ours.",
    description: "The AI predictive model they built helped us reduce fuel costs by 15% in just three months. Communication was transparent, and the delivery speed was impressive given the complexity.",
    author: "Michael Chen",
    role: "CTO",
    company: "TransGlobal",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
    image: "https://picsum.photos/id/107/600/600"
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % feedbacks.length);
  const prev = () => setCurrent((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);

  return (
    <Section id="testimonials" className="bg-white overflow-hidden">
      {/* Background Decorative Line (Blue Curve) - simplified SVG representation */}
      <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 pointer-events-none z-0 hidden lg:block">
         <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 600 C 100 800, 400 700, 600 400 C 700 200, 500 0, 800 -100" stroke="#2b30e4" strokeWidth="4" strokeLinecap="round" />
            <path d="M-200 400 C 0 600, 300 500, 500 200" stroke="#2b30e4" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
         </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
           <h2 className="text-4xl md:text-6xl font-normal text-gray-900 tracking-tight">Client feedback</h2>
        </div>

        <div className="relative">
             {/* Main Card */}
             <div className="bg-brand-lime clip-corner-card shadow-2xl relative overflow-hidden min-h-[500px] flex items-stretch">
                <AnimatePresence mode='wait'>
                  <motion.div 
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full grid grid-cols-1 md:grid-cols-12"
                  >
                     {/* Left: Image */}
                     <div className="md:col-span-5 relative bg-white h-[400px] md:h-auto">
                        <img 
                            src={feedbacks[current].image} 
                            alt={feedbacks[current].author} 
                            className="w-full h-full object-cover"
                        />
                        {/* Company Logo Box Overlay */}
                        <div className="absolute top-0 right-0 bg-white p-6 shadow-sm z-10 w-40 h-24 flex items-center justify-center">
                            <span className="font-bold text-xl text-gray-800 uppercase tracking-widest">{feedbacks[current].company}</span>
                        </div>
                     </div>

                     {/* Right: Content */}
                     <div className="md:col-span-7 p-8 md:p-16 flex flex-col justify-center relative">
                        {/* Decorative background sheets to give 'stack' effect */}
                        <div className="absolute -top-2 right-4 w-full h-full bg-brand-lightLime -z-10 rounded-tr-3xl transform rotate-1 opacity-50"></div>

                        <div className="mb-6">
                            <Quote size={32} className="text-brand-blue fill-current mb-4" />
                            <h3 className="text-2xl md:text-3xl font-medium leading-tight mb-6 text-gray-900">
                                {feedbacks[current].quote}
                            </h3>
                            <p className="text-gray-800 leading-relaxed text-sm md:text-base mb-10 opacity-80">
                                {feedbacks[current].description}
                            </p>

                            <div className="mb-10">
                                <p className="font-bold text-xl text-gray-900">{feedbacks[current].author}</p>
                                <p className="text-sm text-gray-700">{feedbacks[current].role}, {feedbacks[current].company}</p>
                            </div>

                            <Link to="/services">
                                <button className="bg-brand-blue text-white pl-6 pr-4 py-3 text-sm font-bold flex items-center gap-2 hover:bg-brand-dark transition-colors shadow-lg">
                                    See the project 
                                    {/* Stylized corner arrow icon */}
                                    <span className="ml-2 w-4 h-4 relative">
                                        <ArrowRight size={16} className="-rotate-45" />
                                    </span>
                                </button>
                            </Link>
                        </div>
                     </div>
                  </motion.div>
                </AnimatePresence>
             </div>
             
             {/* Navigation Arrows (Outside Card, Bottom Left/Center aligned relative to layout) */}
             <div className="flex gap-4 justify-center md:justify-start mt-8 md:ml-[42%]">
                  <button onClick={prev} className="w-12 h-12 border border-gray-200 hover:border-brand-blue text-brand-blue flex items-center justify-center transition-colors bg-white shadow-sm">
                      <ArrowLeft size={20} />
                  </button>
                  <button onClick={next} className="w-12 h-12 border border-gray-200 hover:border-brand-blue text-brand-blue flex items-center justify-center transition-colors bg-white shadow-sm">
                      <ArrowRight size={20} />
                  </button>
             </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;