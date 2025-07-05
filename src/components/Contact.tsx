import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-yellow-600" />,
      title: "Address",
      content: "10, Angle Arcade, Virat Nagar Rd, near National Hand Loom, Nikol, Ahmedabad, Gujarat 382350",
      isAddress: true
    },
    {
      icon: <Phone className="h-6 w-6 text-yellow-600" />,
      title: "Phone",
      content: "99785 59941"
    },
    {
      icon: <Mail className="h-6 w-6 text-yellow-600" />,
      title: "Email",
      content: "kutchiswad@gmail.com"
    },
    {
      icon: <Clock className="h-6 w-6 text-yellow-600" />,
      title: "Hours",
      content: "Mon-Sun: 10:00 AM - 11:00 PM"
    }
  ];

  const handleAddressClick = () => {
    window.open('https://maps.app.goo.gl/SC3JTEYYhUE7GYud9', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to welcome you to Kutchi Swad. Visit our outlet for fresh fast food and street food.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    {item.icon}
                    <h3 className="text-lg font-semibold text-gray-900 ml-3">{item.title}</h3>
                  </div>
                  {item.isAddress ? (
                    <div 
                      onClick={handleAddressClick}
                      className="text-gray-600 leading-relaxed cursor-pointer hover:text-yellow-600 transition-colors duration-300 flex items-start group"
                    >
                      <span className="flex-1">{item.content}</span>
                      <ExternalLink className="h-4 w-4 ml-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ) : (
                    <p className="text-gray-600 leading-relaxed">{item.content}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-96 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5234567890123!2d72.6234567!3d23.0234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f1234567890%3A0x1234567890abcdef!2s10%2C%20Angle%20Arcade%2C%20Virat%20Nagar%20Rd%2C%20near%20National%20Hand%20Loom%2C%20Nikol%2C%20Ahmedabad%2C%20Gujarat%20382350!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
              <div 
                onClick={handleAddressClick}
                className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-lg cursor-pointer hover:bg-gray-50 transition-colors duration-300 group"
              >
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-yellow-600" />
                  <span className="text-sm font-medium text-gray-700">Open in Maps</span>
                  <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-yellow-600 transition-colors duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;