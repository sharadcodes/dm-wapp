self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
          `/`,
          `/index.html`,
          `/assets/main.css`,
          `/assets/main.js`,
          `/assets/icons-512.png`,
          `/assets/icons-192.png`,
          `/assets`
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});


/*

<!--
self.addEventListener("install", function(event) {
  event.waitUntil(preLoad());
});

var preLoad = function(){
  console.log("Installing web app");
  return caches.open("offline").then(function(cache) {
    console.log("caching index and important routes");
    return cache.addAll(["./index.html","./", "./offline.html"]);
  });
};

self.addEventListener("fetch", function(event) {
  event.respondWith(checkResponse(event.request).catch(function() {
    return returnFromCache(event.request);
  }));
  event.waitUntil(addToCache(event.request));
});

var checkResponse = function(request){
  return new Promise(function(fulfill, reject) {
    fetch(request).then(function(response){
      if(response.status !== 404) {
        fulfill(response);
      } else {
        reject();
      }
    }, reject);
  });
};

var addToCache = function(request){
  return caches.open("offline").then(function (cache) {
    return fetch(request).then(function (response) {
      console.log(response.url + " was cached");
      return cache.put(request, response);
    });
  });
};

var returnFromCache = function(request){
  return caches.open("offline").then(function (cache) {
    return cache.match(request).then(function (matching) {
     if(!matching || matching.status == 404) {
       return cache.match("offline.html");
     } else {
       return matching;
     }
    });
  });
};
*/
