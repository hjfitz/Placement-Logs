
self.addEventListener('fetch', async event => {
  const resp = await caches.match(event.request);
  event.respondWith(resp || fetch(event.request));
});
      
