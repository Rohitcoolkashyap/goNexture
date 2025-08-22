import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ContactForm = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Project type options
  const projectTypes = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile App' },
    { value: 'design', label: 'Design' },
    { value: 'marketing', label: 'Digital Marketing' },
    { value: 'writing', label: 'Content Writing' },
    { value: 'other', label: 'Other' }
  ];

  // Handle dropdown selection
  const handleProjectTypeSelect = (value) => {
    setFormData({
      ...formData,
      projectType: value
    });
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_a96wlco';
    const adminTemplateId = process.env.REACT_APP_EMAILJS_ADMIN_TEMPLATE_ID || 'template_grxaqx1';
    const clientTemplateId = process.env.REACT_APP_EMAILJS_CLIENT_TEMPLATE_ID || 'template_30qawu2';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'ksfz4uo4U5d7VqWQt';

    const templateAdmin = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company,
      project_type: formData.projectType,
      message: formData.message,
      to_name: 'GoNexture Team'
    };
    const templateClient = {
      from_name: formData.name,
      from_email: formData.email,
    };

    try {
      // Send to Admin
      await emailjs.send(serviceId, adminTemplateId, templateAdmin, publicKey);

      // Send Auto-Reply to Client
      await emailjs.send(serviceId, clientTemplateId, templateClient, publicKey);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="py-12 lg:py-16 pt-8 lg:pt-12 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-slate-700/50">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Contact Us
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Start Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Project Today</span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4 lg:px-0">
              Ready to bring your ideas to life? Fill out the form below and let's discuss how we can help you find the perfect freelancer for your project.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl lg:rounded-3xl shadow-lg overflow-hidden border border-slate-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Form Section */}
              <div className="p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs lg:text-sm font-semibold text-slate-300 mb-1 lg:mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 lg:px-4 lg:py-3 border border-slate-600 bg-slate-700/50 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm lg:text-base placeholder-slate-400"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs lg:text-sm font-semibold text-slate-300 mb-1 lg:mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 lg:px-4 lg:py-3 border border-slate-600 bg-slate-700/50 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm lg:text-base placeholder-slate-400"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs lg:text-sm font-semibold text-slate-300 mb-1 lg:mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 lg:px-4 lg:py-3 border border-slate-600 bg-slate-700/50 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm lg:text-base placeholder-slate-400"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs lg:text-sm font-semibold text-slate-300 mb-1 lg:mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 lg:px-4 lg:py-3 border border-slate-600 bg-slate-700/50 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm lg:text-base placeholder-slate-400"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                    <div>
                      <label htmlFor="projectType" className="block text-xs lg:text-sm font-semibold text-slate-300 mb-1 lg:mb-2">
                        Project Type *
                      </label>
                      <div className="relative" ref={dropdownRef}>
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="w-full px-3 py-2.5 lg:px-4 lg:py-3 border border-slate-600 bg-slate-700/50 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm lg:text-base text-left flex items-center justify-between"
                          aria-expanded={isDropdownOpen}
                          aria-haspopup="listbox"
                        >
                          <span className={formData.projectType ? 'text-white' : 'text-slate-400'}>
                            {formData.projectType 
                              ? projectTypes.find(type => type.value === formData.projectType)?.label 
                              : 'Select project type'
                            }
                          </span>
                          <svg
                            className={`w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-200 ${
                              isDropdownOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                          <div className="absolute z-50 w-full mt-1 bg-slate-700 border border-slate-600 rounded-lg shadow-xl overflow-hidden">
                            <div className="max-h-60 overflow-y-auto">
                              {projectTypes.map((type) => (
                                <button
                                  key={type.value}
                                  type="button"
                                  onClick={() => handleProjectTypeSelect(type.value)}
                                  className={`w-full px-3 py-2.5 lg:px-4 lg:py-3 text-left text-sm lg:text-base transition-colors hover:bg-slate-600 ${
                                    formData.projectType === type.value
                                      ? 'bg-blue-600 text-white'
                                      : 'text-slate-200'
                                  }`}
                                >
                                  {type.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Hidden input for form validation */}
                        <input
                          type="hidden"
                          name="projectType"
                          value={formData.projectType}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs lg:text-sm font-semibold text-slate-300 mb-1 lg:mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-3 py-2.5 lg:px-4 lg:py-3 border border-slate-600 bg-slate-700/50 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-sm lg:text-base placeholder-slate-400"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">Success!</span>
                      </div>
                      <p className="mt-1 text-sm">Your project request has been sent successfully. We'll get back to you soon!</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">Error!</span>
                      </div>
                      <p className="mt-1 text-sm">There was an error sending your request. Please try again or contact us directly.</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 lg:py-4 px-4 lg:px-6 rounded-lg font-semibold text-base lg:text-lg transition-colors cursor-magnetic ${
                      isSubmitting 
                        ? 'bg-slate-600 text-slate-400 cursor-not-allowed' 
                        : 'bg-slate-200 text-slate-900 hover:bg-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 lg:h-5 lg:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Request...
                      </div>
                    ) : (
                      'Submit Project Request'
                    )}
                  </button>
                </form>
              </div>

              {/* Info Section */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white p-6 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full filter blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-24 h-24 bg-white rounded-full filter blur-xl"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="space-y-6 lg:space-y-8">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Why Choose Us?</h3>
                      <p className="text-blue-100 mb-4 lg:mb-6 text-sm lg:text-base">
                        Join thousands of satisfied clients who have found their perfect freelance match through our platform.
                      </p>
                    </div>

                                      <div className="space-y-4 lg:space-y-6">
                      <div className="flex items-start space-x-3 lg:space-x-4">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-slate-200 text-slate-900 rounded-full flex items-center justify-center font-bold text-xs lg:text-sm flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1 text-sm lg:text-base">Vetted Professionals</h4>
                          <p className="text-blue-100 text-xs lg:text-sm">All freelancers are thoroughly screened and verified</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 lg:space-x-4">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-slate-200 text-slate-900 rounded-full flex items-center justify-center font-bold text-xs lg:text-sm flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1 text-sm lg:text-base">Fast Matching</h4>
                          <p className="text-blue-100 text-xs lg:text-sm">Get matched with suitable freelancers within 24 hours</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 lg:space-x-4">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-slate-200 text-slate-900 rounded-full flex items-center justify-center font-bold text-xs lg:text-sm flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1 text-sm lg:text-base">Secure Payments</h4>
                          <p className="text-blue-100 text-xs lg:text-sm">Safe and secure payment processing with escrow protection</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 lg:space-x-4">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-slate-200 text-slate-900 rounded-full flex items-center justify-center font-bold text-xs lg:text-sm flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1 text-sm lg:text-base">24/7 Support</h4>
                          <p className="text-blue-100 text-xs lg:text-sm">Round-the-clock customer support for all your needs</p>
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
      </div>
    </section>
  );
};

export default ContactForm;
