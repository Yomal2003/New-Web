import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  FileText, 
  Briefcase, 
  Package,
  Eye,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
  MoreHorizontal,
  Send,
  Paperclip,
  Mic,
  Image as ImageIcon
} from 'lucide-react';
import { api } from '../../services/api';
import { 
  LineChart, 
  Line, 
  AreaChart,
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { format } from 'date-fns';

interface DashboardStats {
  totals: {
    pageViews: number;
    uniqueVisitors: number;
    contactForms: number;
    applications: number;
    aiInteractions: number;
  };
  counts: {
    blogs: number;
    products: number;
    careers: number;
  };
  topContent: {
    blogs: any[];
    products: any[];
  };
  timeline: any[];
}

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [trends, setTrends] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [aiMessage, setAiMessage] = useState('');

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const [dashboardData, trendsData] = await Promise.all([
        api.getDashboardAnalytics(),
        api.getTrends(30)
      ]);

      if (dashboardData.success) {
        setStats(dashboardData.data);
      }

      if (trendsData.success) {
        setTrends(trendsData.data);
      }
    } catch (error) {
      console.error('Failed to load dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for AI interaction
    setAiMessage('');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue"></div>
      </div>
    );
  }

  // Mock data for charts to match the visual style
  const utilizationData = [
    { name: 'Jun', value: 40 },
    { name: 'Jul', value: 30 },
    { name: 'Aug', value: 60 },
    { name: 'Sep', value: 45 },
    { name: 'Oct', value: 70 },
    { name: 'Nov', value: 55 },
    { name: 'Dec', value: 82 },
  ];

  const timelyClosuresData = [
    { name: 'Jun', value: 65 },
    { name: 'Jul', value: 55 },
    { name: 'Aug', value: 75 },
    { name: 'Sep', value: 60 },
    { name: 'Oct', value: 85 },
    { name: 'Nov', value: 70 },
    { name: 'Dec', value: 90 },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-gray-500 text-sm mb-1">Data Based on All Clients</p>
          <h1 className="text-4xl font-bold text-gray-900">Overview Panel</h1>
        </div>
        
        {/* Account Insights Card (Floating/Top Right) */}
        <div className="md:w-1/3">
           <div className="bg-gradient-to-br from-green-300 to-brand-lime rounded-3xl p-6 text-brand-dark relative overflow-hidden shadow-lg">
              <div className="absolute top-4 right-4">
                 <ArrowUpRight size={20} />
              </div>
              <div className="flex items-center gap-2 mb-4">
                 <Sparkles size={18} />
                 <span className="font-bold text-sm">Account Insights</span>
              </div>
              <h3 className="text-2xl font-bold leading-tight mb-2">
                 Last month, automation boosted your time savings to 48.3 hours
              </h3>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (Stats & Charts) */}
        <div className="lg:col-span-2 space-y-8">
           {/* Stats Row */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                 <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-brand-dark"></div>
                    <span className="text-gray-500 text-sm font-medium">Processed Items</span>
                 </div>
                 <div className="text-4xl font-bold text-gray-900 mb-4">97.22<span className="text-xl text-gray-400">%</span></div>
                 <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>14.9k Auto-Processed</span>
                    <span>18k Pending Check</span>
                 </div>
                 <div className="h-2 bg-gray-100 rounded-full overflow-hidden flex">
                    <div className="w-[82%] bg-brand-dark h-full"></div>
                    <div className="w-[18%] bg-brand-lime h-full"></div>
                 </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                 <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-brand-dark"></div>
                    <span className="text-gray-500 text-sm font-medium">Synced Records</span>
                 </div>
                 <div className="flex justify-between items-end mb-4">
                    <div>
                       <div className="text-2xl font-bold">174</div>
                       <div className="text-xs text-gray-400">Verified</div>
                    </div>
                    <div className="text-right">
                       <div className="text-2xl font-bold">31</div>
                       <div className="text-xs text-gray-400">Pending Check</div>
                    </div>
                 </div>
                 <div className="relative h-24 flex items-center justify-center">
                    {/* Simple Circular Progress Placeholder */}
                    <div className="w-20 h-20 rounded-full border-4 border-gray-100 border-t-brand-dark border-r-brand-lime rotate-45"></div>
                    <div className="absolute text-xl font-bold">71%</div>
                 </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                 <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-brand-dark"></div>
                    <span className="text-gray-500 text-sm font-medium">Anomalies</span>
                 </div>
                 <div className="text-4xl font-bold text-gray-900 mb-4">10.12<span className="text-xl text-gray-400">%</span></div>
                 <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>1.62k Detected</span>
                    <span>13.7k Total Items</span>
                 </div>
                 <div className="h-10 flex items-end gap-1">
                    {[40, 60, 30, 80, 50, 90, 20, 40, 60, 70, 30, 50, 20, 80, 40].map((h, i) => (
                       <div key={i} className="w-1 bg-gray-200 rounded-t-sm" style={{ height: `${h}%` }}></div>
                    ))}
                    <div className="w-1 bg-brand-lime h-full rounded-t-sm"></div>
                 </div>
              </div>
           </div>

           {/* Charts Row */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Chart 1 */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                 <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-brand-dark"></div>
                       <span className="text-gray-500 text-sm font-medium">Utilization</span>
                    </div>
                    <ArrowUpRight size={16} className="text-gray-400" />
                 </div>
                 
                 <div className="flex justify-between items-end mb-6">
                    <div>
                       <div className="text-xs text-gray-400 mb-1">Average Account Stats</div>
                       <div className="text-3xl font-bold">56.1<span className="text-lg text-gray-400">%</span></div>
                    </div>
                    <div className="text-right space-y-1">
                       <div className="text-xs font-bold">65% <span className="text-gray-400 font-normal">Syncs</span></div>
                       <div className="text-xs font-bold">82% <span className="text-gray-400 font-normal">Fetches</span></div>
                    </div>
                 </div>

                 <div className="h-32">
                    <ResponsiveContainer width="100%" height="100%">
                       <BarChart data={utilizationData}>
                          <Bar dataKey="value" fill="#111827" radius={[2, 2, 0, 0]} />
                       </BarChart>
                    </ResponsiveContainer>
                 </div>
              </div>

              {/* Chart 2 */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                 <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-brand-dark"></div>
                       <span className="text-gray-500 text-sm font-medium">Timely Closures</span>
                    </div>
                    <ArrowUpRight size={16} className="text-gray-400" />
                 </div>
                 
                 <div className="flex justify-between items-end mb-6">
                    <div>
                       <div className="text-xs text-gray-400 mb-1">Average Account Stats</div>
                       <div className="text-3xl font-bold">82.6<span className="text-lg text-gray-400">%</span></div>
                    </div>
                    <div className="text-right space-y-1">
                       <div className="text-xs font-bold">84/0% <span className="text-gray-400 font-normal">On Time</span></div>
                       <div className="text-xs font-bold">19/5 <span className="text-gray-400 font-normal">Timely</span></div>
                    </div>
                 </div>

                 <div className="h-32">
                    <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={timelyClosuresData}>
                          <defs>
                             <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#111827" stopOpacity={0.1}/>
                                <stop offset="95%" stopColor="#111827" stopOpacity={0}/>
                             </linearGradient>
                          </defs>
                          <Area type="monotone" dataKey="value" stroke="#111827" fillOpacity={1} fill="url(#colorValue)" />
                       </AreaChart>
                    </ResponsiveContainer>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Column (AI Assistant) */}
        <div className="lg:col-span-1">
           <div className="bg-white rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                 <div className="flex items-center gap-2">
                    <Sparkles size={18} className="text-brand-dark" />
                    <span className="font-bold text-gray-900">AI Assistant</span>
                 </div>
                 <ArrowUpRight size={16} className="text-gray-400" />
              </div>

              <div className="flex-1 p-6 space-y-6 overflow-y-auto max-h-[600px]">
                 {/* User Message */}
                 <div className="flex gap-3">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" alt="User" className="w-8 h-8 rounded-full object-cover" />
                    <div>
                       <div className="text-sm font-bold text-gray-900 mb-1">Jordan Lee</div>
                       <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-2xl rounded-tl-none">
                          Hey Coaxia, can you check for discrepancies in revenue vs. projected values?
                       </div>
                       <div className="mt-2 flex items-center gap-2 p-2 bg-gray-50 rounded-lg border border-gray-100 w-fit">
                          <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center text-green-600">
                             <FileText size={16} />
                          </div>
                          <div className="text-xs">
                             <div className="font-bold text-gray-900">ID: #6287439</div>
                          </div>
                       </div>
                       <div className="text-[10px] text-gray-400 mt-1 text-right">10:12</div>
                    </div>
                 </div>

                 {/* AI Response */}
                 <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-brand-lime flex items-center justify-center text-brand-dark font-bold text-xs">
                       CA
                    </div>
                    <div className="flex-1">
                       <div className="text-sm font-bold text-gray-900 mb-1 text-right">Coaxia AI</div>
                       <div className="text-sm text-gray-600 bg-brand-blue/5 p-3 rounded-2xl rounded-tr-none">
                          <p className="font-bold mb-2">Main Deviations by Month:</p>
                          <ul className="space-y-2 text-xs">
                             <li className="flex justify-between">
                                <span>• July</span>
                                <span className="font-bold">$18.9K</span>
                             </li>
                             <li className="flex justify-between">
                                <span>• August</span>
                                <span className="font-bold">$21.7K</span>
                             </li>
                             <li className="flex justify-between">
                                <span>• September</span>
                                <span className="font-bold">$11.9K</span>
                             </li>
                          </ul>
                          <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                             <div className="w-2/3 bg-brand-dark h-full"></div>
                          </div>
                       </div>
                       <div className="text-[10px] text-gray-400 mt-1">10:13</div>
                    </div>
                 </div>
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-gray-100">
                 <div className="flex gap-2 mb-3">
                    <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-100">
                       <FileText size={12} /> Files
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-100">
                       <ImageIcon size={12} /> Images
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-100">
                       <Mic size={12} /> Audio Chat
                    </button>
                 </div>
                 <form onSubmit={handleAiSubmit} className="relative">
                    <input 
                       type="text" 
                       value={aiMessage}
                       onChange={(e) => setAiMessage(e.target.value)}
                       placeholder="Enter your AI Assistant Request"
                       className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                       <button type="button" className="p-1.5 hover:bg-gray-200 rounded-lg text-gray-400">
                          <Paperclip size={16} />
                       </button>
                       <button type="submit" className="p-1.5 bg-brand-dark text-white rounded-lg hover:bg-brand-blue transition-colors">
                          <Send size={14} />
                       </button>
                    </div>
                 </form>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
