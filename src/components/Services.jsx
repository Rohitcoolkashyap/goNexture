import React, { useState, useEffect, useRef } from 'react';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const carouselRef = useRef(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Check if we're on mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

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

  // Carousel navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Navigation with auto-play pause
  const handleNextClick = () => {
    nextSlide();
    setIsAutoPlayPaused(true);
    setTimeout(() => setIsAutoPlayPaused(false), 8000);
  };

  const handlePrevClick = () => {
    prevSlide();
    setIsAutoPlayPaused(true);
    setTimeout(() => setIsAutoPlayPaused(false), 8000);
  };

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
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 4000); // Change slide every 4 seconds
    
    return () => clearInterval(interval);
  }, [isMobile, isAutoPlayPaused, services.length]);

  return (
    <section id="services" className="py-12 lg:py-16 bg-slate-900 text-white relative overflow-hidden">
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
        <div className="text-center mb-8 lg:mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-slate-700/50">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Complete Tech Solutions
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-4 lg:px-0">
            Anything You Can Think Of,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">We Have It</span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4 lg:px-0">
            From concept to deployment, we provide comprehensive technology solutions 
            that transform your ideas into powerful digital experiences.
          </p>
        </div>

        {/* Mobile Carousel (lg:hidden) */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              ref={carouselRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-700/50 mx-auto max-w-sm">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-xl mb-4">
                      {service.icon}
                    </div>
                    
                    {/* Title & Description */}
                    <h3 className="text-lg font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                     <div className="mt-4 pt-4 border-t border-slate-700/50">
                       <button 
                         onClick={scrollToContact}
                         className="flex items-center text-blue-400 font-semibold text-sm cursor-magnetic hover:text-blue-300 transition-colors"
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
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center items-center mt-6">
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide 
                      ? 'bg-blue-400' 
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid (hidden lg:grid) */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-700/50 hover:border-slate-600">
                {/* Icon */}
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg lg:rounded-xl flex items-center justify-center text-xl lg:text-2xl mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                {/* Title & Description */}
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-300 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
                  {service.description}
                </p>
                 <div className="mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-slate-700/50">
                   <button 
                     onClick={scrollToContact}
                     className="flex items-center text-blue-400 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300 cursor-magnetic hover:text-blue-300"
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
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl lg:rounded-2xl p-6 lg:p-12 text-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full filter blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-white rounded-full filter blur-xl"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl lg:text-3xl font-bold mb-3 lg:mb-4">
                Don't See What You Need?
              </h3>
              <p className="text-blue-100 text-sm lg:text-base mb-6 lg:mb-8 max-w-2xl mx-auto">
                We're always expanding our services. If you have a unique requirement, 
                let's discuss how we can help bring your vision to life.
              </p>
              <button 
                 onClick={scrollToContact}
                 className="bg-slate-200 text-slate-900 px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-bold text-sm lg:text-base hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg cursor-magnetic"
               >
                 Let's Talk About Your Project
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
