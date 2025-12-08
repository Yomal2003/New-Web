import React, { ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  FileText,
  Package,
  Briefcase,
  BarChart3,
  LogOut,
  Menu,
  X,
  Search,
  Bell,
  Settings,
  ChevronDown
} from 'lucide-react';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const { admin, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/admin/dashboard' },
    { icon: FileText, label: 'Blogs', path: '/admin/blogs' },
    { icon: Package, label: 'Products', path: '/admin/products' },
    { icon: Briefcase, label: 'Careers', path: '/admin/careers' },
    { icon: BarChart3, label: 'Analytics', path: '/admin/analytics' }
  ];

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 bg-white border-r border-gray-200 transition-all duration-300 z-50 ${
          sidebarOpen ? 'w-64' : 'w-20'
        } ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Logo */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-gray-100">
          {sidebarOpen ? (
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-lime rounded-lg flex items-center justify-center">
                   <span className="font-bold text-brand-dark">C</span>
                </div>
                <span className="font-bold text-xl text-brand-dark">COAXIA</span>
             </div>
          ) : (
            <div className="w-8 h-8 bg-brand-lime rounded-lg flex items-center justify-center mx-auto">
               <span className="font-bold text-brand-dark">C</span>
            </div>
          )}
          
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-1 hover:bg-gray-100 rounded-md"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1 mt-4">
          {menuItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                  isActive
                    ? 'bg-brand-dark text-white shadow-lg shadow-brand-dark/20'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-brand-dark'
                }`}
              >
                <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-brand-lime' : 'text-gray-400 group-hover:text-brand-dark'}`} />
                {sidebarOpen && (
                  <span className="font-medium">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
           <button
              onClick={handleLogout}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all w-full ${!sidebarOpen && 'justify-center'}`}
            >
              <LogOut className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span className="font-medium">Logout</span>}
            </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-40">
           <div className="flex items-center gap-4">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
              >
                <Menu size={20} />
              </button>
              
              <div className="hidden md:flex items-center gap-3 bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-200 w-96 focus-within:ring-2 focus-within:ring-brand-blue/20 transition-all">
                 <Search size={18} className="text-gray-400" />
                 <input 
                    type="text" 
                    placeholder="Type Client Name or ID..." 
                    className="bg-transparent border-none outline-none text-sm w-full text-gray-700 placeholder-gray-400"
                 />
              </div>
           </div>

           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                 <button className="p-2 hover:bg-gray-100 rounded-full relative">
                    <Bell size={20} className="text-gray-500" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                 </button>
                 <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Settings size={20} className="text-gray-500" />
                 </button>
              </div>
              
              <div className="h-8 w-px bg-gray-200"></div>

              <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1.5 rounded-xl transition-colors">
                 <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-sm">
                    {admin?.name.charAt(0).toUpperCase()}
                 </div>
                 <div className="hidden md:block text-left">
                    <p className="text-sm font-bold text-gray-900 leading-none mb-1">{admin?.name}</p>
                    <p className="text-xs text-gray-500 leading-none">{admin?.role}</p>
                 </div>
                 <ChevronDown size={16} className="text-gray-400" />
              </div>
           </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
