import React from 'react';

const Gallery = () => {
  const images = [
    {
      src: "https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Fast food counter"
    },
    {
      src: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Dabeli preparation"
    },
    {
      src: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Fresh pizza"
    },
    {
      src: "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Grilled sandwich"
    },
    {
      src: "https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Street food platter"
    },
    {
      src: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Vadapav special"
    },
    {
      src: "https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Chaat varieties"
    },
    {
      src: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Pizza varieties"
    },
    {
      src: "https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Bhaji pav"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A visual feast showcasing our fast food varieties and vibrant dining atmosphere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;