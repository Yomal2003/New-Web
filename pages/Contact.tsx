
import React from 'react';
import Section from '../components/ui/Section';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, ArrowRight, CheckCircle2, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero / Header */}
      <div className="bg-brand-blue text-white relative overflow-hidden py-24 lg:py-32 px-4">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        {/* Background effects */}
        {/* <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-lime rounded-full blur-[100px] opacity-10"></div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>< }/div>*/}

        <div className="max-w-7xl mx-auto relative z-10 text-center">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
             >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-brand-lime text-xs font-bold uppercase tracking-widest mb-6">
                    <div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse"></div>
                    Open for new partnerships
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                    Let's build something <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-brand-lightLime">extraordinary</span>.
                </h1>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                    Whether you have a groundbreaking idea or need to scale your existing platform, our team is ready to engineer your success.
                </p>
             </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-20 pb-24">
         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
            
            {/* Left Side - Info */}
            <div className="lg:w-5/12 bg-brand-blue text-white p-10 md:p-16 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-lime/20 rounded-full blur-3xl -ml-16 -mb-16"></div>
                
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                    <p className="text-blue-200 mb-10 text-sm">Fill out the form or reach out to us directly.</p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                <Mail className="text-brand-lime" size={20} />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-1">General Inquiries</p>
                                <a href="mailto:hello@coaxia.tech" className="text-lg font-medium hover:text-brand-lime transition-colors">hello@coaxia.tech</a>
                            </div>
                        </div>

                         <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                <MessageSquare className="text-brand-lime" size={20} />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-1">Careers</p>
                                <a href="mailto:careers@coaxia.tech" className="text-lg font-medium hover:text-brand-lime transition-colors">careers@coaxia.tech</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                <MapPin className="text-brand-lime" size={20} />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-1">Headquarters</p>
                                <p className="text-lg font-medium leading-snug">
                                    ... Colombo<br/>
                                    Western Province, Sri Lanka
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mt-12">
                     <p className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-4">Global Presence</p>
                     <div className="flex gap-4">
                        <div className="bg-brand-dark/30 p-3 rounded-lg backdrop-blur-sm border border-white/10 flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <Globe size={12} className="text-brand-lime" />
                                <span className="text-xs font-bold">LK</span>
                            </div>
                            <span className="text-xs text-blue-200"></span>
                        </div>
                         <div className="bg-brand-dark/30 p-3 rounded-lg backdrop-blur-sm border border-white/10 flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <Globe size={12} className="text-brand-lime" />
                                <span className="text-xs font-bold">USA</span>
                            </div>
                            <span className="text-xs text-blue-200"></span>
                        </div>
                     </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:w-7/12 p-10 md:p-16 bg-white relative">
                 <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative group">
                            <input 
                                type="text" 
                                id="firstName" 
                                className="peer w-full border-b border-gray-300 py-2 placeholder-transparent focus:border-brand-blue focus:outline-none transition-colors bg-transparent"
                                placeholder="First Name"
                            />
                            <label htmlFor="firstName" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-brand-blue peer-focus:text-xs">
                                First Name
                            </label>
                        </div>
                         <div className="relative group">
                            <input 
                                type="text" 
                                id="lastName" 
                                className="peer w-full border-b border-gray-300 py-2 placeholder-transparent focus:border-brand-blue focus:outline-none transition-colors bg-transparent"
                                placeholder="Last Name"
                            />
                            <label htmlFor="lastName" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-brand-blue peer-focus:text-xs">
                                Last Name
                            </label>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="relative group">
                            <input 
                                type="email" 
                                id="email" 
                                className="peer w-full border-b border-gray-300 py-2 placeholder-transparent focus:border-brand-blue focus:outline-none transition-colors bg-transparent"
                                placeholder="Email"
                            />
                            <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-brand-blue peer-focus:text-xs">
                                Email Address
                            </label>
                        </div>
                         <div className="relative group">
                            <input 
                                type="text" 
                                id="phone" 
                                className="peer w-full border-b border-gray-300 py-2 placeholder-transparent focus:border-brand-blue focus:outline-none transition-colors bg-transparent"
                                placeholder="Phone"
                            />
                            <label htmlFor="phone" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-brand-blue peer-focus:text-xs">
                                Phone (Optional)
                            </label>
                        </div>
                    </div>

                    <div className="space-y-4 pt-4">
                        <span className="block text-sm font-bold text-gray-700">I'm interested in...</span>
                        <div className="flex flex-wrap gap-3">
                            {["Web Development", "Mobile App", "UI/UX Design", "AI Solutions", "Consulting", "Other"].map((item) => (
                                <label key={item} className="cursor-pointer group">
                                    <input type="checkbox" className="hidden peer" />
                                    <span className="inline-block px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 peer-checked:bg-brand-dark peer-checked:text-white peer-checked:border-brand-dark hover:border-brand-blue transition-all select-none">
                                        {item}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="relative group pt-4">
                         <textarea 
                             id="message" 
                             rows={4}
                             className="peer w-full border-b border-gray-300 py-2 placeholder-transparent focus:border-brand-blue focus:outline-none transition-colors resize-none bg-transparent"
                             placeholder="Message"
                         ></textarea>
                         <label htmlFor="message" className="absolute left-0 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-brand-blue peer-focus:text-xs">
                             Tell us about your project
                         </label>
                    </div>

                    <div className="pt-8">
                        <button className="bg-brand-blue hover:border-brand-dark text-white px-8 py-4 text-sm font-bold flex items-center gap-2 hover:bg-brand-lime hover:text-brand-dark transition-colors mt-4 shadow-lg group">
                            Send Request 
                            <div className="h-full border-l border-white/20  pl-4">
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </button>
                    </div>
                 </form>
            </div>
         </div>
      </div>
      
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 pb-24">
          <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="grid gap-6">
              {[
                  { q: "What is your typical project timeline?", a: "Timelines vary by scope, but a typical MVP takes 3-4 months. We work in 2-week sprints to ensure continuous delivery." },
                  { q: "Do you sign NDAs?", a: "Absolutely. We respect your intellectual property and sign a Non-Disclosure Agreement before any detailed discussions." },
                  { q: "What is your pricing model?", a: "We offer both Time & Material (T&M) for flexible scope projects and Fixed Price for well-defined specifications." }
              ].map((faq, i) => (
                  <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-brand-blue/30 transition-colors">
                      <h4 className="font-bold text-lg mb-2 text-brand-dark">{faq.q}</h4>
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
              ))}
          </div>
      </div>
      
      <div className="py-12 bg-[#f8f9fa]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">Get in touch directly</h2>
            
            <div className="bg-[#e4e8ec] px-10 md:px-16 pt-10 pb-0 relative rounded-2xl overflow-hidden max-w-4xl mx-auto">
                 <div className="flex flex-col md:flex-row items-end gap-6 relative z-10">
                     <div className="flex-1 pb-10 md:pb-16">
                         <h3 className="text-xl font-medium text-gray-900">Thilini.B</h3>
                         <p className="text-gray-500 text-sm mb-6">Client engagement manager</p>
                         
                         <a href="mailto:sales@coaxia.tech" className="block text-2xl md:text-3xl text-brand-blue font-normal mb-4 hover:underline">
                             sales@coaxia.tech
                         </a>
                         
                         <div className="flex flex-col xl:flex-row gap-2 xl:gap-6 text-gray-600 text-sm">
                             <span className="font-medium text-gray-900">US: <a href="tel:7736448871" className="font-normal text-brand-blue hover:underline">773-644-8871</a></span>
                             <span className="font-medium text-gray-900">UA: <a href="tel:0997466810" className="font-normal text-brand-blue hover:underline">099-746-6810</a></span>
                         </div>
                     </div>
                     
                     <div className="hidden md:block w-48 h-64 relative">
                         {/* Using a specific unsplash image that looks like a professional headshot */}
                         <img 
                            src="https://lib.cmb.ac.lk/wp-content/uploads/2023/10/female-profile-picture-vector.jpg" 
                            alt="Thilini.B" 
                            className="w-full h-full object-cover object-center mask-image-gradient"
                            style={{ maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)' }}
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-[#e4e8ec] via-transparent to-transparent opacity-10"></div>
                     </div>
                 </div>
            </div>
            
            {/* Additional Contact Form Snippet matching design */}
            {/* <div className="max-w-2xl mx-auto mt-16 pt-10 border-t border-gray-200">
               <div className="space-y-3 pt-2 text-center">
                    <label className="inline-flex items-center gap-3 cursor-pointer group justify-center">
                        <div className="relative flex items-center">
                            <input type="checkbox" className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 transition-all checked:border-brand-blue checked:bg-brand-blue" />
                            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                                <Check size={14} strokeWidth={4} />
                            </div>
                        </div>
                        <span className="text-gray-500 text-sm group-hover:text-gray-700 transition-colors">Coaxia can contact me over email with related information in the future</span>
                    </label>
                </div>
            </div> */}
         </div>
      </div>
    </div>
  );
};

export default Contact;