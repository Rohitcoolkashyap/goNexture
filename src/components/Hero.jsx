import React from "react";
import AnimatedSection from "./AnimatedSection";
import hd5 from "../Assets/hd5.png";

const Hero = () => {
  const handleGetStartedClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewPortfolioClick = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-br bg-primary-700 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <AnimatedSection
            animation="slide-left"
            className=" text-center lg:text-left flex-2"
          >
            <h1 className="font-bold mb-4 lg:mb-6 leading-[1.2] text-[50px]">
              Turning Ideas into
              <br className="hidden sm:block" />
              Scalable Digital Products
            </h1>

            <p className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 text-blue-100 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              We help you transform your vision into cutting-edge web solutions,
              apps, and growth strategies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start animate-slide-up px-4 lg:px-0">
              <button
                onClick={handleGetStartedClick}
                className="bg-yellow-400 text-gray-900 px-6 sm:px-2 lg:px-4 py-2 lg:py-2.5 rounded-[16px] font-[500] text-base lg:text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
              </button>
              <button
                onClick={handleViewPortfolioClick}
                className="border border-white/20 text-white px-6 sm:px-2 lg:px-4 py-2 lg:py-2.5 rounded-[16px] font-[500] text-base lg:text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                View Portfolio
              </button>
            </div>

            {/* Feature Grid */}
            <div className="flex gap-6 mt-8 lg:mt-12">
              <div
                className="border border-white/20 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-2xl max-w-lg"
                style={{ background: "rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex flex-col gap-8 lg:gap-12">
                  <div className="flex items-start space-x-3">
                    <div className="w-9 h-9 lg:w-11 lg:h-11 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm lg:text-base leading-snug">
                        Full-Stack Solutions
                      </p>
                      <p className="text-blue-200 text-xs lg:text-sm">
                        Frontend, Backend & Database
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-9 h-9 lg:w-11 lg:h-11 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm lg:text-base leading-snug">
                        Fast Development
                      </p>
                      <p className="text-blue-200 text-xs lg:text-sm">
                        Modern tech stack & tools
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="border border-white/20 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-2xl max-w-lg"
                style={{ background: "rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex flex-col gap-8 lg:gap-12">
                  <div className="flex items-start space-x-3">
                    <div className="w-9 h-9 lg:w-11 lg:h-11 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm lg:text-base leading-snug">
                        SEO & Marketing
                      </p>
                      <p className="text-blue-200 text-xs lg:text-sm">
                        Search optimization
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-9 h-9 lg:w-11 lg:h-11 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm lg:text-base leading-snug">
                        SEO & Marketing
                      </p>
                      <p className="text-blue-200 text-xs lg:text-sm">
                        Search optimization & visibility
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Content - Hero Image */}
          <AnimatedSection
            animation="slide-right"
            className=" flex justify-center lg:justify-end flex-1"
          >
            <img
              src={hd5}
              alt="Professional holding laptop and phone"
              className="relative z-10 w-full h-[500px] lg:h-[720px] object-cover"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
