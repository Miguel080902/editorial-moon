import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Genres from './components/Genres';
import Process from './components/Process';
import Convocatoria from './components/Convocatoria';
import Values from './components/Values';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Genres />
      <Process />
      <Convocatoria />
      <Values />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;