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
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
