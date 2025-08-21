import React, { useState } from "react";
import logo from "src/Assets/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", action: "home" },
    { name: "Services", action: "services" },
    { name: "Contact", action: "contact" },
  ];

  const handleNavClick = (action, e) => {
    e.preventDefault();
    
    switch (action) {
      case "home":
        window.location.href = "/";
        break;
      case "services":
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "contact":
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
        break;
      default:
        break;
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-slate-900 text-white relative z-50 h-20 flex items-center border-none pt-8">
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={(e) => handleNavClick("home", e)}
              className="cursor-magnetic"
            >
              <img src={logo} alt="Logo" className="w-22 h-16 mr-2 object-contain" style={{width: '180px', height: '58px'}} />
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center bg-slate-800/90 px-6 py-3 rounded-2xl border border-slate-700">
            <ul className="flex items-center space-x-6 text-[15px] font-medium">
              {navItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={(e) => handleNavClick(item.action, e)}
                    className="text-slate-300 hover:text-white transition-colors cursor-magnetic"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={(e) => handleNavClick("contact", e)}
              className="bg-slate-200 text-slate-900 font-medium px-5 py-2 rounded-xl hover:bg-white transition cursor-magnetic"
            >
              Get started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-slate-700/50 rounded-lg cursor-magnetic transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 animate-fade-in"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`lg:hidden fixed top-20 left-0 right-0 z-50 bg-slate-900 shadow-2xl animate-slide-down max-h-screen overflow-y-auto`}>
          <div className="px-4 sm:px-6 py-3">
            <ul className="flex flex-col space-y-0.5">
              {navItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={(e) => handleNavClick(item.action, e)}
                    className="block text-slate-300 hover:text-white active:text-blue-400 transition-colors cursor-magnetic w-full text-left text-base sm:text-lg font-medium py-2.5 px-2 hover:bg-slate-700/30 rounded-lg"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-3 border-t border-slate-700">
              <button
                onClick={(e) => handleNavClick("contact", e)}
                className="bg-slate-200 text-slate-900 font-semibold px-6 py-2.5 rounded-xl text-center hover:bg-white active:bg-slate-300 transition-all cursor-magnetic w-full text-base sm:text-lg shadow-lg hover:shadow-xl"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
