import React from 'react';
import tusharImage from '../Assets/team/Tushar.JPG';
import rohitImage from '../Assets/team/rk.png';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
const Team = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();
  
  const teamMembers = [
    {
      name: 'Rohit Kashyap',
      role: 'CEO & Founder',
      image: rohitImage,
      bio: 'Visionary leader and strategic thinker driving innovation in technology solutions. Passionate about transforming ideas into impactful digital experiences.',
      social: {
        linkedin: 'https://www.linkedin.com/in/rohit-kashyap-5ab844180',
        email: 'kashyaprohit8360@gmail.com'
      }
    },
    {
      name: 'Tushar Arora',
      role: 'CTO & Co-Founder',
      image: tusharImage,
      bio: 'Technical architect and innovation leader. Expert in full-stack development, system architecture, and building scalable technology solutions.',
      social: {
        linkedin: 'https://www.linkedin.com/in/tushar-arora-131a43166',
        email: 'tushararora1210@gmail.com'
      }
    },
    {
      name: 'Nitin Soni',
      role: 'Product Head',
      image: null,
      bio: 'Product strategist focused on user experience and market-driven solutions. Ensures every product delivers exceptional value to our clients.',
      social: {
        linkedin: '#',
        email: 'nitin@gonexture.com'
      }
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the passionate individuals who drive innovation and deliver exceptional technology solutions for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center h-full">
                {/* Profile Image */}
                <div className="mb-6">
                  <div className="w-24 h-24 lg:w-28 lg:h-28 mx-auto bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl lg:text-5xl">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>
                </div>

                {/* Member Info */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 hover:bg-primary-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.social.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 hover:bg-primary-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label={`Email ${member.name}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 text-center text-white">
            <div>
              <div className="text-2xl lg:text-4xl font-bold mb-2">3</div>
              <div className="text-blue-100">Expert Team Members</div>
            </div>
            <div>
              <div className="text-2xl lg:text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Students Served</div>
            </div>
            <div>
              <div className="text-2xl lg:text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
