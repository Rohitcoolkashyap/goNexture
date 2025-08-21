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
    <header className="bg-slate-900 text-white relative z-50 h-20 flex items-center border-none pt-8">
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <button 
            onClick={(e) => handleNavClick("home", e)}
            className="cursor-magnetic"
          >
            <img src={logo} alt="Logo" className="w-22 h-16 mr-2 object-contain" style={{width: '200px', height: '64px'}} />
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
          {/* <a
            href="#login"
            className="text-slate-300 hover:text-white transition-colors"
          >
            Login
          </a> */}
          <button
            onClick={(e) => handleNavClick("contact", e)}
            className="bg-slate-200 text-slate-900 font-medium px-5 py-2 rounded-xl hover:bg-white transition cursor-magnetic"
          >
            Get started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-slate-700/50 rounded-lg cursor-magnetic"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-800 border-t border-slate-700 mt-1 px-6 py-4 rounded-xl mx-4">
          <ul className="flex flex-col space-y-4 text-[15px] font-medium">
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={(e) => handleNavClick(item.action, e)}
                  className="block text-slate-300 hover:text-white transition-colors cursor-magnetic w-full text-left"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col space-y-3">
            <a
              href="#login"
              className="text-slate-300 hover:text-white transition-colors text-center cursor-magnetic"
            >
              Login
            </a>
            <button
              onClick={(e) => handleNavClick("contact", e)}
              className="bg-slate-200 text-slate-900 font-medium px-5 py-2 rounded-xl text-center hover:bg-white transition cursor-magnetic w-full"
            >
              Get started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
