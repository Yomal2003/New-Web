
import React from 'react';
import { Send, MessageSquare, PenLine, Check } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 shadow-2xl rounded-sm overflow-hidden min-h-[700px]">
        
        {/* Left Column - Form */}
        <div className="bg-[#f8f9fa] p-8 md:p-12 lg:p-14 flex flex-col">
            {/* Tabs */}
            <div className="flex mb-10 border border-gray-200 bg-white max-w-sm shadow-sm">
                <button className="flex-1 py-3 px-4 bg-brand-blue text-white font-medium text-sm flex items-center justify-center gap-2 relative transition-colors">
                   <MessageSquare size={16} className="fill-current" /> Contact Us
                </button>
                <button className="flex-1 py-3 px-4 text-gray-500 font-medium text-sm hover:bg-gray-50 flex items-center justify-center gap-2 border-l border-gray-200 transition-colors">
                   <PenLine size={16} /> Request Estimation
                </button>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-2">How can I help you?</h2>
            
            <form className="space-y-6 mt-8 flex-1">
                <div>
                    <label className="block text-gray-500 text-sm mb-2">Describe your request and tell me about your project idea.</label>
                    <textarea 
                        className="w-full bg-white border-0 p-4 rounded-sm h-32 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue resize-none placeholder-gray-300 shadow-sm text-gray-800"
                        placeholder="Enter your request..."
                    ></textarea>
                </div>

                <h3 className="text-2xl font-light text-gray-900 pt-2">Contact details</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-500 text-sm mb-2">First Name</label>
                        <input type="text" placeholder="Jane" className="w-full bg-white p-3 border-0 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue shadow-sm text-gray-800 placeholder-gray-300" />
                    </div>
                    <div>
                        <label className="block text-gray-500 text-sm mb-2">Last Name</label>
                        <input type="text" placeholder="Doe" className="w-full bg-white p-3 border-0 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue shadow-sm text-gray-800 placeholder-gray-300" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-500 text-sm mb-2">Email</label>
                        <input type="email" placeholder="janedoe@mail.com" className="w-full bg-white p-3 border-0 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue shadow-sm text-gray-800 placeholder-gray-300" />
                    </div>
                    <div>
                        <label className="block text-gray-500 text-sm mb-2">Phone (Optional)</label>
                        <input type="text" placeholder="+1 423-23-76" className="w-full bg-white p-3 border-0 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue shadow-sm text-gray-800 placeholder-gray-300" />
                    </div>
                </div>

                <div className="space-y-3 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center">
                            <input type="checkbox" className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 transition-all checked:border-brand-blue checked:bg-brand-blue" />
                            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                                <Check size={14} strokeWidth={4} />
                            </div>
                        </div>
                        <span className="text-gray-500 text-sm group-hover:text-gray-700 transition-colors">COAX can contact me over email with related information in the future</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                         <div className="relative flex items-center">
                            <input type="checkbox" className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 transition-all checked:border-brand-blue checked:bg-brand-blue" />
                            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                                <Check size={14} strokeWidth={4} />
                            </div>
                        </div>
                        <span className="text-gray-500 text-sm group-hover:text-gray-700 transition-colors">I accept the <a href="#" className="underline text-gray-700 hover:text-brand-blue">Terms</a> & <a href="#" className="underline text-gray-700 hover:text-brand-blue">Privacy Policy</a></span>
                    </label>
                </div>

                <div className="pt-4">
                    <button type="submit" className="bg-brand-blue text-white px-8 py-4 text-sm font-bold flex items-center gap-2 hover:bg-brand-lime hover:text-brand-dark transition-colors mt-4 shadow-lg group">
                        Send Message
                        <div className="h-full border-l border-white/20  pl-4">
                           <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </button>
                </div>
            </form>
        </div>

        {/* Right Column - Info */}
        <div className="flex flex-col">
            {/* Top Gray Section */}
            <div className="bg-[#eef0f3] p-10 md:p-16 flex-1 relative overflow-hidden">
                {/* Decorative cut */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue transform rotate-45 translate-x-24 -translate-y-24 shadow-sm"></div>
                
                <h2 className="text-4xl font-light text-gray-800 mb-12 relative z-10">What I'll do next?</h2>
                
                <ul className="space-y-8 relative z-10 max-w-md">
                    {[
                        { id: 1, text: "Contact you within 24 hours", bold: "24 hours" },
                        { id: 2, text: "Clarify your expectations, business objectives, and project requirements" },
                        { id: 3, text: "Develop and accept a proposal" },
                        { id: 4, text: "After that, we can start our partnership" },
                    ].map((step) => (
                        <li key={step.id} className="flex gap-5 items-start">
                            <span className="flex-shrink-0 w-7 h-7 bg-white text-brand-blue font-bold text-sm flex items-center justify-center rounded-sm shadow-sm mt-0.5">
                                {step.id}
                            </span>
                            <span className="text-gray-600 text-sm leading-relaxed">
                                {step.text.includes("24 hours") ? (
                                    <>Contact you within <span className="text-brand-blue font-bold">24 hours</span></>
                                ) : step.text}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Bottom Contact Person Section */}
            <div className="bg-[#e4e8ec] px-10 md:px-16 pt-10 pb-0 relative">
                 <div className="flex flex-col md:flex-row items-end gap-6 relative z-10">
                     <div className="flex-1 pb-10 md:pb-16">
                         <h3 className="text-xl font-medium text-gray-900">Thilini. B</h3>
                         <p className="text-gray-500 text-sm mb-6">Client engagement manager</p>
                         
                         <a href="mailto:sales@coaxasoft.com" className="block text-2xl md:text-3xl text-brand-blue font-normal mb-4 hover:underline">
                             sales@coaxia.tech
                         </a>
                         
                         <div className="flex flex-col xl:flex-row gap-2 xl:gap-6 text-gray-600 text-sm">
                             <span className="font-medium text-gray-900">US: <a href="tel:7736448871" className="font-normal text-brand-blue hover:underline">773-644-8871</a></span>
                             <span className="font-medium text-gray-900">UA: <a href="tel:0997466810" className="font-normal text-brand-blue hover:underline">78-444-5902</a></span>
                         </div>
                     </div>
                     
                     <div className="hidden md:block w-48 h-64 relative">
                         {/* Using a specific unsplash image that looks like a professional headshot with removed background ideally, but here standard crop */}
                         <img 
                            src="https://lib.cmb.ac.lk/wp-content/uploads/2023/10/female-profile-picture-vector.jpg" 
                            alt="Thilini. B" 
                            className="w-full h-full object-cover object-center mask-image-gradient"
                            style={{ maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)' }}
                         />
                         {/* Simulating the fade out at bottom if needed, or simple placement */}
                         <div className="absolute inset-0 bg-gradient-to-t from-[#e4e8ec] via-transparent to-transparent opacity-10"></div>
                     </div>
                 </div>
                 
                 {/* Decorative curve overlaying image if needed to match design perfectly */}
            </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
