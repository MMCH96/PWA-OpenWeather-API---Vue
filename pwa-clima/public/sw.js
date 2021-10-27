const cacheName = 'clima-1';
const staticAssets = [
  './',
  './index.html',
  './manifest.json',
  './img/icons/clima-192x192.png',
  './img/icons/clima-512x512.png',
  './src/assets/clima2.png',
  './src/components/Clima.vue',
  './src/components/HelloWorld.vue',
  './src/router/index.js',
  './src/store/index.js',
  './src/views/About.vue',
  './src/views/Home.vue',
  './src/App.vue',
  './src/main.js',
  './src/registerServiceWorker.js',
  './babel.config.js',
  './package-lock.json',
  './package.json',
  './vue.config.js',
]; 

self.addEventListener('install', async e =>{
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets)
  return self.skipWaiting();
})


self.addEventListener('activate', e => {
  self.clients.claim();
})

self.addEventListener('fetch', async e =>{
  const req = e.request;
  const url = new URL(req.url)

  if(url.origin === location.origin){
    e.respondWith(cacheFirst(req))
  }else {
    e.respondWith(networkAndCache(req))
  }
})

async function cacheFirst(req){
  const cache = await caches.open(cacheName)
  const cached =  await cache.match(req)
  return cached || fetch(req)
}

async function networkAndCache(req){
  const cache = await caches.open(cacheName)
  try {
      const fresh = await fetch(req)
      await cache.put(req, fresh.clone())
      return  fresh
  } catch (e) {
      const cached = await cache.match(req)
      return cached
  }
}