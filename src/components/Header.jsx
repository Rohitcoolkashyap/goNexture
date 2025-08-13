import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary-600 text-white relative z-50">
      <nav className="container mx-auto px-4 py-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded text-primary-600 flex items-center justify-center font-bold text-sm">
              G
            </div>
            <span className="text-lg sm:text-xl font-bold">GONEXTURE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="hover:text-secondary-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-secondary-300 transition-colors">About Us</a>
            <a href="#services" className="hover:text-secondary-300 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-secondary-300 transition-colors">Find Talent</a>
            <a href="#contact" className="hover:text-secondary-300 transition-colors">Resources</a>
          </div>

          {/* Desktop Auth Buttons */}
          {/* <div className="hidden lg:flex items-center space-x-4">
            <button className="text-white hover:text-secondary-300 transition-colors">
              Log in
            </button>
            <button className="bg-white text-primary-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Sign up
            </button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-primary-500">
            <div className="flex flex-col space-y-4 mt-4">
              <a href="#home" className="hover:text-secondary-300 transition-colors">Home</a>
              <a href="#about" className="hover:text-secondary-300 transition-colors">About Us</a>
              <a href="#services" className="hover:text-secondary-300 transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-secondary-300 transition-colors">Find Talent</a>
              <a href="#contact" className="hover:text-secondary-300 transition-colors">Resources</a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-primary-500">
                <button className="text-left hover:text-secondary-300 transition-colors">
                  Log in
                </button>
                <button className="bg-white text-primary-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors text-center">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
