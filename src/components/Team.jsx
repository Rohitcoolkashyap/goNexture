import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Rohit Kashyap',
      role: 'CEO & Founder',
      image: '👩‍💼',
      bio: 'Visionary leader with 5+ years experience in the freelance industry. Passionate about connecting talent with opportunity.',
      social: {
        linkedin: 'https://www.linkedin.com/in/rohit-kashyap-5ab844180',
        // twitter: '#',
        email: 'sarah@gonexture.com'
      }
    },
    {
      name: 'Tushar Arora',
      role: 'CTO',
      image: '👨‍💻',
      bio: 'Tech innovator focused on building scalable platforms. Expert in full-stack development and system architecture.',
      social: {
        linkedin: '#',
        // twitter: '#',
        email: 'michael@gonexture.com'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      image: '👩‍🎯',
      bio: 'Operations specialist ensuring smooth platform functionality and exceptional user experience for all stakeholders.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@gonexture.com'
      }
    },
    {
      name: 'David Thompson',
      role: 'Head of Marketing',
      image: '👨‍📊',
      bio: 'Marketing strategist with expertise in digital growth and community building. Drives platform visibility and engagement.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@gonexture.com'
      }
    }
  ];

  return (
    <section className="py-12 lg:py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Behind every great platform is a dedicated team. Meet the passionate individuals who make our freelance marketplace thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center h-full">
                {/* Profile Image */}
                <div className="mb-6">
                  <div className="w-24 h-24 lg:w-28 lg:h-28 mx-auto bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center text-4xl lg:text-5xl group-hover:scale-105 transition-transform duration-300">
                    {member.image}
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
                    className="w-10 h-10 bg-gray-100 hover:bg-primary-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 bg-gray-100 hover:bg-primary-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1k+</div>
              <div className="text-blue-100">Happy Clients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Dedicated Support</div>
            </div>
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Join Our Team?
          </h3>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            We're always looking for talented individuals who share our passion for connecting freelancers with amazing opportunities.
          </p>
          <button
            className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold transition-colors opacity-50 cursor-not-allowed"
            disabled
          >
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
