var responseContent = ""

self.addEventListener("fetch", function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return new Response(responseContent, {headers: {"Content-Type": "text/html"}});
    })
  );
});

var CACHE_NAME = "gih-cache-v3";
var CACHED_URLS = [
  "./playground_assets/home%20canvas-1-200h.png"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CACHED_URLS);
    })
  );
});