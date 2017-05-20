const CACHE_NAME = 'talkie-cache';
const cache_urls = [
    './bundle.js'
];

self.addEventListener('install', function (event) {
    console.log('[SW] Install', event);

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(cache_urls);
            })
    );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});