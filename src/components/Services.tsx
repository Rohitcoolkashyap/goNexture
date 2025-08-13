import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: '💼',
      title: 'Business',
      description: 'Complete business solutions for your company growth'
    },
    {
      icon: '🎨',
      title: 'Designing',
      description: 'Creative design services for all your branding needs'
    },
    {
      icon: '📢',
      title: 'Digital Marketing',
      description: 'Boost your online presence with effective marketing'
    },
    {
      icon: '💻',
      title: 'Programming',
      description: 'Custom software development and programming solutions'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-secondary-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-secondary-300 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Anything You Can Think Of, We Have It
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
