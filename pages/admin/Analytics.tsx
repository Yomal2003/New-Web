import React from 'react';
import { BarChart3, TrendingUp, Users, Globe } from 'lucide-react';

const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-500">Detailed performance metrics</p>
        </div>
        <div className="flex gap-2">
          <select className="px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Views', value: '124.5K', change: '+12%', icon: Globe, color: 'bg-blue-500' },
          { label: 'Bounce Rate', value: '42.3%', change: '-2%', icon: TrendingUp, color: 'bg-green-500' },
          { label: 'New Users', value: '8,549', change: '+18%', icon: Users, color: 'bg-purple-500' },
          { label: 'Avg. Session', value: '4m 32s', change: '+5%', icon: BarChart3, color: 'bg-orange-500' },
        ].map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.color} bg-opacity-10`}>
                <stat.icon className={`w-6 h-6 ${stat.color.replace('bg-', 'text-')}`} />
              </div>
              <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center py-20">
        <div className="inline-flex p-4 bg-gray-50 rounded-full mb-4">
          <BarChart3 className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Detailed Analytics Coming Soon</h3>
        <p className="text-gray-500 max-w-md mx-auto">
          We are currently integrating with Google Analytics 4 to bring you real-time insights directly in your dashboard.
        </p>
      </div>
    </div>
  );
};

export default Analytics;
