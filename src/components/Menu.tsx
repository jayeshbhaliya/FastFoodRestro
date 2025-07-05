import React from 'react';
import { Star } from 'lucide-react';

const Menu = () => {
  const menuItems = [
    {
      name: "દાબેલી રેગ્યુલર તેલ ફ્રાઈ",
      nameEn: "Dabeli Regular Oil Fry",
      description: "ચટાકેદાર કચ્છી - Traditional Kutchi style dabeli with spiced potato filling, oil fried",
      price: "₹25.00",
      image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      featured: true
    },
    {
      name: "દાબેલી રેગ્યુલર બટર ફ્રાઇ",
      nameEn: "Dabeli Regular Butter Fry",
      description: "ચટાકેદાર કચ્છી - Authentic Kutchi dabeli with butter frying for extra richness",
      price: "₹30.00",
      image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      featured: true
    },
    {
      name: "દાબેલી બટર ફ્રાઇ ચીઝ",
      nameEn: "Dabeli Butter Fry Cheese",
      description: "ચટાકેદાર કચ્છી - Premium dabeli with butter frying and melted cheese topping",
      price: "₹50.00",
      image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      featured: true
    },
    {
      name: "Mumbai Vadapav",
      description: "Crispy potato fritter in soft bun with spicy chutneys and fried green chilies",
      price: "₹25",
      image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      featured: true
    },
    {
      name: "Bhel Puri Chaat",
      description: "Puffed rice mixed with sev, chutneys, onions, and fresh coriander",
      price: "₹40",
      image: "https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      featured: false
    },
    {
      name: "Cheese Pizza",
      description: "Fresh mozzarella cheese on crispy base with Italian herbs",
      price: "₹120",
      image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      featured: false
    },
    {
      name: "Grilled Sandwich",
      description: "Multi-layered sandwich with vegetables, cheese, and special sauce",
      price: "₹80",
      image: "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      featured: false
    },
    {
      name: "Bhaji Pav",
      description: "Spicy mixed vegetable curry served with buttered pav bread",
      price: "₹60",
      image: "https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      featured: false
    },
    {
      name: "Sev Puri",
      description: "Crispy puris topped with potatoes, chutneys, and generous sev",
      price: "₹45",
      image: "https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      featured: false
    },
    {
      name: "Pani Puri",
      description: "Crispy shells filled with spiced water, potatoes, and tangy chutneys",
      price: "₹30",
      image: "https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      featured: false
    },
    {
      name: "Margherita Pizza",
      description: "Classic pizza with fresh tomatoes, mozzarella, and basil",
      price: "₹150",
      image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      featured: false
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Fast Food Menu</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From authentic Kutchi Dabeli to modern fast food favorites - all prepared fresh and served fast
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={item.image}
                  alt={item.nameEn || item.name}
                  className="w-full h-48 object-cover"
                />
                {item.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">Popular</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.name}</h3>
                    {item.nameEn && (
                      <p className="text-sm text-gray-500 italic">{item.nameEn}</p>
                    )}
                  </div>
                  <span className="text-xl font-bold text-yellow-600">{item.price}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;