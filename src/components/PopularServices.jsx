import React from 'react';

const PopularServices = () => {
  const popularServices = [
    {
      title: 'Digital Marketing',
      image: '📱',
      description: 'Boost your online presence',
      color: 'bg-orange-100'
    },
    {
      title: 'Graphic Design',
      image: '🎨',
      description: 'Creative visual solutions',
      color: 'bg-purple-100'
    },
    {
      title: 'WordPress',
      image: '⚡',
      description: 'Custom WordPress development',
      color: 'bg-blue-100'
    },
    {
      title: 'Mobile App',
      image: '📱',
      description: 'iOS and Android development',
      color: 'bg-green-100'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Popular Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularServices.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`${service.color} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                <div className="text-4xl mb-4">{service.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
