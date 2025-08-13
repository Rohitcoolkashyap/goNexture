import React from 'react';

const SuccessStories: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      image: '👩‍💼',
      rating: 5,
      review: 'Working with freelancers through this platform has been amazing. The quality of work exceeded our expectations and the delivery was always on time. Highly recommended!',
      project: 'Website Redesign'
    },
    {
      name: 'Michael Chen',
      company: 'Creative Agency',
      image: '👨‍💻',
      rating: 5,
      review: 'Found the perfect developer for our mobile app project. The communication was excellent and the final product was exactly what we wanted. Will definitely use again!',
      project: 'Mobile App Development'
    },
    {
      name: 'Emily Davis',
      company: 'Marketing Pro',
      image: '👩‍🎨',
      rating: 5,
      review: 'The graphic designer we hired created stunning visuals for our brand. Professional, creative, and delivered everything ahead of schedule. Outstanding service!',
      project: 'Brand Identity Design'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-secondary-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-secondary-200 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear what our clients have to say about their experience working with our talented freelancers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Testimonial Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonials[0].image}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonials[0].name}</h4>
                  <p className="text-sm text-gray-600">{testimonials[0].company}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonials[0].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 italic">
                "{testimonials[0].review}"
              </p>
              
              <div className="text-sm text-primary-600 font-semibold">
                Project: {testimonials[0].project}
              </div>
            </div>

            {/* Additional Testimonials List */}
            <div className="space-y-6">
              {testimonials.slice(1).map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-lg mr-3">
                      {testimonial.image}
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h5>
                      <p className="text-xs text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">⭐</span>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-2">
                    "{testimonial.review.substring(0, 100)}..."
                  </p>
                  
                  <div className="text-xs text-primary-600 font-semibold">
                    {testimonial.project}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors">
              Read More Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
