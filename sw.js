const C='orca-v5';
self.addEventListener('install',e=>{self.skipWaiting();
  e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','manifest.json'])));});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.map(x=>x!==C&&caches.delete(x))))).then(()=>clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
