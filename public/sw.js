// Define a cache name
const CACHE_NAME = "cycly_cache";

const prefixUrl =
  "https://res.cloudinary.com/dyap7epew/image/upload/v1722255252/cycly/";

// Specify assets to cache
const ASSETS_TO_CACHE = [
  `${prefixUrl}titleBike.png`,
  `${prefixUrl}cityBike`,
  `${prefixUrl}mountainBike`,
  `${prefixUrl}roadBike`,
  `${prefixUrl}electricBike`,
  `${prefixUrl}showcaseBackground.png`,
  `${prefixUrl}joinUsBackground.png`,
  `${prefixUrl}marqueeImage.png`,
  `${prefixUrl}quoteBike.png`,
  `${prefixUrl}eBike1`,
  `${prefixUrl}mountainBike1`,
  `${prefixUrl}mountainBike3`,
  `${prefixUrl}roadBike1`,
  `${prefixUrl}roadBike2`,
  `${prefixUrl}mountainBike5`,
  `${prefixUrl}cityBike3`,
  `${prefixUrl}cityBike1`,
  `${prefixUrl}cityBike2`,
  `${prefixUrl}cityBike4`,
  `${prefixUrl}roadBike3`,
  `${prefixUrl}eBike3`,
  `${prefixUrl}cityBike5`,
  `${prefixUrl}eBike2`,
  `${prefixUrl}mountainBike4`,
  `${prefixUrl}roadBike4`,
  `${prefixUrl}eBike4`,
  `${prefixUrl}bikesImage`,
  `${prefixUrl}roadBikesImage2`,
  `${prefixUrl}cityBikesImage`,
  `${prefixUrl}electricBikesImage`,
  `${prefixUrl}mountainBikesImage`,
  `${prefixUrl}showcaseImage1`,
  `${prefixUrl}showcaseImage2`,
  `${prefixUrl}showcaseImage3`,
  `${prefixUrl}showcaseImage4`,
  `${prefixUrl}showcaseImage5`,
  `${prefixUrl}showcaseImage6`,
  `${prefixUrl}showcaseImage7`,
  `${prefixUrl}showcaseImage9`,
  `${prefixUrl}showcaseImage10`,
  `${prefixUrl}showcaseImageX`,

  // Add other paths to assets you want to cache
];

// Install event - cache the specified assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
});

// Fetch event - serve cached assets if available
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
