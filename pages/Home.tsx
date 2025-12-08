
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ProductsSection from '../components/ProductsSection';
import Challenges from '../components/Challenges';
import Industries from '../components/Industries';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import ContactSection from '../components/ContactSection';
import AboutSummary from '../components/AboutSummary';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSummary />
      <Services />
      <ProductsSection />
      <Challenges />
      <Industries />
      <Testimonials />
      <Blog />
      <ContactSection />
    </div>
  );
};

export default Home;
