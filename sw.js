this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v2').then(function(cache) {
      return cache.addAll([
        '/transfermovil-web/',
        '/transfermovil-web/index.html',
        '/transfermovil-web/assets/css/main.css',
        '/transfermovil-web/assets/js/main.js',
        '/transfermovil-web/assets/images/icons/icon-72x72.png',
        '/transfermovil-web/assets/images/icons/icon-144x144.png',
        '/transfermovil-web/assets/images/icons/icon-512x512.png',
        '/transfermovil-web/manifest.json',
        '/transfermovil-web/qrcode.png'
      ]);
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