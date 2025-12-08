
import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
            
            <div className="md:col-span-1">
                <div className="text-3xl font-bold mb-6 flex items-center gap-2">
                    <span>∞</span> COAXIA
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Advanced software development for the modern world. Specializing in high-load systems, AI integration, and sleek mobile applications.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-brand-lime transition-colors"><Twitter size={20}/></a>
                    <a href="#" className="hover:text-brand-lime transition-colors"><Linkedin size={20}/></a>
                    <a href="#" className="hover:text-brand-lime transition-colors"><Facebook size={20}/></a>
                    <a href="#" className="hover:text-brand-lime transition-colors"><Instagram size={20}/></a>
                </div>
            </div>

            <div>
                <h4 className="font-bold text-lg mb-6 text-brand-lime">Company</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                    <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                    <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                    <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                    <li><Link to="/contact" className="hover:text-white transition-colors">Contacts</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-lg mb-6 text-brand-lime">Services</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                    <li><Link to="/services#web-dev" className="hover:text-white transition-colors">Web Development</Link></li>
                    <li><Link to="/services#mobile-app-development" className="hover:text-white transition-colors">Mobile App Development</Link></li>
                    <li><Link to="/services#ui-ux-design" className="hover:text-white transition-colors">UI/UX Design</Link></li>
                    <li><Link to="/services#ai-machine-learning" className="hover:text-white transition-colors">AI & Machine Learning</Link></li>
                </ul>
            </div>

             <div>
                <h4 className="font-bold text-lg mb-6 text-brand-lime">Contact</h4>
                <p className="text-sm text-gray-300 mb-2">hello@coaxia.com</p>
                <p className="text-sm text-gray-300">+1 (555) 123-4567</p>
                <Link to="/contact">
                    <button className="mt-6 border border-brand-lime text-brand-lime px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-lime hover:text-brand-dark transition-all">
                        Schedule a Call
                    </button>
                </Link>
            </div>
        </div>
        
        <div className="pt-8 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 Coaxia Agency. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;