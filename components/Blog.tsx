import React from 'react';
import Section from './ui/Section';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  return (
    <Section id="blog" className="bg-gray-50">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
           <h2 className="text-4xl md:text-5xl font-light mb-2">Want to know more?</h2>
           <Link to="/blog" className="text-4xl md:text-5xl font-medium text-brand-blue hover:text-brand-dark transition-colors underline decoration-2 underline-offset-8 flex items-center gap-2">
             Check our blog <ArrowUpRight size={32} />
           </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Article 1 - Dark Mode */}
        <Link to="/blog" className="bg-brand-lime rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
             <div className="bg-brand-dark h-64 relative overflow-hidden">
                <img src="https://picsum.photos/id/20/800/600" alt="Tech" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    Travel
                </div>
             </div>
             <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 leading-tight text-brand-dark">
                    Personalization in hospitality: How to make your guests' stay unforgettable
                </h3>
                <div className="flex items-center gap-4 text-xs text-brand-dark/70 font-medium uppercase tracking-wider mt-12">
                   <span className="flex items-center gap-1"><Calendar size={12}/> Dec 2, 2025</span>
                   <span className="flex items-center gap-1"><Clock size={12}/> 5 min read</span>
                </div>
             </div>
        </Link>

        {/* Article 2 - Light Mode */}
        <Link to="/blog" className="bg-white rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
             <div className="bg-blue-50 h-64 relative overflow-hidden flex items-center justify-center">
                 <img src="https://picsum.photos/id/60/800/600" alt="AI" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-blue-100 text-brand-blue text-xs font-bold px-3 py-1 rounded-full uppercase">
                    AI Tech
                </div>
             </div>
             <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 leading-tight text-gray-900">
                    AI in logistics: Optimizing routes and reducing carbon footprint
                </h3>
                <div className="flex items-center gap-4 text-gray-400 text-xs font-medium uppercase tracking-wider mt-12">
                   <span className="flex items-center gap-1"><Calendar size={12}/> Nov 28, 2025</span>
                   <span className="flex items-center gap-1"><Clock size={12}/> 8 min read</span>
                </div>
             </div>
        </Link>

      </div>
    </Section>
  );
};

export default Blog;