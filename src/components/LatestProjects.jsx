import React, { useState, useEffect, useRef } from 'react';

const LatestProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const carouselRef = useRef(null);
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

  // Check if we're on mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Carousel navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Navigation with auto-play pause
  const handleDotClick = (index) => {
    goToSlide(index);
    setIsAutoPlayPaused(true);
    setTimeout(() => setIsAutoPlayPaused(false), 8000);
  };

  // Touch event handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchEnd(0); // Reset touch end
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
      // Pause auto-play temporarily after user interaction
      setIsAutoPlayPaused(true);
      setTimeout(() => setIsAutoPlayPaused(false), 8000); // Resume after 8 seconds
    } else if (isRightSwipe) {
      prevSlide();
      // Pause auto-play temporarily after user interaction
      setIsAutoPlayPaused(true);
      setTimeout(() => setIsAutoPlayPaused(false), 8000); // Resume after 8 seconds
    }
  };

  // Auto-play carousel on mobile
  useEffect(() => {
    if (!isMobile || isAutoPlayPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000); // Change slide every 5 seconds (slightly longer for project cards)
    
    return () => clearInterval(interval);
  }, [isMobile, isAutoPlayPaused, projects.length]);

  return (
    <section id="portfolio" className="py-12 lg:py-16 pt-10 lg:pt-14 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10 lg:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-slate-700/50">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
            Our Portfolio
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-4 lg:px-0">
            Projects We're{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Proud Of</span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4 lg:px-0">
            End-to-end development of comprehensive educational platforms that serve thousands of students daily.
          </p>
        </div>

        {/* Mobile Carousel (lg:hidden) */}
        <div className="lg:hidden relative mb-12">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              ref={carouselRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-slate-700/50 mx-auto max-w-sm h-full flex flex-col">
                    {/* Project Header */}
                    <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl relative">
                      {project.image}
                      <div className="absolute top-2 right-2">
                        <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                          <span className="text-yellow-300 text-xs">⭐</span>
                          <span className="text-white font-bold text-xs">{project.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-semibold text-blue-400 bg-blue-400/20 px-2 py-1 rounded-full">
                            {project.category}
                          </span>
                          <span className="text-xs text-slate-400 font-mono">
                            {project.website}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        
                        <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                          {project.description}
                        </p>
                      </div>

                      {/* Action Button */}
                      <a 
                        href={`https://${project.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full bg-slate-200 text-slate-900 text-center py-2.5 rounded-lg font-semibold hover:bg-white transition-colors mt-auto text-sm cursor-magnetic"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center items-center mt-6">
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide 
                      ? 'bg-blue-400' 
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid (hidden lg:grid) */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {projects.map((project, index) => (
            <div key={index} className="group h-full">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl lg:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-700/50 h-full flex flex-col">
                {/* Project Header */}
                <div className="h-36 lg:h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl lg:text-6xl relative">
                  {project.image}
                  <div className="absolute top-3 right-3 lg:top-4 lg:right-4">
                    <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm px-2 py-1 lg:px-3 lg:py-1 rounded-full">
                      <span className="text-yellow-300 text-xs lg:text-sm">⭐</span>
                      <span className="text-white font-bold text-xs lg:text-sm">{project.rating}</span>
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-4 lg:p-8 flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3 lg:mb-4">
                      <span className="text-xs font-semibold text-blue-400 bg-blue-400/20 px-2 py-1 lg:px-3 lg:py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-xs lg:text-sm text-slate-400 font-mono">
                        {project.website}
                      </span>
                    </div>
                    
                    <h3 className="text-lg lg:text-2xl font-bold text-white mb-2 lg:mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-300 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <a 
                    href={`https://${project.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-slate-200 text-slate-900 text-center py-2.5 lg:py-3 rounded-lg lg:rounded-xl font-semibold hover:bg-white transition-colors mt-auto text-sm lg:text-base cursor-magnetic"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 lg:p-12 shadow-lg border border-slate-700/50">
          <div className="text-center mb-6 lg:mb-8">
            <h3 className="text-xl lg:text-3xl font-bold text-white mb-3 lg:mb-4">
              Impact of Our Work
            </h3>
            <p className="text-slate-300 text-sm lg:text-lg">
              These platforms serve thousands of students and faculty members daily
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            <div className="text-center">
              <div className="text-2xl lg:text-4xl font-bold text-blue-400 mb-1 lg:mb-2">50K+</div>
              <div className="text-xs lg:text-sm text-slate-400">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-4xl font-bold text-blue-400 mb-1 lg:mb-2">1000+</div>
              <div className="text-xs lg:text-sm text-slate-400">Faculty Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-4xl font-bold text-blue-400 mb-1 lg:mb-2">99.9%</div>
              <div className="text-xs lg:text-sm text-slate-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-4xl font-bold text-blue-400 mb-1 lg:mb-2">5.0</div>
              <div className="text-xs lg:text-sm text-slate-400">Client Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
