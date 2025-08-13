import React from 'react';

const TalentPool = () => {
  const avatars = [
    '👨‍💻', '👩‍🎨', '👨‍💼', '👩‍💻', '👨‍🎨', '👩‍💼',
    '👨‍🔬', '👩‍🔬', '👨‍⚖️', '👩‍⚖️', '👨‍🏫', '👩‍🏫',
    '👨‍💻', '👩‍🎨', '👨‍💼'
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Join Our Talent Pool
          </h2>
          
          {/* Avatar Grid */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            {avatars.map((avatar, index) => (
              <div 
                key={index} 
                className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center text-xl hover:scale-110 transition-transform duration-300"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeIn 0.5s ease-in-out forwards'
                }}
              >
                {avatar}
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-gray-600 text-lg mb-6">
              We have over <span className="font-bold text-primary-600">50,000+</span> talented freelancers signed up across all categories. Join our community of skilled professionals and start earning today.
            </p>
          </div>

          <button className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors">
            Join Now
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">50k+</div>
            <div className="text-gray-600">Active Freelancers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">100k+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">99%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentPool;
