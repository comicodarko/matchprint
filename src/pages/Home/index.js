import React from 'react';

import NavBar from '../../components/NavBar';
import SliderClients from '../../components/Slider';
import AboutSection from '../../components/AboutSection';
import ProductsSection from '../../components/ProductsSection';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>
      <NavBar />
      <AboutSection />
      <SliderClients />
      <ProductsSection />
      <Footer />
    </>    
  );
}