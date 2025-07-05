import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="h-6 w-6" />, href: "#" },
    { icon: <Instagram className="h-6 w-6" />, href: "#" },
    { icon: <Twitter className="h-6 w-6" />, href: "#" }
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ];

  const handleAddressClick = () => {
    window.open('https://maps.app.goo.gl/SC3JTEYYhUE7GYud9', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/English logo.svg"
                alt="Kutchi Swad Logo"
                className="h-12 w-auto mr-3"
              />
              <h3 className="text-3xl font-bold text-yellow-600">Kutchi Swad</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience authentic fast food and street food in the heart of Ahmedabad. Our passion for traditional flavors 
              and fresh ingredients creates quick, delicious meals that bring people together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="bg-gray-800 hover:bg-yellow-600 p-3 rounded-lg transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-yellow-600 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div 
                onClick={handleAddressClick}
                className="flex items-start space-x-3 cursor-pointer hover:text-yellow-600 transition-colors duration-300 group"
              >
                <MapPin className="h-5 w-5 text-yellow-600 mt-1" />
                <div className="flex-1">
                  <p className="text-gray-300 group-hover:text-yellow-600 transition-colors duration-300">10, Angle Arcade</p>
                  <p className="text-gray-300 group-hover:text-yellow-600 transition-colors duration-300">Virat Nagar Rd, near National Hand Loom</p>
                  <p className="text-gray-300 group-hover:text-yellow-600 transition-colors duration-300">Nikol, Ahmedabad, Gujarat 382350</p>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-yellow-600 transition-colors duration-300 mt-1" />
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-600" />
                <p className="text-gray-300">99785 59941</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-600" />
                <p className="text-gray-300">kutchiswad@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Kutchi Swad Fast Food Chain. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>by Kutchi Swad Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;