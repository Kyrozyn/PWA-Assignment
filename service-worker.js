importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

//precache
workbox.precaching.precacheAndRoute([
    {url: '/dist/bundle.js', revision: 1},
    { url: '/index.html', revision: '1' },
    { url: '/pages/team.html', revision: '1' },
    { url: '/pages/allclub.html', revision: '1' },
    { url: '/pages/home.html', revision: '1' },
    { url: '/pages/favclub.html', revision: '1' },
    { url: '/nav.html', revision: '1' },
    { url: '/images/bola.png', revision: '1' },
    { url: '/manifest.json', revision: '1' },
]);

//cache CSS Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
    })
);

//Font
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    workbox.strategies.cacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);

workbox.routing.registerRoute(
    /^https:\/\/crests\.football-data\.org/,
    workbox.strategies.cacheFirst({
        cacheName: 'crests-footballdata',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);

//cache api
workbox.routing.registerRoute(
    /^https:\/\/api\.football-data\.org/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'api-footballdata',
    })
);

//image
workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.cacheFirst({
        cacheName: 'image',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);