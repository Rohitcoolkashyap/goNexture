import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Post a Job',
      description: 'Tell us what you need done and we\'ll find the perfect freelancer for you'
    },
    {
      number: '2',
      title: 'Choose freelancers',
      description: 'Browse through qualified freelancers and choose the best one for your project'
    },
    {
      number: '3',
      title: 'Connect with freelancers',
      description: 'Communicate directly with freelancers to discuss your project requirements'
    },
    {
      number: '4',
      title: 'Get your project done',
      description: 'Receive high-quality work delivered on time and within budget'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-primary-500 to-primary-700 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              How It Works
            </h2>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary-400 text-gray-900 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-blue-100 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 bg-secondary-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-secondary-300 transition-colors">
              Get Started Now
            </button>
          </div>

          {/* Right Content - Illustration */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Robot/Character Illustration Placeholder */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl flex items-center justify-center relative">
                <div className="text-8xl">🤖</div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary-400 rounded-full flex items-center justify-center text-2xl animate-bounce">
                  ⚡
                </div>
                <div className="absolute -top-2 -right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg">
                  ✨
                </div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-sm">
                  ✓
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 opacity-10 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400 opacity-10 rounded-full translate-y-24 -translate-x-24"></div>
    </section>
  );
};

export default HowItWorks;
