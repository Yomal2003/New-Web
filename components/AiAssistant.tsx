
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Cpu, ChevronRight, User, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { geminiService } from '../services/gemini';
import { ChatMessage } from '../types';
import { useNavigate } from 'react-router-dom';

const SUGGESTED_PROMPTS = [
  "What services do you offer?",
  "Show me the industries",
  "How can you help my logistics business?",
  "Take me to the contact form"
];

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      id: 'init', 
      role: 'model', 
      text: 'Greetings. I am CoaxiaAI. How can I accelerate your digital transformation today?',
      timestamp: Date.now() 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
      // Register the navigation callback when component mounts
      geminiService.setNavigateCallback((path) => {
          navigate(path);
      });
  }, [navigate]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMsgId = Date.now().toString();
    const newMessages = [
      ...messages, 
      { id: userMsgId, role: 'user', text: text, timestamp: Date.now() } as ChatMessage
    ];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    // Prepare AI Message Placeholder
    const aiMsgId = (Date.now() + 1).toString();
    setMessages(prev => [
      ...prev,
      { id: aiMsgId, role: 'model', text: '', isStreaming: true, timestamp: Date.now() }
    ]);

    try {
      const stream = geminiService.sendMessageStream(text);
      let accumulatedText = '';

      for await (const chunk of stream) {
        accumulatedText += chunk;
        setMessages(prev => prev.map(msg => 
          msg.id === aiMsgId 
            ? { ...msg, text: accumulatedText } 
            : msg
        ));
      }
      
      // Finalize message
      setMessages(prev => prev.map(msg => 
        msg.id === aiMsgId 
          ? { ...msg, isStreaming: false } 
          : msg
      ));

    } catch (error) {
      console.error(error);
      setMessages(prev => prev.map(msg => 
        msg.id === aiMsgId 
          ? { ...msg, text: "I encountered a processing error. Please retry.", isError: true, isStreaming: false } 
          : msg
      ));
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  return (
    <>
      {/* Floating Trigger */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-[100] bg-brand-dark text-brand-lime p-0 rounded-full shadow-[0_0_20px_rgba(52,58,228,0.5)] border border-brand-lime/30 group ${isOpen ? 'hidden' : 'flex'}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="relative p-4 overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-brand-blue opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <Sparkles size={28} className="relative z-10 animate-pulse" />
        </div>
        {/* Ping effect */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-lime"></span>
        </span>
      </motion.button>

      {/* Advanced Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 100, scale: 0.95, filter: "blur(10px)" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] w-[95vw] md:w-[400px] h-[600px] max-h-[80vh] flex flex-col font-sans rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 backdrop-blur-xl bg-brand-dark/95"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-blue to-brand-dark border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="bg-brand-lime/10 p-2 rounded-lg border border-brand-lime/20">
                  <Cpu size={20} className="text-brand-lime" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm tracking-wide">COAXIA_AI v2.5</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-brand-lime rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-brand-lime/80 uppercase tracking-widest">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div 
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-hide"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1
                    ${msg.role === 'user' ? 'bg-white text-brand-dark' : 'bg-brand-blue text-white'}
                  `}>
                    {msg.role === 'user' ? <User size={14} /> : <Terminal size={14} />}
                  </div>
                  
                  <div className={`
                    max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed relative
                    ${msg.role === 'user' 
                      ? 'bg-white text-brand-dark rounded-tr-sm font-medium' 
                      : 'bg-white/5 text-gray-100 rounded-tl-sm border border-white/10'
                    }
                  `}>
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                    {msg.isStreaming && (
                         <span className="inline-block w-1.5 h-4 ml-1 align-middle bg-brand-lime animate-pulse"></span>
                    )}
                  </div>
                </motion.div>
              ))}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions (Only show if few messages or idle) */}
            {messages.length < 3 && !isTyping && (
                <div className="px-4 pb-2">
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Quick Actions</p>
                    <div className="flex flex-wrap gap-2">
                        {SUGGESTED_PROMPTS.map((prompt, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleSendMessage(prompt)}
                                className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-lime/50 text-gray-300 hover:text-brand-lime transition-all px-3 py-1.5 rounded-full text-left"
                            >
                                {prompt}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-brand-dark border-t border-white/10">
              <form 
                onSubmit={handleSubmit}
                className="relative flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden focus-within:ring-1 focus-within:ring-brand-lime/50 transition-all"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything..."
                  className="w-full bg-transparent text-white px-4 py-3.5 text-sm placeholder-gray-500 focus:outline-none"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className={`
                    absolute right-2 p-2 rounded-lg transition-all
                    ${input.trim() && !isTyping 
                        ? 'bg-brand-lime text-brand-dark hover:scale-105' 
                        : 'bg-white/10 text-gray-500 cursor-not-allowed'}
                  `}
                >
                  {isTyping ? (
                      <div className="w-4 h-4 border-2 border-brand-dark border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                      <Send size={16} />
                  )}
                </button>
              </form>
              <div className="text-center mt-2">
                <p className="text-[10px] text-gray-600">Powered by Google Gemini 2.5 Flash</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AiAssistant;