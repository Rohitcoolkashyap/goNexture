import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      budget: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-12 lg:py-12 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Start Your Project Today
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Fill out the form below and let's discuss how we can help you find the perfect freelancer for your project.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Form Section */}
              <div className="p-8 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select project type</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile App</option>
                        <option value="design">Design</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="writing">Content Writing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-lg"
                  >
                    Submit Project Request
                  </button>
                </form>
              </div>

              {/* Info Section */}
              <div className="bg-primary-600 text-white p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                    <p className="text-blue-100 mb-6">
                      Join thousands of satisfied clients who have found their perfect freelance match through our platform.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-secondary-400 text-gray-900 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Vetted Professionals</h4>
                        <p className="text-blue-100 text-sm">All freelancers are thoroughly screened and verified</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-secondary-400 text-gray-900 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Fast Matching</h4>
                        <p className="text-blue-100 text-sm">Get matched with suitable freelancers within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-secondary-400 text-gray-900 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Secure Payments</h4>
                        <p className="text-blue-100 text-sm">Safe and secure payment processing with escrow protection</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-secondary-400 text-gray-900 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">24/7 Support</h4>
                        <p className="text-blue-100 text-sm">Round-the-clock customer support for all your needs</p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="pt-6 border-t border-primary-500">
                    <p className="text-secondary-300 text-sm">
                      🕒 Average response time: <span className="font-semibold">2 hours</span>
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
