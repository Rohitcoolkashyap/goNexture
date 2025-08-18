import React, { useState } from 'react';
import logo from "src/Assets/logo.svg"
   
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleServicesClick = (e) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after click
  };  

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after click
  };

  const handlePortfolioClick = (e) => {
    e.preventDefault();
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after click
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 z-30 animate-fade-in"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      <header className="bg-primary-600 text-white relative z-50">
      <nav className="container mx-auto px-4 lg:px-8 py-3 lg:py-4">
        <div className="flex items-center justify-between"> 
          {/* Logo */}
       
         <img src={logo} alt="Gonexture Logo" className='w-[180px] lg:w-[240px] h-auto'/>
         
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={handleServicesClick} className="hover:text-secondary-300 transition-colors">Services</button>
            <button onClick={handlePortfolioClick} className="hover:text-secondary-300 transition-colors">Our Portfolio</button>
            <button onClick={handleContactClick} className="hover:text-secondary-300 transition-colors">Contact Us</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-primary-700/50 rounded-lg transition-all duration-200 ease-in-out active:bg-primary-800/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-primary-600 shadow-lg border-t border-primary-500/30 animate-fade-in z-40">
            <div className="container mx-auto px-4 py-3">
              <div className="flex flex-col">
                <button 
                  onClick={handleServicesClick} 
                  className="w-full py-3 px-2 text-left text-white hover:text-secondary-300 hover:bg-primary-700/50 transition-all duration-200 ease-in-out font-medium border-b border-primary-500/20 last:border-b-0"
                >
                  Services
                </button>
                <button 
                  onClick={handlePortfolioClick} 
                  className="w-full py-3 px-2 text-left text-white hover:text-secondary-300 hover:bg-primary-700/50 transition-all duration-200 ease-in-out font-medium border-b border-primary-500/20 last:border-b-0"
                >
                  Our Portfolio
                </button>
                <button 
                  onClick={handleContactClick} 
                  className="w-full py-3 px-2 text-left text-white hover:text-secondary-300 hover:bg-primary-700/50 transition-all duration-200 ease-in-out font-medium border-b border-primary-500/20 last:border-b-0"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  );
};

export default Header;
