import React from 'react';

import NavBar from '../../components/NavBar';
import SliderClients from '../../components/Slider';
import AboutSection from '../../components/AboutSection';

export default function Home() {
  return (
    <>
      <NavBar />
      <AboutSection />
      <SliderClients />
    </>    
  );
}