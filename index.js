// cache
const staticCacheName = 'restaurant-cache-v1';
// files to be cached
let cacheFiles = [
    './',
    './index.html',
    './restaurant.html',
    './data/restaurants.json',
    './js/.', // all javascript files
    './css/.', // all css files
    './img/.', // all images
    '.index.html/.' // all restaurant pages
]
// listen for installation of cache
self.addEventListener('install', event => {
  event.waitUntil(
  caches.open(staticCacheName).then(cache => {
    return cache.addAll(cacheFiles);
  })
  .catch(error => {
    console.log('Error caching files ' + error);
  })
  // end of wait until
  );
// end of eventListener
});

// Clearing old cache
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
    .then(function(cacheNames) {
    // find cache object that starts with restaurant
    return Promise.all(
    cacheNames.filter(function(cacheName) {
    return cacheName.startsWith('restaurant') && cacheName != staticCacheName;
    }).map(function(cacheName) {
    // clear out any other caches
    return caches.delete(cacheName);
    })
    // end of promise
    );
    // end of then
    })
    // end of wait until
  );
// end of eventListener
});

// Return current cache
self.addEventListener('fetch', event => {
  event.respondWith(
    // check for chache matches
    caches.match(event.request)
      .then(function(response) {
      // if cache match found return it
        if (response) {
          return response;
        }
        // if no match found cache first fetch
        var copy = event.request.clone();
          return fetch(copy)
      .then(function(response) {
      // if no restaurant found
        if(!response) {
          console.log('No response from fetch');
          return response;
        }
        // if restaurant found, clone response
        var copy = response.clone();
        // open cache
        return caches.open(staticCacheName)
      .then(function(cache) {
      // add copy to cache
        cache.put(event.request, copy);
        // Return response
        return response;
      })
      .catch(function(error) {
        console.log('Error adding new cache');
      })
      // end of then after copy
      })
      // end of then after cache match found
      })
    // end of respond with
    )
// end of eventListener
});
