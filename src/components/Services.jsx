import React from 'react';

const Services = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Full-stack web applications with modern technologies',
      features: ['React & Next.js', 'Node.js & Python', 'Databases']
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications for iOS & Android',
      features: ['React Native', 'Flutter', 'Native Development']
    },
    {
      icon: '🔍',
      title: 'SEO & Marketing',
      description: 'Search engine optimization and digital marketing',
      features: ['Keyword Research', 'Content Strategy', 'Analytics']
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure and deployment services',
      features: ['AWS & Azure', 'DevOps', 'Scalability']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'User-centered design and branding solutions',
      features: ['Wireframing', 'Prototyping', 'Brand Identity']
    },
    {
      icon: '🛡️',
      title: 'Security & Testing',
      description: 'Security audits and comprehensive testing',
      features: ['Penetration Testing', 'Code Review', 'QA Testing']
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-secondary-400 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
            Complete Tech Solutions
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Anything You Can Think Of,{' '}
            <span className="text-primary-600">We Have It</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide comprehensive technology solutions 
            that transform your ideas into powerful digital experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-secondary-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                                 {/* Hover Effect */}
                 <div className="mt-6 pt-6 border-t border-gray-100">
                   <button 
                     onClick={scrollToContact}
                     className="flex items-center text-primary-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300 cursor-pointer hover:text-primary-700"
                   >
                     Learn More
                     <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                     </svg>
                   </button>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Don't See What You Need?
            </h3>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              We're always expanding our services. If you have a unique requirement, 
              let's discuss how we can help bring your vision to life.
            </p>
                         <button 
               onClick={scrollToContact}
               className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
             >
               Let's Talk About Your Project
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
