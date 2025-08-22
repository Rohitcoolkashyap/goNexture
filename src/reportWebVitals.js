import config from './config/config';

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB, getINP }) => {
      const reportMetric = (metric) => {
        // Call the provided callback
        onPerfEntry(metric);
        
        // Log to console in development
        if (config.isDevelopment) {
          console.log(`Web Vital - ${metric.name}:`, metric.value, metric);
        }
        
        // Send to analytics in production (if enabled)
        if (config.isProduction && config.analytics.enabled) {
          // Send to Google Analytics
          if (config.analytics.googleAnalyticsId && window.gtag) {
            window.gtag('event', metric.name, {
              custom_parameter_1: metric.value,
              custom_parameter_2: metric.id,
              custom_parameter_3: metric.navigationType,
            });
          }
          
          // You can also send to other analytics services
          // Example: Send to your own analytics endpoint
          sendToAnalytics(metric);
        }
      };

      // Measure all Core Web Vitals
      getCLS(reportMetric);
      getFID(reportMetric);
      getFCP(reportMetric);
      getLCP(reportMetric);
      getTTFB(reportMetric);
      
      // Measure Interaction to Next Paint (INP) - new metric
      if (getINP) {
        getINP(reportMetric);
      }
    });
  }
};

// Function to send metrics to your own analytics endpoint
const sendToAnalytics = async (metric) => {
  try {
    // Only send in production and if API is available
    if (!config.isProduction || !config.api.baseUrl) return;
    
    await fetch(`${config.api.baseUrl}/analytics/web-vitals`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...metric,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: Date.now(),
      }),
    });
  } catch (error) {
    // Silently fail - don't interrupt user experience
    if (config.isDevelopment) {
      console.warn('Failed to send web vitals to analytics:', error);
    }
  }
};

// Enhanced performance observer for additional metrics
export const initPerformanceMonitoring = () => {
  if (!config.isProduction) return;

  // Monitor long tasks
  if ('PerformanceObserver' in window) {
    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 50) { // Tasks longer than 50ms
            console.warn('Long task detected:', entry.duration + 'ms');
            // You can send this to your analytics
          }
        });
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      // PerformanceObserver not supported
    }
  }

  // Monitor memory usage (if available)
  if ('memory' in performance) {
    const checkMemory = () => {
      const memory = performance.memory;
      const memoryUsage = {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit,
      };
      
      // Alert if memory usage is high
      const usagePercentage = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
      if (usagePercentage > 90) {
        console.warn('High memory usage detected:', usagePercentage.toFixed(2) + '%');
      }
    };
    
    // Check memory every 30 seconds
    setInterval(checkMemory, 30000);
  }
};

export default reportWebVitals;
