self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('romantic-notes').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/quotes.html',
        '/style.css',
        '/manifest.json'
      ]);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
