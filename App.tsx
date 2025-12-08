
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';

// Public Pages
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import Careers from './pages/Careers';
import BlogPage from './pages/BlogPage';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import BlogManagement from './pages/admin/BlogManagement';
import BlogEditor from './pages/admin/BlogEditor';
import ProductManagement from './pages/admin/ProductManagement';
import CareerManagement from './pages/admin/CareerManagement';
import Analytics from './pages/admin/Analytics';
import AdminLayout from './components/admin/AdminLayout';
import ProtectedRoute from './components/admin/ProtectedRoute';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash, scroll to the element
    if (hash) {
      // Small timeout to ensure the element exists after route transition
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#003366',
              color: '#fff',
            },
            success: {
              iconTheme: {
                primary: '#ccff00',
                secondary: '#003366',
              },
            },
          }}
        />
        
        <Routes>
          {/* Public Routes */}
          <Route path="/*" element={
            <div className="font-sans text-gray-900 bg-white selection:bg-brand-lime selection:text-brand-dark flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<Privacy />} />
                </Routes>
              </main>
              <Footer />
              <AiAssistant />
            </div>
          } />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/*" element={
            <ProtectedRoute>
              <AdminLayout>
                <Routes>
                  <Route path="dashboard" element={<AdminDashboard />} />
                  <Route path="products" element={<ProductManagement />} />
                  <Route path="blogs" element={<BlogManagement />} />
                  <Route path="blogs/new" element={<BlogEditor />} />
                  <Route path="blogs/edit/:id" element={<BlogEditor />} />
                  <Route path="careers" element={<CareerManagement />} />
                  <Route path="analytics" element={<Analytics />} />
                  <Route path="*" element={<AdminDashboard />} />
                </Routes>
              </AdminLayout>
            </ProtectedRoute>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
