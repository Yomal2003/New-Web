
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Monitor, Smartphone, Palette, Brain, User, Briefcase, FileText, Send, Package, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const navConfig = [
  { title: "Services", path: "/services", dropdown: [
      { title: "Web Development", path: "/services#web-dev", icon: Monitor },
      { title: "Mobile Apps", path: "/services#mobile-app-development", icon: Smartphone },
      { title: "UI/UX Design", path: "/services#ui-ux-design", icon: Palette },
      { title: "AI & ML", path: "/services#ai-machine-learning", icon: Brain },
    ]
  },
  { title: "Products", path: "/products", dropdown: [
      { title: "GearMaster", path: "/products#gearmaster", icon: Package },
      { title: "Custom Solutions", path: "/services", icon: Brain },
    ]
  },
  { title: "Company", path: "/about", dropdown: [
      { title: "About Us", path: "/about", icon: User },
      { title: "Careers", path: "/careers", icon: Briefcase },
    ]
  },
  { title: "Insights", path: "/blog", dropdown: null }
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <div className="fixed top-3 left-0 right-0 z-[60] flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="pointer-events-auto relative bg-[#e0e5ec]/80 backdrop-blur-xl border border-white/40 shadow-xl rounded-full px-2 py-2 flex items-center justify-between gap-2 max-w-5xl w-full"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 pl-4 pr-2 group shrink-0">
             <div className="w-8 h-8 bg-brand-lime rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:bg-brand-blue group-hover:text-brand-dark transition-colors">
               <img src="https://i.postimg.cc/8Pt2WmyL/Home.png" alt="Coaxia Logo" className="w-5 h-5"/>
             </div>
             <span className="font-bold text-slate-800 text-lg tracking-tight hidden sm:block">Coaxia</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center bg-white/40 rounded-full p-1 border border-white/20 shadow-inner">
            {navConfig.map((item) => {
              const isActive = location.pathname.startsWith(item.path);
              const isHovered = hoveredNav === item.title;

              return (
                <div 
                  key={item.title} 
                  className="relative group"
                  onMouseEnter={() => setHoveredNav(item.title)}
                  onMouseLeave={() => setHoveredNav(null)}
                >
                  <Link
                    to={item.path}
                    className={`
                      relative z-10 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 block whitespace-nowrap flex items-center gap-1
                      ${isActive ? 'text-brand-dark' : 'text-slate-600 hover:text-brand-dark'}
                    `}
                  >
                    {item.title}
                    {item.dropdown && <ChevronDown size={12} className={`opacity-50 transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />}
                  </Link>
                  
                  {/* Active Background Sliding Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white rounded-full shadow-sm border border-black/5"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  {/* Hover Background */}
                  {isHovered && !isActive && (
                     <motion.div
                      layoutId="nav-hover"
                      className="absolute inset-0 bg-white/50 rounded-full"
                      transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                    />
                  )}

                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                     {item.dropdown && isHovered && (
                       <motion.div
                         initial={{ opacity: 0, y: 10, scale: 0.95 }}
                         animate={{ opacity: 1, y: 0, scale: 1 }}
                         exit={{ opacity: 0, y: 10, scale: 0.95 }}
                         transition={{ duration: 0.2 }}
                         className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[260px]"
                       >
                          <div className="bg-white/90 backdrop-blur-xl border border-white/50 rounded-2xl p-2 shadow-2xl flex flex-col gap-1 overflow-hidden">
                             {item.dropdown.map(sub => (
                               <Link key={sub.title} to={sub.path} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 transition-colors group/item">
                                  <div className="p-2 bg-slate-50 rounded-lg text-slate-500 group-hover/item:text-brand-blue group-hover/item:bg-blue-50 transition-colors">
                                     <sub.icon size={16} />
                                  </div>
                                  <span className="font-semibold text-sm text-slate-700">{sub.title}</span>
                               </Link>
                             ))}
                          </div>
                       </motion.div>
                     )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-2 shrink-0 pr-1">
             <Link to="/contact" className="hidden sm:block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-brand-lime hover:bg-brand-blue text-brand-dark hover:text-white pl-6 pr-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-brand-lime/20"
                >
                  Contact <Send size={14} className="-mt-0.5" />
                </motion.button>
             </Link>
             
             {/* Mobile Menu Toggle */}
             <button 
               className="lg:hidden w-11 h-11 rounded-full bg-white/50 border border-white/20 flex items-center justify-center text-slate-800 hover:bg-white transition-colors"
               onClick={() => setMobileMenuOpen(true)}
             >
                <Menu size={20} />
             </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-[55] bg-brand-dark/95 backdrop-blur-xl flex flex-col pt-32 px-6 pb-6"
           >
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-8 right-8 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white"
              >
                 <X size={24} />
              </button>

              <div className="flex-1 overflow-y-auto space-y-8">
                 {navConfig.map((item, i) => (
                    <motion.div 
                      key={item.title} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                       {item.dropdown ? (
                          <div className="space-y-4">
                             <div className="text-brand-lime/70 text-xs font-bold uppercase tracking-widest mb-2 border-b border-white/10 pb-2">{item.title}</div>
                             <div className="grid gap-2">
                                {item.dropdown.map(sub => (
                                   <Link 
                                     key={sub.title} 
                                     to={sub.path} 
                                     className="flex items-center gap-3 p-3 bg-white/5 rounded-xl text-white hover:bg-white/10 transition-colors"
                                   >
                                      <sub.icon size={18} className="text-brand-lime"/>
                                      <span className="font-medium text-lg">{sub.title}</span>
                                   </Link>
                                ))}
                             </div>
                          </div>
                       ) : (
                          <Link 
                             to={item.path}
                             className="block text-3xl font-bold text-white hover:text-brand-lime transition-colors"
                          >
                             {item.title}
                          </Link>
                       )}
                    </motion.div>
                 ))}
              </div>
              
              <Link to="/contact" className="mt-8 bg-brand-lime text-brand-dark py-4 rounded-xl font-bold text-lg text-center">
                 Start a Project
              </Link>
           </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;