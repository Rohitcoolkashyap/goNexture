import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import useMagneticEffect from '../hooks/useMagneticEffect';

const HeroContactForm = () => {
  const magneticRef = useMagneticEffect(0.15);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 sm:p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:border-slate-600/50 group w-full">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-2">Start building</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        {/* Name Input */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
            placeholder="Full name"
          />
        </div>

        {/* Email Input */}
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
            placeholder="Email address"
          />
        </div>

        {/* Phone Input */}
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
            placeholder="Phone number"
          />
        </div>

        {/* Project Type Select */}
        <div>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
          >
            <option value="" className="text-slate-400">Select project type</option>
            <option value="web-development">Web Development</option>
            <option value="mobile-app">Mobile App</option>
            <option value="design">Design</option>
            <option value="marketing">Digital Marketing</option>
            <option value="writing">Content Writing</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message Textarea */}
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="3"
            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-sm"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-lg text-sm">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Message sent successfully!</span>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Error sending message. Please try again.</span>
            </div>
          </div>
        )}

        {/* Submit Button with Magnetic Effect */}
        <button
          ref={magneticRef}
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2.5 px-3 sm:py-3 sm:px-4 rounded-lg font-medium text-sm transition-all buttonStyle cursor-magnetic relative overflow-hidden group ${
            isSubmitting 
              ? 'bg-slate-600 text-slate-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25'
          }`}
        >
          <span className="relative z-10">
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </div>
            ) : (
              'Submit Project Request'
            )}
          </span>
          {!isSubmitting && (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
          )}
        </button>
      </form>
    </div>
  );
};

export default HeroContactForm;
