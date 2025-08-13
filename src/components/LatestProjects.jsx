import React from 'react';

const LatestProjects = () => {
  const projects = [
    {
      title: 'Digital Marketer',
      price: '$1000',
      rating: 4.9,
      image: '📈',
      description: 'Professional digital marketing campaign with ROI tracking',
      category: 'Marketing'
    },
    {
      title: 'Software Developer',
      price: '$2000',
      rating: 5.0,
      image: '💻',
      description: 'Full-stack web application development with modern tech',
      category: 'Development'
    },
    {
      title: 'UX/UI Designer',
      price: '$1500',
      rating: 4.8,
      image: '🎨',
      description: 'Complete UX/UI design for mobile and web applications',
      category: 'Design'
    },
    {
      title: 'Mobile App Developer',
      price: '$1800',
      rating: 4.9,
      image: '📱',
      description: 'Native iOS and Android app development',
      category: 'Development'
    },
    {
      title: 'Graphic Designer',
      price: '$800',
      rating: 4.7,
      image: '🖼️',
      description: 'Creative graphic design for branding and marketing',
      category: 'Design'
    },
    {
      title: 'WordPress Developer',
      price: '$1200',
      rating: 4.8,
      image: '⚡',
      description: 'Custom WordPress theme and plugin development',
      category: 'Development'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Latest Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-primary-600 bg-primary-100 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm font-semibold text-gray-700">{project.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-600">
                    {project.price}
                  </span>
                  <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
