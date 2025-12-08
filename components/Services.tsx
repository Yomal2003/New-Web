
import React, { useState } from 'react';
import { Plus, ArrowRight } from 'lucide-react';
import Section from './ui/Section';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { 
    label: "Consulting & strategy", 
    href: "/services#consulting",
    description: "We help you navigate the complex digital landscape. From legacy modernization to digital transformation strategies, our experts align technology with your business goals to unlock new revenue streams."
  },
  { 
    label: "Design", 
    href: "/services#ui-ux-design",
    description: "User-centric design that drives engagement. We create intuitive UI/UX prototypes, design systems, and pixel-perfect interfaces that align seamlessly with your brand identity."
  },
  { 
    label: "Development", 
    href: "/services#web-dev",
    description: "Scalable, high-performance web and mobile solutions. We build modern applications using the latest technologies like React, Node.js, and Native mobile frameworks to ensure speed and security."
  },
  { 
    label: "DevOps & data services", 
    href: "/services#devops",
    description: "Infrastructure as Code and data engineering. We optimize your cloud environment for speed, security, and cost-efficiency while turning raw data into actionable insights for better decision making."
  },
  { 
    label: "Marketing", 
    href: "/services#marketing",
    description: "Growth driven by data. From SEO optimization and content strategy to App Store Optimization (ASO), we help you launch and grow your digital products effectively."
  },
  { 
    label: "Quality & support", 
    href: "/services#quality",
    description: "We don't just build; we ensure perfection. Comprehensive manual and automated QA testing combined with 24/7 support SLAs to keep your business running smoothly without interruption."
  }
];

const Services: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="services" className="bg-[#f2f4f6]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 sticky top-32">
            Coaxia's services
          </h2>
        </div>
        <div className="lg:col-span-8">
          <div className="border-t border-gray-300">
            {services.map((service, index) => (
              <div key={index} className="border-b border-gray-300">
                <button 
                  onClick={() => toggle(index)}
                  className="w-full group py-6 flex items-center justify-between cursor-pointer transition-all hover:pl-4 text-left focus:outline-none"
                >
                  <span className={`text-xl md:text-2xl font-medium transition-colors duration-300 ${openIndex === index ? 'text-brand-dark' : 'text-brand-blue group-hover:text-gray-900'}`}>
                      {service.label}
                  </span>
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-brand-dark border-brand-dark text-brand-lime' : 'border-gray-300 text-brand-blue group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white'}`}>
                    <Plus className={`transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`} size={20} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pt-2 pr-4 md:pr-20 pl-0 md:pl-4">
                         <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            {service.description}
                         </p>
                         <Link to={service.href}>
                           <button className="bg-brand-blue text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-brand-lime hover:text-brand-dark transition-colors shadow-lg">
                              Explore Service <ArrowRight size={16} />
                           </button>
                         </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;