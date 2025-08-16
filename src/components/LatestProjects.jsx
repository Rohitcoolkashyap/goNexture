import React from 'react';

const LatestProjects = () => {
  const projects = [
    {
      title: 'MIT Academy of Engineering',
      website: 'mitaoe.ac.in',
      rating: 5.0,
      image: '🏛️',
      description: 'Complete university website with admissions, academics, and student portal',
      category: 'Education',
      technologies: ['React', 'Node.js', 'Database', 'SEO'],
      features: ['Student Portal', 'Admission System', 'Faculty Management', 'News & Events']
    },
    {
      title: 'Avantika University',
      website: 'avantikauniversity.edu.in',
      rating: 5.0,
      image: '🎓',
      description: 'Modern university website with comprehensive academic programs and admissions',
      category: 'Education',
      technologies: ['Next.js', 'MongoDB', 'Cloud Hosting', 'Analytics'],
      features: ['Program Catalog', 'Online Admissions', 'Student Dashboard', 'International Partnerships']
    },
    {
      title: 'MIT School of Distance Education',
      website: 'mitsde.com',
      rating: 5.0,
      image: '📚',
      description: 'Distance learning platform with course management and student portal',
      category: 'Education',
      technologies: ['React', 'Python', 'AWS', 'Payment Gateway'],
      features: ['Course Management', 'Online Learning', 'Payment System', 'Student Support']
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
            Our Portfolio
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Projects We're{' '}
            <span className="text-primary-600">Proud Of</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            End-to-end development of comprehensive educational platforms that serve thousands of students daily.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                {/* Project Header */}
                <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-6xl relative">
                  {project.image}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-yellow-300">⭐</span>
                      <span className="text-white font-bold text-sm">{project.rating}</span>
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500 font-mono">
                      {project.website}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  
                                     <p className="text-gray-600 mb-6 leading-relaxed">
                     {project.description}
                   </p>
                   
                   {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                    <div className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-secondary-400 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <a 
                    href={`https://${project.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-primary-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Impact of Our Work
            </h3>
            <p className="text-gray-600 text-lg">
              These platforms serve thousands of students and faculty members daily
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">50K+</div>
              <div className="text-sm text-gray-600">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">1000+</div>
              <div className="text-sm text-gray-600">Faculty Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">5.0</div>
              <div className="text-sm text-gray-600">Client Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
