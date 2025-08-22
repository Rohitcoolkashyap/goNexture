// Security utilities for production deployment
import config from '../config/config';

/**
 * Content Security Policy configuration
 * Adjust these based on your specific needs and external resources
 */
export const CSP_DIRECTIVES = {
  'default-src': ["'self'"],
  'script-src': [
    "'self'",
    "'unsafe-inline'", // Required for inline styles in React
    "'unsafe-eval'", // Required for development, remove in production
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
    'https://fonts.googleapis.com',
  ],
  'style-src': [
    "'self'",
    "'unsafe-inline'", // Required for styled-components and CSS-in-JS
    'https://fonts.googleapis.com',
  ],
  'img-src': [
    "'self'",
    'data:', // For base64 images
    'https:', // Allow HTTPS images
    'blob:', // For generated images
  ],
  'font-src': [
    "'self'",
    'https://fonts.gstatic.com',
    'data:', // For base64 fonts
  ],
  'connect-src': [
    "'self'",
    config.api.baseUrl,
    'https://www.google-analytics.com',
    'wss:', // For WebSocket connections
  ],
  'frame-src': ["'none'"],
  'object-src': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
  'frame-ancestors': ["'none'"],
  'upgrade-insecure-requests': true,
};

/**
 * Generate CSP header string
 */
export const generateCSPHeader = () => {
  const directives = Object.entries(CSP_DIRECTIVES)
    .map(([key, values]) => {
      if (typeof values === 'boolean' && values) {
        return key;
      }
      if (Array.isArray(values)) {
        return `${key} ${values.join(' ')}`;
      }
      return null;
    })
    .filter(Boolean)
    .join('; ');

  return directives;
};

/**
 * Security headers for production deployment
 * These should be set at the server/CDN level
 */
export const SECURITY_HEADERS = {
  // Content Security Policy
  'Content-Security-Policy': generateCSPHeader(),
  
  // Prevent clickjacking
  'X-Frame-Options': 'DENY',
  
  // Prevent MIME type sniffing
  'X-Content-Type-Options': 'nosniff',
  
  // Enable XSS protection
  'X-XSS-Protection': '1; mode=block',
  
  // Force HTTPS
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  
  // Referrer policy
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  
  // Permissions policy
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
  
  // Cross-Origin policies
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Embedder-Policy': 'require-corp',
  'Cross-Origin-Resource-Policy': 'same-origin',
};

/**
 * Initialize security measures
 */
export const initSecurity = () => {
  if (!config.isProduction) return;

  // Disable right-click context menu (optional - can be intrusive)
  // document.addEventListener('contextmenu', (e) => e.preventDefault());

  // Disable F12 and other dev tools shortcuts (optional - can be bypassed)
  // document.addEventListener('keydown', (e) => {
  //   if (e.key === 'F12' || 
  //       (e.ctrlKey && e.shiftKey && e.key === 'I') ||
  //       (e.ctrlKey && e.shiftKey && e.key === 'J') ||
  //       (e.ctrlKey && e.key === 'U')) {
  //     e.preventDefault();
  //   }
  // });

  // Clear console in production (optional)
  if (console.clear && config.isProduction) {
    console.clear();
    console.log('%cGoNexture', 'color: #3b82f6; font-size: 2em; font-weight: bold;');
    console.log('%cThis is a browser feature intended for developers. Do not paste any code here.', 'color: #ef4444; font-size: 1.2em;');
  }
};

/**
 * Sanitize user input (basic implementation)
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

/**
 * Validate email format
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Rate limiting for client-side (basic implementation)
 */
class RateLimiter {
  constructor(maxRequests = 10, windowMs = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.requests = [];
  }

  isAllowed() {
    const now = Date.now();
    this.requests = this.requests.filter(time => now - time < this.windowMs);
    
    if (this.requests.length >= this.maxRequests) {
      return false;
    }
    
    this.requests.push(now);
    return true;
  }
}

// Export rate limiter instance for form submissions
export const formRateLimiter = new RateLimiter(5, 300000); // 5 requests per 5 minutes

export default {
  CSP_DIRECTIVES,
  SECURITY_HEADERS,
  generateCSPHeader,
  initSecurity,
  sanitizeInput,
  isValidEmail,
  formRateLimiter,
};
