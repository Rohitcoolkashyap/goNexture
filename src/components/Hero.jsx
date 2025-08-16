import React from 'react';

const Hero = () => {
  const handleGetStartedClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-secondary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
                         {/* Badge */}
             <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 animate-fade-in">
               <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2"></span>
               Fresh ideas, modern solutions
             </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
              GONEXTURE
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-blue-100 animate-slide-up leading-relaxed">
              Where Innovation Meets <span className="text-secondary-400 font-semibold">Execution</span>
            </p>

            <p className="text-base text-blue-200 mb-8 animate-slide-up max-w-lg">
              Transform your ideas into reality with our cutting-edge web solutions. 
              From stunning designs to powerful functionality, we bring your vision to life.
            </p>

            {/* Popular Searches */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10 animate-slide-up">
              <span className="text-blue-200 text-sm font-medium self-center">Popular:</span>
              <button className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-all duration-300 border border-white/20">
                Website Design
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-all duration-300 border border-white/20">
                Logo Design
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-all duration-300 border border-white/20">
                WordPress
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
              <button 
                onClick={handleGetStartedClick}
                className="bg-secondary-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                View Portfolio
              </button>
            </div>

          
          </div>

          {/* Right Content - Enhanced Visual */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Main Circle */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-full flex items-center justify-center relative shadow-2xl animate-pulse">
                <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <svg className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                
                {/* Rating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-secondary-400 text-gray-900 px-6 py-3 rounded-full font-bold text-xl shadow-lg animate-bounce">
                  ⭐ 4.9
                </div>

                

           
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
