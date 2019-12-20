// Instala o serviceWorker
self.addEventListener('install', (event) => {
    console.log('[ServiceWorker]: Installing...', event);
});

// Ativa o serviceWorker
self.addEventListener('activate', (event) => {
    console.log('[ServiceWorker]: Activating...', event);
    return self.clients.claim();
});

// Interceptador o serviceWorker
self.addEventListener('fetch', (event) => {
    console.log('[ServiceWorker]: fetching...', event);
    event.respondWith(fetch(event.request));
})