import React from "react";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
    ],
    // services: [
    //   { name: "Find Talent", href: "#" },
    //   { name: "Find Work", href: "#" },
    //   { name: "Categories", href: "#" },
    //   { name: "Enterprise", href: "#" },
    // ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#" },
      // { name: "Trust & Safety", href: "#" },
      // { name: "Community", href: "#" },
    ],
    resources: [
      { name: "Success Stories", href: "#" },
      // { name: "Resources", href: "#" },
      // { name: "Guides", href: "#" },
      // { name: "Tools", href: "#" },
    ],
  };

  return (
    <footer className="bg-primary-600 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="py-6 lg:py-8 border-t border-primary-500">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Single Line Layout */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
              
              <div className="flex flex-wrap items-center gap-3 text-xs">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-secondary-300 transition-colors cursor-pointer bg-transparent border-none p-0 text-xs text-white"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="hover:text-secondary-300 transition-colors cursor-pointer bg-transparent border-none p-0 text-xs text-white"
              >
                Contact Us
              </button>
              <button
                onClick={() => {
                  const portfolioSection = document.getElementById('portfolio');
                  if (portfolioSection) {
                    portfolioSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="hover:text-secondary-300 transition-colors cursor-pointer bg-transparent border-none p-0 text-xs text-white"
              >
                Success Stories
              </button>
              </div>
              <div className="text-blue-100">
                © 2025 Gonexture. All rights reserved.
              </div>
            </div>
            
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between">
            <div className="text-blue-100 text-sm">
              © 2025 Gonexture. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center gap-6 text-blue-100 text-sm">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left text-sm text-blue-100"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left text-sm text-blue-100"
              >
                Contact Us
              </button>
              <button
                onClick={() => {
                  const portfolioSection = document.getElementById('portfolio');
                  if (portfolioSection) {
                    portfolioSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left text-sm text-blue-100"
              >
                Success Stories
              </button>

              <a
                href="https://www.linkedin.com/in/rohit-kashyap-5ab844180/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
