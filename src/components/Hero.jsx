import React, { useEffect, useState } from 'react';
import AnimatedSection from './AnimatedSection';
import HeroContactForm from './HeroContactForm';
import RippleEffect from './RippleEffect';
import useMagneticEffect from '../hooks/useMagneticEffect';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const magneticRef1 = useMagneticEffect(0.2);
  const magneticRef2 = useMagneticEffect(0.15);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

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
    <section className="bg-slate-900 text-white py-8 sm:py-12 lg:py-20 relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Interactive Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse transition-transform duration-1000 ease-out"
          style={{
            transform: typeof window !== 'undefined' 
              ? `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`
              : 'translate(0px, 0px)'
          }}
        ></div>
        <div 
          className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse transition-transform duration-1000 ease-out" 
          style={{ 
            animationDelay: '2s',
            transform: typeof window !== 'undefined' 
              ? `translate(${(mousePosition.x - window.innerWidth / 2) * -0.015}px, ${(mousePosition.y - window.innerHeight / 2) * 0.025}px)`
              : 'translate(0px, 0px)'
          }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse transition-transform duration-1000 ease-out" 
          style={{ 
            animationDelay: '4s',
            transform: typeof window !== 'undefined' 
              ? `translate(${(mousePosition.x - window.innerWidth / 2) * 0.03}px, ${(mousePosition.y - window.innerHeight / 2) * -0.02}px)`
              : 'translate(0px, 0px)'
          }}
        ></div>
      </div>

      {/* Floating particles that follow mouse */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${10 + (i * 4.5)}%`,
              top: `${15 + (i * 3.2)}%`,
              transform: typeof window !== 'undefined' 
                ? `translate(${(mousePosition.x - window.innerWidth / 2) * (0.001 * (i + 1))}px, ${(mousePosition.y - window.innerHeight / 2) * (0.001 * (i + 1))}px)`
                : 'translate(0px, 0px)',
              transition: 'transform 0.5s ease-out',
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <AnimatedSection animation="slide-left" className="lg:w-1/2 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-slate-700/50">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Fresh ideas, modern solutions
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Where Innovation Meets{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Execution
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg lg:text-xl text-slate-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Transform your ideas into reality with our cutting-edge web solutions. 
              From stunning designs to powerful functionality, we bring your vision to life.
            </p>

            {/* Popular Services */}
            <div className="hidden lg:flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              <span className="text-slate-400 text-sm font-medium self-center">Popular:</span>
              <span className="bg-slate-800/50 backdrop-blur-sm text-slate-300 px-4 py-2 rounded-full text-sm border border-slate-700/50 hover:border-slate-600 transition-all duration-300">
                Web Development
              </span>
              <span className="bg-slate-800/50 backdrop-blur-sm text-slate-300 px-4 py-2 rounded-full text-sm border border-slate-700/50 hover:border-slate-600 transition-all duration-300">
                Mobile Apps
              </span>
              <span className="bg-slate-800/50 backdrop-blur-sm text-slate-300 px-4 py-2 rounded-full text-sm border border-slate-700/50 hover:border-slate-600 transition-all duration-300">
                SEO & Marketing
              </span>
            </div>

            {/* CTA Buttons with Magnetic Effect & Ripples */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <RippleEffect
                className="bg-[#bad7f5] text-[#0f131c] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl cursor-magnetic relative group inline-block"
                ref={magneticRef1}
                onClick={handleGetStartedClick}
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
              </RippleEffect>
              
              <RippleEffect
                className="border border-slate-600 hover:border-slate-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-800/50 transition-all duration-300 backdrop-blur-sm cursor-magnetic relative group inline-block"
                ref={magneticRef2}
                onClick={handleViewPortfolioClick}
              >
                <span className="relative z-10">View Portfolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg"></div>
              </RippleEffect>
            </div>

            {/* Stats or Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-800/50">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">8x</div>
                <div className="text-sm text-slate-400">efficiency gain</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">20x</div>
                <div className="text-sm text-slate-400">cost savings</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-slate-400">support</div>
              </div>
            </div>

          </AnimatedSection>

          {/* Right Content - Contact Form */}
          <AnimatedSection animation="slide-right" delay={0.2} className="lg:w-1/2 relative">
            <div className="relative mx-auto max-w-md">
              <HeroContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
