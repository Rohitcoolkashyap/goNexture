import React from 'react';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    services: [
      { name: 'Find Talent', href: '#' },
      { name: 'Find Work', href: '#' },
      { name: 'Categories', href: '#' },
      { name: 'Enterprise', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Trust & Safety', href: '#' },
      { name: 'Community', href: '#' }
    ],
    resources: [
      { name: 'Success Stories', href: '#' },
      { name: 'Resources', href: '#' },
      { name: 'Guides', href: '#' },
      { name: 'Tools', href: '#' }
    ]
  };

  return (
    <footer className="bg-primary-600 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-primary-500">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-blue-100">
                Get the latest freelancing tips, job opportunities, and platform updates delivered to your inbox.
              </p>
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 outline-none"
                />
                <button className="bg-secondary-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-secondary-300 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded text-primary-600 flex items-center justify-center font-bold">
                  G
                </div>
                <span className="text-xl font-bold">GONEXTURE</span>
              </div>
              <p className="text-blue-100 text-sm mb-4">
                Connect with top freelancers and grow your business with quality services delivered on time.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-400 transition-colors">
                  📘
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-400 transition-colors">
                  🐦
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-400 transition-colors">
                  📷
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-400 transition-colors">
                  💼
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-blue-100 hover:text-white transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-blue-100 hover:text-white transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-blue-100 hover:text-white transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-blue-100 hover:text-white transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-primary-500">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-blue-100 text-sm mb-4 lg:mb-0">
              © 2024 Gonexture. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center gap-6 text-blue-100 text-sm">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="/accessibility" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
