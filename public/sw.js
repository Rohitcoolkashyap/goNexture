// Service Worker for GoNexture PWA
// Version 1.0.1 - Optimized for performance and bfcache

const CACHE_NAME = 'gonexture-v1.0.1';
const STATIC_CACHE = 'gonexture-static-v1.0.1';
const DYNAMIC_CACHE = 'gonexture-dynamic-v1.0.1';

const urlsToCache = [
  '/',
  '/favicon.svg',
  '/favicon.ico',
  '/manifest.json',
  '/sitemap.xml',
  // Static assets will be cached dynamically
];

const STATIC_ASSETS = [
  /\.(?:js|css|woff|woff2|eot|ttf|otf)$/,
  /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/,
];

const CACHE_STRATEGIES = {
  static: 'CacheFirst',
  dynamic: 'NetworkFirst',
  images: 'CacheFirst'
};

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error('Failed to cache resources during install:', error);
      })
  );
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Ensure the service worker takes control immediately
  self.clients.claim();
});

// Optimized fetch event handler for better performance and bfcache compatibility
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and external requests
  if (request.method !== 'GET' || url.origin !== location.origin) {
    return;
  }

  // Handle different types of requests with appropriate strategies
  if (STATIC_ASSETS.some(pattern => pattern.test(url.pathname))) {
    // Static assets: Cache First strategy
    event.respondWith(cacheFirst(request));
  } else if (request.destination === 'document') {
    // HTML pages: Network First strategy
    event.respondWith(networkFirst(request));
  } else {
    // Other resources: Network First strategy
    event.respondWith(networkFirst(request));
  }
});

// Cache First strategy for static assets
async function cacheFirst(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }
  
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.error('Cache first failed:', error);
    throw error;
  }
}

// Network First strategy for dynamic content
async function networkFirst(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }
    
    // Fallback for HTML pages
    if (request.destination === 'document') {
      const fallback = await cache.match('/');
      if (fallback) {
        return fallback;
      }
    }
    
    throw error;
  }
}

// Background sync for form submissions (if supported)
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(
      // Handle offline form submissions here
      syncContactForms()
    );
  }
});

// Handle contact form sync
async function syncContactForms() {
  try {
    // This would retrieve stored form data and submit it
    // Implementation depends on your specific needs
    console.log('Syncing contact forms...');
  } catch (error) {
    console.error('Failed to sync contact forms:', error);
  }
}

// Push notification event handler
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/favicon.svg',
      badge: '/favicon.svg',
      tag: 'gonexture-notification',
      data: data.url,
      actions: [
        {
          action: 'open',
          title: 'Open',
          icon: '/favicon.svg'
        },
        {
          action: 'close',
          title: 'Close'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click event handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.openWindow(event.notification.data || '/')
    );
  }
});

// Message event handler for communication with main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
