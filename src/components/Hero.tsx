import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-primary-600 text-white py-12 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              FREELANCE
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-8 text-blue-100 animate-slide-up px-4 lg:px-0">
              Find the perfect freelance services for your business needs
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-full p-2 flex flex-col sm:flex-row items-center mb-8 animate-slide-up mx-4 lg:mx-0">
              <input
                type="text"
                placeholder="Search for services..."
                className="flex-1 px-4 py-3 text-gray-700 outline-none rounded-full sm:rounded-l-full sm:rounded-r-none w-full sm:w-auto mb-2 sm:mb-0"
              />
              <button className="bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-colors w-full sm:w-auto">
                Search
              </button>
            </div>

            {/* Popular Searches */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8 px-4 lg:px-0">
              <span className="text-blue-200 text-sm">Popular:</span>
              <button className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm hover:bg-primary-400 transition-colors">
                Website Design
              </button>
              <button className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm hover:bg-primary-400 transition-colors">
                Logo Design
              </button>
              <button className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm hover:bg-primary-400 transition-colors">
                WordPress
              </button>
            </div>

            <button className="bg-secondary-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-secondary-300 transition-colors">
              Get Started
            </button>
          </div>

          {/* Right Content - Person Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Placeholder for person image */}
              <div className="w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center relative">
                <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                
                {/* Rating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-secondary-400 text-gray-900 px-4 py-2 rounded-full font-bold text-lg">
                  ⭐ 4.9
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-4 bg-gray-900 text-white p-4 rounded-lg shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">100k+</p>
                    <p className="text-xs text-gray-300">Active clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      {/* <div className="mt-16 pt-8 border-t border-primary-500">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-blue-200 mb-6">Trusted By</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-white font-bold text-lg">Google</div>
            <div className="text-white font-bold text-lg">🍎 Apple</div>
            <div className="text-white font-bold text-lg">Dropbox</div>
            <div className="text-white font-bold text-lg">NETFLIX</div>
            <div className="text-white font-bold text-lg">PayPal</div>
            <div className="text-white font-bold text-lg">stripe</div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
