import React, {useEffect, useState} from 'react';

import NavBar from '../../components/NavBar';
import MobileNav from '../../components/NavBar/MobileNav';
import SliderClients from '../../components/Slider';
import AboutSection from '../../components/AboutSection';
import ProductsSection from '../../components/ProductsSection';
import Footer from '../../components/Footer';

export default function Home() {
  
  function useWindowSize() {
  
    const [windowSize, setWindowSize] = useState({
      width: 0,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
        });
      }

      window.addEventListener("resize", handleResize);
      
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
  
    }, []);

    return windowSize;
  }

  const size = useWindowSize();
  return (
    <>
      
      {size.width < 700
      ? <MobileNav />
      : <NavBar />
      }
      <AboutSection/>
      <SliderClients />
      <ProductsSection />
      <Footer />
    </>    
  );
}