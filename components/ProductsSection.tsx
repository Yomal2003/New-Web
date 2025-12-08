import React, { useState, useEffect } from 'react';
import Section from './ui/Section';
import { 
  Package, 
  ArrowRight, 
  Settings, 
  CheckCircle, 
  Stethoscope, 
  GraduationCap, 
  Utensils, 
  Home, 
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  image: string;
  features: string[];
  path: string;
  color: string;
  status: 'available' | 'coming-soon';
}

const products: Product[] = [
  {
    id: 'gearmaster',
    name: 'GearMaster',
    description: 'All-in-one Garage Management System. Streamline repairs, inventory, and invoicing.',
    icon: Settings,
    image: 'https://images.unsplash.com/photo-1632823471565-1ec2a1ad4015?q=80&w=2069&auto=format&fit=crop',
    features: ['Automated Invoicing', 'Inventory Tracking'],
    path: '/products/gearmaster',
    color: 'bg-brand-lime',
    status: 'available'
  },
  {
    id: 'mediflow',
    name: 'MediFlow',
    description: 'Comprehensive Hospital & Clinic Management. Patient records, appointments, and billing in one place.',
    icon: Stethoscope,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
    features: ['EMR Integration', 'Appointment Scheduling'],
    path: '/products/mediflow',
    color: 'bg-blue-400',
    status: 'coming-soon'
  },
  {
    id: 'edutrack',
    name: 'EduTrack',
    description: 'Smart School Management System. Connects students, teachers, and parents seamlessly.',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop',
    features: ['Student Portal', 'Gradebook Management'],
    path: '/products/edutrack',
    color: 'bg-yellow-400',
    status: 'coming-soon'
  },
  {
    id: 'restomate',
    name: 'RestoMate',
    description: 'Modern POS & Restaurant Management. Table booking, kitchen display, and inventory.',
    icon: Utensils,
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop',
    features: ['Table Management', 'Kitchen Display System'],
    path: '/products/restomate',
    color: 'bg-orange-400',
    status: 'coming-soon'
  },
  {
    id: 'estatepro',
    name: 'EstatePro',
    description: 'Real Estate CRM & Property Management. Manage listings, leads, and tenants efficiently.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop',
    features: ['Lead Automation', 'Property Listings'],
    path: '/products/estatepro',
    color: 'bg-indigo-400',
    status: 'coming-soon'
  }
];

const ProductsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentProduct = products[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <Section id="products-teaser" className="bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-6">
             <Package size={14} /> Pre-built Solutions
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-medium text-gray-800 tracking-tight mb-5">
            Launch faster with <br/><span className="text-brand-blue">ready-made</span> software.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Why build from scratch when you can start with a proven foundation? Our suite of white-label products is designed for specific industry needs, fully customizable to your brand.
          </p>
          
          <div className="relative h-[200px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentProduct.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="flex gap-4 p-6 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all group h-full">
                    <div className={`w-14 h-14 ${currentProduct.color} rounded-xl flex items-center justify-center shrink-0 text-white shadow-lg`}>
                      <currentProduct.icon size={28} />
                    </div>
                    <div className="flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-brand-dark">{currentProduct.name}</h3>
                            {currentProduct.status === 'coming-soon' && (
                                <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-wider border border-gray-200 flex items-center gap-1">
                                    <Clock size={10} /> Coming Soon
                                </span>
                            )}
                        </div>
                        <p className="text-gray-500 leading-snug">{currentProduct.description}</p>
                      </div>
                      {currentProduct.status === 'available' ? (
                          <Link to={currentProduct.path} className="text-sm font-bold uppercase tracking-wider text-brand-blue flex items-center gap-2 mt-4 group-hover:gap-3 transition-all">
                              View Features <ArrowRight size={16} />
                          </Link>
                      ) : (
                          <div className="text-sm font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2 mt-4 cursor-not-allowed">
                              Notify Me <ArrowRight size={16} />
                          </div>
                      )}
                    </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex gap-2 mt-8">
            {products.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-brand-blue' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[400px] md:h-[500px] w-full">
           <div className="absolute inset-0 bg-brand-lime/20 rounded-[2.5rem] transform rotate-3 transition-transform duration-500"></div>
           
           <AnimatePresence mode="wait" custom={direction}>
             <motion.div
                key={currentProduct.id}
                custom={direction}
                variants={{
                  enter: (direction: number) => ({
                    x: direction > 0 ? 100 : -100,
                    opacity: 0,
                    scale: 0.95,
                    rotate: direction > 0 ? 5 : -5
                  }),
                  center: {
                    zIndex: 1,
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    rotate: 0
                  },
                  exit: (direction: number) => ({
                    zIndex: 0,
                    x: direction < 0 ? 100 : -100,
                    opacity: 0,
                    scale: 0.95,
                    rotate: direction < 0 ? -5 : 5
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "backOut" }}
                className="absolute inset-0"
             >
               <div className="relative bg-brand-dark rounded-[2rem] overflow-hidden shadow-2xl h-full w-full border-4 border-white/50">
                   {/* Browser Bar */}
                   <div className="absolute top-0 left-0 w-full bg-gray-900/90 backdrop-blur-md p-4 flex items-center gap-3 z-20 border-b border-white/10">
                       <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-500"></div>
                           <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                           <div className="w-3 h-3 rounded-full bg-green-500"></div>
                       </div>
                       <div className="flex-1 bg-black/40 rounded-lg px-3 py-1 text-xs text-gray-400 text-center font-mono border border-white/5">
                           {currentProduct.id}.app/dashboard
                       </div>
                   </div>

                   {/* Main Image */}
                   <div className="h-full w-full pt-14 relative group">
                       <img 
                        src={currentProduct.image} 
                        alt={`${currentProduct.name} Dashboard`} 
                        className={`w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ${currentProduct.status === 'coming-soon' ? 'grayscale-[0.5]' : ''}`} 
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80"></div>
                       
                       {/* Floating Features */}
                       <div className="absolute bottom-8 left-8 right-8 space-y-3">
                           {currentProduct.features.map((feature, idx) => (
                             <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + (idx * 0.1) }}
                                className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 w-fit"
                             >
                                 <CheckCircle className="text-brand-lime" size={20} />
                                 <span className="text-white font-bold text-sm md:text-base">{feature}</span>
                             </motion.div>
                           ))}
                       </div>
                       
                       {/* Coming Soon Overlay for Image */}
                       {currentProduct.status === 'coming-soon' && (
                           <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                               <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full">
                                   <span className="text-white font-bold tracking-widest uppercase">Coming Soon</span>
                                </div>
                           </div>
                       )}
                   </div>
               </div>
             </motion.div>
           </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};

export default ProductsSection;
