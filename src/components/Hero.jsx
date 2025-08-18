import React from 'react';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  const handleGetStartedClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewPortfolioClick = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-secondary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <AnimatedSection animation="slide-left" className="lg:w-1/2 text-center lg:text-left">
                         {/* Badge */}
             <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
               <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2"></span>
               Fresh ideas, modern solutions
             </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
             GoNexture
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
              Where Innovation Meets <span className="text-secondary-400 font-semibold">Execution</span>
            </p>

            <p className="text-base text-blue-200 mb-8 max-w-lg">
              Transform your ideas into reality with our cutting-edge web solutions. 
              From stunning designs to powerful functionality, we bring your vision to life.
            </p>

            {/* Popular Searches */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              <span className="text-blue-200 text-sm font-medium self-center">Popular:</span>
              <button className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-all duration-300 border border-white/20 cursor-default">
                Web Development
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-all duration-300 border border-white/20 cursor-default">
                Mobile Apps
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-all duration-300 border border-white/20 cursor-default">
                SEO & Marketing
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
              <button 
                onClick={handleGetStartedClick}
                className="bg-secondary-400 text-gray-900 px-6 py-2 rounded-full font-bold text-lg hover:bg-secondary-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
              </button>
              <button 
                onClick={handleViewPortfolioClick}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                View Portfolio
              </button>
            </div>

          </AnimatedSection>

                                {/* Right Content - Clean & Simple */}
           <AnimatedSection animation="slide-right" delay={0.2} className="lg:w-1/2 relative">
             <div className="relative mx-auto max-w-md">
               {/* Simple Feature Cards */}
               <div className="space-y-6">
                 {/* Card 1 */}
                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                   <div className="flex items-center space-x-4">
                     <div className="w-12 h-12 bg-secondary-400 rounded-lg flex items-center justify-center">
                       <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                       </svg>
                     </div>
                     <div>
                       <h3 className="text-white font-semibold text-lg">Full-Stack Solutions</h3>
                       <p className="text-blue-200 text-sm">Frontend, Backend & Database</p>
                     </div>
                   </div>
                 </div>

                 {/* Card 2 */}
                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                   <div className="flex items-center space-x-4">
                     <div className="w-12 h-12 bg-secondary-400 rounded-lg flex items-center justify-center">
                       <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                       </svg>
                     </div>
                     <div>
                       <h3 className="text-white font-semibold text-lg">Fast Development</h3>
                       <p className="text-blue-200 text-sm">Modern tech stack & tools</p>
                     </div>
                   </div>
                 </div>

                 {/* Card 3 */}
                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                   <div className="flex items-center space-x-4">
                     <div className="w-12 h-12 bg-secondary-400 rounded-lg flex items-center justify-center">
                       <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                       </svg>
                     </div>
                     <div>
                       <h3 className="text-white font-semibold text-lg">SEO & Marketing</h3>
                       <p className="text-blue-200 text-sm">Search optimization & visibility</p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
