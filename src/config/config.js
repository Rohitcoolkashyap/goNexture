// Configuration file for GoNexture
// This file centralizes all configuration values

const config = {
  // App Information
  app: {
    name: process.env.REACT_APP_NAME || 'GoNexture',
    version: process.env.REACT_APP_VERSION || '1.0.0',
    description: process.env.REACT_APP_DESCRIPTION || 'Where Innovation Meets Execution',
    url: process.env.REACT_APP_URL || 'https://gonexture.com',
  },

  // API Configuration
  api: {
    baseUrl: process.env.REACT_APP_API_URL || 'https://api.gonexture.com',
    timeout: 10000,
  },

  // Analytics Configuration
  analytics: {
    googleAnalyticsId: process.env.REACT_APP_GOOGLE_ANALYTICS_ID,
    googleTagManagerId: process.env.REACT_APP_GOOGLE_TAG_MANAGER_ID,
    enabled: process.env.REACT_APP_ENABLE_ANALYTICS === 'true',
  },

  // Feature Flags
  features: {
    pwa: process.env.REACT_APP_ENABLE_PWA !== 'false',
    errorTracking: process.env.REACT_APP_ENABLE_ERROR_TRACKING !== 'false',
    profiler: process.env.REACT_APP_ENABLE_PROFILER === 'true',
  },

  // Contact Information
  contact: {
    email: process.env.REACT_APP_CONTACT_EMAIL || 'hello@gonexture.com',
    phone: process.env.REACT_APP_CONTACT_PHONE || '',
  },

  // Social Media Links
  social: {
    facebook: process.env.REACT_APP_FACEBOOK_URL || '',
    twitter: process.env.REACT_APP_TWITTER_URL || '',
    linkedin: process.env.REACT_APP_LINKEDIN_URL || '',
    instagram: process.env.REACT_APP_INSTAGRAM_URL || '',
  },

  // Environment Detection
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',

  // Performance Settings
  performance: {
    enableProfiling: process.env.NODE_ENV === 'development',
    chunkSize: 250000, // 250KB chunks
    preloadImages: true,
  },

  // SEO Configuration
  seo: {
    defaultTitle: 'GoNexture - Where Innovation Meets Execution',
    defaultDescription: 'Transform your ideas into reality with cutting-edge web solutions. From stunning designs to powerful functionality, we bring your vision to life.',
    defaultKeywords: 'web development, mobile apps, SEO, digital marketing, UI/UX design',
    defaultImage: '/og-image.jpg',
    twitterHandle: '@gonexture',
  },
};

export default config;
