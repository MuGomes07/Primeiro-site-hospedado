const CACHE_NAME = 'pwa-task-list-v1';
const urlsToCache = [
    '/Primeiro-site-hospedado/',
    '/Primeiro-site-hospedado/index.html',
    '/Primeiro-site-hospedado/style.css',
    '/Primeiro-site-hospedado/manifest.json',
    '/Primeiro-site-hospedado/icons/icon-192x192.png',
    '/Primeiro-site-hospedado/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});


