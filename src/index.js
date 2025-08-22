import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals, { initPerformanceMonitoring } from "./reportWebVitals";
import config from "./config/config";
import { initSecurity } from "./utils/security";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Enable React.StrictMode in development for better debugging
if (config.isDevelopment) {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  root.render(<App />);
}

// Initialize security measures
initSecurity();

// Initialize performance monitoring
initPerformanceMonitoring();

// Start measuring performance and send to analytics
reportWebVitals((metric) => {
  // You can customize what to do with each metric here
  if (config.isDevelopment) {
    console.log('Performance metric:', metric);
  }
});

// Register service worker for PWA (if enabled)
if (config.features.pwa && 'serviceWorker' in navigator && config.isProduction) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
        
        // Update service worker when new content is available
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available; please refresh
              // Use a custom notification instead of confirm to avoid ESLint error
              console.log('New content is available! The page will reload automatically.');
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }
          });
        });
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Optimize for back/forward cache
if (config.isProduction) {
  // Remove any unload event listeners that prevent bfcache
  window.addEventListener('beforeunload', () => {
    // Keep this minimal to allow bfcache
  });
  
  // Listen for page show event to handle bfcache restoration
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      // Page was restored from bfcache
      console.log('Page restored from back/forward cache');
    }
  });
}
