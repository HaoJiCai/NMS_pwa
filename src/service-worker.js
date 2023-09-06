import { precacheAndRoute } from 'workbox-precaching';
import { setCacheNameDetails } from 'workbox-core';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';

/* eslint no-underscore-dangle: 0 */
const manifest = self.__WB_MANIFEST;

// 設定相應緩存名字的前綴與後綴
setCacheNameDetails({
  prefix: 'medical-pwa',
  suffix: 'v1.0.0',
});
// service worker 盡快的得到更新和獲取頁面的控制權
self.addEventListener('install', (event) => {
  // eslint-disable-next-line no-unused-vars
  event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', (event) => {
  // eslint-disable-next-line no-unused-vars
  event.waitUntil(self.clientsClaim());
});

// 對我們請求的數據進行緩存，這裡採用 networkFirst 方式
registerRoute(
  /.*experiments\?.*/,
  new NetworkFirst(),
);
registerRoute(
  /.*experiments\/\d/,
  new NetworkFirst(),
);
registerRoute(
  /.*experiment_types.*/,
  new NetworkFirst(),
);

// 預緩存靜態資源
precacheAndRoute(manifest);
