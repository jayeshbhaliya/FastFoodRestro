import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Menu />
      <About />
    </div>
  );
};

export default HomePage;