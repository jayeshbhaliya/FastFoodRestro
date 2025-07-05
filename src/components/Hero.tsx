import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Kutchi Swad
        </h1>
        <p className="text-xl sm:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed">
          Fast Food & Street Food Chain in Ahmedabad
        </p>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
          Authentic Dabeli, Vadapav, Chaats, Pizza & More - Quick, Tasty & Affordable
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToAbout}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
          >
            Discover Our Story
          </button>
          <Link 
            to="/menu"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 text-center"
          >
            View Menu
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white" />
      </div>
    </section>
  );
};

export default Hero;