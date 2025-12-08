
import React, { useState } from 'react';
import Section from '../components/ui/Section';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, Search, Tag, ChevronRight, Hash, Mail } from 'lucide-react';

const featuredPost = {
  id: 0,
  title: "The Rise of Generative AI in Enterprise Software",
  excerpt: "How Large Language Models are reshaping the way we build, deploy, and interact with business applications. We dive deep into the technical challenges and ethical considerations.",
  date: "Jan 10, 2025",
  author: "Alex Morgan",
  readTime: "8 min read",
  category: "Artificial Intelligence",
  img: "https://picsum.photos/id/20/1200/800",
  tags: ["LLM", "GenAI", "Enterprise"]
};

const posts = [
  { 
    id: 1, 
    title: "Optimizing React Performance for High-Scale Apps", 
    excerpt: "Deep dive into memoization, server components, and efficient state management patterns.",
    date: "Dec 12, 2024", 
    author: "Elena Volkov", 
    readTime: "12 min",
    category: "Development",
    img: "https://picsum.photos/id/1/800/600",
    tags: ["React", "Performance"]
  },
  { 
    id: 2, 
    title: "The Psychology of Color in UX Design", 
    excerpt: "Why brand colors matter more than you think in conversion optimization.",
    date: "Nov 30, 2024", 
    author: "Marcus Johnson", 
    readTime: "6 min",
    category: "Design",
    img: "https://picsum.photos/id/2/800/600",
    tags: ["UX/UI", "Psychology"]
  },
  { 
    id: 3, 
    title: "Kubernetes vs Docker Swarm: A 2025 Perspective", 
    excerpt: "Choosing the right orchestration tool for your microservices architecture.",
    date: "Nov 15, 2024", 
    author: "Sarah Chen", 
    readTime: "15 min",
    category: "DevOps",
    img: "https://picsum.photos/id/3/800/600",
    tags: ["K8s", "Docker", "Cloud"]
  },
  { 
    id: 4, 
    title: "Implementing Zero Trust Architecture", 
    excerpt: "A practical guide to securing your logistics platform infrastructure.",
    date: "Oct 28, 2024", 
    author: "Mike Ross", 
    readTime: "10 min",
    category: "Security",
    img: "https://picsum.photos/id/4/800/600",
    tags: ["Cybersecurity", "Network"]
  },
  { 
    id: 5, 
    title: "Sustainable Tech: Reducing Carbon Footprint", 
    excerpt: "How green coding practices can lower server costs and help the planet.",
    date: "Oct 10, 2024", 
    author: "Donna Paulsen", 
    readTime: "5 min",
    category: "General",
    img: "https://picsum.photos/id/5/800/600",
    tags: ["GreenTech", "ESG"]
  },
  { 
    id: 6, 
    title: "Mobile-First Design for Travel Apps", 
    excerpt: "Key principles for designing booking experiences on smaller screens.",
    date: "Sep 22, 2024", 
    author: "Marcus Johnson", 
    readTime: "7 min",
    category: "Design",
    img: "https://picsum.photos/id/6/800/600",
    tags: ["Mobile", "Travel"]
  },
];

const categories = ["All", "Development", "Design", "Artificial Intelligence", "DevOps", "Security"];
const trendingTags = ["React", "AI", "Cloud", "UX", "Startup", "TechLead"];

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      
      {/* --- HERO / FEATURED SECTION --- */}
      <div className=" pt-20 bg-brand-blue text-white relative overflow-hidden pb-12">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        {/* <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/30 rounded-full blur-[100px] -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-lime/10 rounded-full blur-[80px] -ml-20 -mb-20"></div>
 */}
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                      Insights <span className="text-brand-lime">&</span><br/>Perspectives
                  </h1>
                  <p className="text-xl text-blue-100 max-w-xl">
                      Exploring the frontiers of software engineering, design, and digital transformation.
                  </p>
              </div>
           </div>

           {/* Featured Post Card */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="relative rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-white/5 border border-white/10 hover:border-brand-lime/30 transition-colors group cursor-pointer"
           >
              <div className="relative h-[400px] lg:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={featuredPost.img} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute top-6 left-6 z-20">
                      <span className="bg-brand-lime text-brand-dark px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm">
                          Featured
                      </span>
                  </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-xs font-bold text-blue-100 uppercase tracking-wider mb-4">
                      <span className="text-brand-lime">{featuredPost.category}</span>
                      <span>•</span>
                      <span>{featuredPost.date}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight group-hover:text-brand-lime transition-colors">
                      {featuredPost.title}
                  </h2>
                  <p className="text-blue-100 text-lg leading-relaxed mb-8">
                      {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
                              <img src={`https://ui-avatars.com/api/?name=${featuredPost.author}&background=random`} alt="Author" />
                          </div>
                          <div>
                              <p className="text-sm font-bold text-white">{featuredPost.author}</p>
                              <p className="text-xs text-blue-100">{featuredPost.readTime}</p>
                          </div>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-lime group-hover:border-brand-lime group-hover:text-brand-dark transition-all">
                          <ArrowRight size={18} />
                      </div>
                  </div>
              </div>
           </motion.div>
        </div>
      </div>

      {/* --- FILTER & CONTENT SECTION --- */}
      <div className="bg-gray-50 min-h-screen py-16 px-4">
         <div className="max-w-7xl mx-auto">
            
            {/* Toolbar */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 sticky top-24 z-30 bg-gray-50/95 backdrop-blur-sm py-4">
                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${
                                activeCategory === cat 
                                ? 'bg-brand-dark text-white border-brand-dark' 
                                : 'bg-white text-gray-600 border-gray-200 hover:border-brand-blue hover:text-brand-blue'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Search */}
                <div className="relative w-full lg:w-72 group">
                    <input 
                        type="text" 
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-full pl-12 pr-4 py-2.5 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all shadow-sm"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-blue" size={18} />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Main Content */}
                <div className="lg:col-span-8">
                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {filteredPosts.map((post) => (
                                <motion.div 
                                    key={post.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer flex flex-col h-full"
                                >
                                    <div className="h-48 overflow-hidden relative">
                                        <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            <span className="bg-white/90 backdrop-blur-sm text-brand-dark px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3 font-medium">
                                            <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                                            <span className="flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-brand-dark group-hover:text-brand-blue transition-colors leading-tight line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm line-clamp-3 mb-6 flex-1">
                                            {post.excerpt}
                                        </p>
                                        
                                        <div className="border-t border-gray-100 pt-4 flex items-center justify-between mt-auto">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
                                                    <img src={`https://ui-avatars.com/api/?name=${post.author}&background=random`} alt={post.author} />
                                                </div>
                                                <span className="text-xs font-bold text-gray-700">{post.author}</span>
                                            </div>
                                            <span className="text-brand-blue text-xs font-bold uppercase flex items-center gap-1 group-hover:gap-2 transition-all">
                                                Read <ChevronRight size={12} />
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                             <h3 className="text-xl font-bold text-gray-400 mb-2">No articles found</h3>
                             <p className="text-gray-400">Try adjusting your search or category.</p>
                        </div>
                    )}
                    
                    {filteredPosts.length > 0 && (
                        <div className="mt-16 text-center">
                            <button className="bg-white border border-gray-200 text-gray-600 px-8 py-3 rounded-full font-bold hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all shadow-sm">
                                Load More Articles
                            </button>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-12">
                    
                    {/* Newsletter Widget */}
                    <div className="bg-brand-blue text-white p-8 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime rounded-full blur-[50px] opacity-20"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                                <Mail className="text-brand-lime" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Tech insights, delivered weekly.</h3>
                            <p className="text-blue-200 text-sm mb-6">
                                Join 5,000+ developers and leaders. No spam, just high-quality content.
                            </p>
                            <div className="space-y-3">
                                <input 
                                    type="email" 
                                    placeholder="your@email.com" 
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-sm placeholder-blue-200/50 focus:outline-none focus:border-brand-lime transition-colors text-white"
                                />
                                <button className="w-full bg-brand-lime text-brand-dark font-bold py-3 rounded-lg hover:bg-white transition-colors">
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-[10px] text-blue-200 mt-4 opacity-70">
                                By subscribing you agree to our Privacy Policy.
                            </p>
                        </div>
                    </div>

                    {/* Trending Tags */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6 flex items-center gap-2">
                            <Hash size={14} /> Trending Topics
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {trendingTags.map(tag => (
                                <span key={tag} className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-md hover:border-brand-blue hover:text-brand-blue cursor-pointer transition-colors">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">
                            Must Read
                        </h4>
                        <ul className="space-y-4">
                            {[1, 2, 3].map(i => (
                                <li key={i} className="group cursor-pointer">
                                    <span className="text-xs text-brand-blue font-bold mb-1 block">Engineering</span>
                                    <h5 className="font-bold text-gray-800 text-sm group-hover:text-brand-blue transition-colors">
                                        Why we migrated from REST to GraphQL
                                    </h5>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
         </div>
      </div>
    </div>
  );
};

export default BlogPage;
