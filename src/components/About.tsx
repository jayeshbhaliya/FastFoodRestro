import React from 'react';
import { Award, Clock, Users, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      title: "Award Winning",
      description: "Recognized for excellence in fast food and street food"
    },
    {
      icon: <Clock className="h-8 w-8 text-yellow-600" />,
      title: "Quick Service",
      description: "Fast preparation and delivery for busy lifestyles"
    },
    {
      icon: <Users className="h-8 w-8 text-yellow-600" />,
      title: "Family Owned",
      description: "Three generations of street food expertise"
    },
    {
      icon: <Heart className="h-8 w-8 text-yellow-600" />,
      title: "Made Fresh",
      description: "Every item prepared fresh with quality ingredients"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From street-side stalls to a beloved fast food chain, bringing authentic flavors to every corner of Ahmedabad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Fast food counter"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">From Streets to Your Plate</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 1998 by Chef Ramesh Patel, Kutchi Swad started as a small street food stall and has grown into Ahmedabad's favorite fast food chain. Our recipes combine traditional Kutchi and Gujarati flavors with modern fast food convenience.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We believe that great food shouldn't take forever. Every item at Kutchi Swad is prepared fresh and served fast, perfect for students, office workers, and families on the go.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From our signature Kutchi Dabeli to crispy Vadapav and loaded chaats, we bring the authentic taste of Gujarat's street food culture to modern fast food dining.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;