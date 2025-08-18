import React, { useState, useEffect, useRef } from 'react';
import tusharImage from '../Assets/team/Tushar.JPG';
import rohitImage from '../Assets/team/rk.png';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
const Team = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const carouselRef = useRef(null);
  
  const teamMembers = [
    {
      name: 'Rohit Kashyap',
      role: 'CEO & Founder',
      image: rohitImage,
      bio: 'Visionary leader and strategic thinker driving innovation in technology solutions. Passionate about transforming ideas into impactful digital experiences.',
      social: {
        linkedin: 'https://www.linkedin.com/in/rohit-kashyap-5ab844180',
        email: 'kashyaprohit8360@gmail.com'
      }
    },
    {
      name: 'Tushar Arora',
      role: 'CTO & Co-Founder',
      image: tusharImage,
      bio: 'Technical architect and innovation leader. Expert in full-stack development, system architecture, and building scalable technology solutions.',
      social: {
        linkedin: 'https://www.linkedin.com/in/tushar-arora-131a43166',
        email: 'tushararora1210@gmail.com'
      }
    },
    {
      name: 'Nitin Soni',
      role: 'Product Head',
      image: null,
      bio: 'Product strategist focused on user experience and market-driven solutions. Ensures every product delivers exceptional value to our clients.',
      social: {
        linkedin: '#',
        email: 'nitin@gonexture.com'
      }
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
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
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
      setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
    }, 4500); // Change slide every 4.5 seconds
    
    return () => clearInterval(interval);
  }, [isMobile, isAutoPlayPaused, teamMembers.length]);

  return (
    <section ref={sectionRef} className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base px-4 lg:px-0">
            Meet the passionate individuals who drive innovation and deliver exceptional technology solutions for our clients.
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
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center mx-auto max-w-sm h-full">
                    {/* Profile Image */}
                    <div className="mb-4">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center overflow-hidden">
                        {member.image ? (
                          <img 
                            src={member.image} 
                            alt={`${member.name} - ${member.role}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-3xl">
                            {member.name.charAt(0)}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary-600 font-semibold mb-2 text-sm">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-xs leading-relaxed px-2">
                        {member.bio}
                      </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-3 pt-3 border-t border-gray-100">
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-100 hover:bg-primary-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.social.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-100 hover:bg-primary-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
                        aria-label={`Email ${member.name}`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
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
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide 
                      ? 'bg-primary-600' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid (hidden lg:grid) */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center h-full">
                {/* Profile Image */}
                <div className="mb-4 lg:mb-6">
                  <div className="w-20 h-20 lg:w-28 lg:h-28 mx-auto bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-3xl lg:text-5xl">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>
                </div>

                {/* Member Info */}
                <div className="mb-4">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1 lg:mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-2 lg:mb-3 text-sm lg:text-base">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-xs lg:text-sm leading-relaxed px-2 lg:px-0">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3 lg:space-x-4 pt-3 lg:pt-4 border-t border-gray-100">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-100 hover:bg-primary-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.social.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-100 hover:bg-primary-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label={`Email ${member.name}`}
                  >
                    <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-12 lg:mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl lg:rounded-3xl p-6 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center text-white">
            <div>
              <div className="text-xl lg:text-4xl font-bold mb-1 lg:mb-2">3</div>
              <div className="text-blue-100 text-sm lg:text-base">Expert Team Members</div>
            </div>
            <div>
              <div className="text-xl lg:text-4xl font-bold mb-1 lg:mb-2">50K+</div>
              <div className="text-blue-100 text-sm lg:text-base">Students Served</div>
            </div>
            <div>
              <div className="text-xl lg:text-4xl font-bold mb-1 lg:mb-2">99.9%</div>
              <div className="text-blue-100 text-sm lg:text-base">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
