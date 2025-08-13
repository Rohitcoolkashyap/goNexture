import React from 'react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: 'How to Find the Perfect Freelancer for Your Project',
      excerpt: 'Learn the essential tips and strategies for finding and hiring the right freelancer for your specific project needs.',
      image: '📝',
      category: 'Hiring Tips',
      readTime: '5 min read',
      date: 'Jan 15, 2024'
    },
    {
      title: 'Top 10 Freelancing Skills in High Demand',
      excerpt: 'Discover the most sought-after freelancing skills that can help you build a successful freelance career.',
      image: '🚀',
      category: 'Career',
      readTime: '7 min read',
      date: 'Jan 12, 2024'
    },
    {
      title: 'Building Long-term Client Relationships',
      excerpt: 'Master the art of maintaining strong client relationships that lead to repeat business and referrals.',
      image: '🤝',
      category: 'Business',
      readTime: '6 min read',
      date: 'Jan 10, 2024'
    },
    {
      title: 'Pricing Your Freelance Services Right',
      excerpt: 'A comprehensive guide to pricing your services competitively while ensuring profitability.',
      image: '💰',
      category: 'Pricing',
      readTime: '8 min read',
      date: 'Jan 8, 2024'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights in the freelancing world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                {/* Featured Image */}
                <div className="h-48 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                  {post.image}
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <button className="text-primary-600 text-sm font-semibold hover:text-primary-700 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
