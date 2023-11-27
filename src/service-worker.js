/* eslint-disable */
import { precacheAndRoute } from 'workbox-precaching';
import { setCacheNameDetails } from 'workbox-core';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';

/* eslint no-underscore-dangle: 0 */
const manifest = self.__WB_MANIFEST;

// 添加需要快取的檔案
const cacheFiles = [
  '/NMS_pwa/index.html',
];

// 設定相應緩存名字的前綴與後綴
setCacheNameDetails({
  prefix: 'medical-pwa',
  suffix: 'v1.0.0',
});
// service worker 盡快的得到更新和獲取頁面的控制權
self.addEventListener('install', (event) => {
  event.waitUntil(
    // 預緩存靜態資源
    caches.open('my-cache').then((cache) => {
      return cache.addAll(cacheFiles);
    }),

    // service worker 盡快的得到更新和獲取頁面的控制權
    self.skipWaiting(),
  );
  // eslint-disable-next-line no-unused-vars
  // event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName.startsWith('my-cache') && cacheName !== 'my-cache-v1.0.0') {
            return caches.delete(cacheName);
          }
          return null;
        })
      );
    })
  );
  self.clientsClaim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request)
        .then((fetchResponse) => {
          if (fetchResponse && fetchResponse.status === 200) {
            const responseToCache = fetchResponse.clone();
            caches.open('my-cache').then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }

          return fetchResponse;
        })
        .catch((error) => {
          console.error('Fetch錯誤：', error.message);
        });
    })
  );
});

// 對我們請求的數據進行緩存，這裡採用 networkFirst 方式
registerRoute(
  /.*experiments\?.*/,
  new StaleWhileRevalidate(),
);
registerRoute(
  /.*experiments\/\d/,
  new StaleWhileRevalidate(),
);
registerRoute(
  /.*experiment_types.*/,
  new StaleWhileRevalidate(),
);

// 預緩存靜態資源
precacheAndRoute(manifest);
