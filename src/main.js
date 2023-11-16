import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import bootstrapIcons from 'bootstrap-icons/font/bootstrap-icons.scss';
import './registerServiceWorker';
import App from './App.vue';
import router from './router';
import store from './store';
// createApp(App).use(store).use(router).mount('#app');
const APP = createApp(App);

let deferredPrompt;

function triggerInstallPrompt() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        // 檢查是否支援 beforeinstallprompt 事件
        if ('beforeinstallprompt' in registration) {
          registration.addEventListener('beforeinstallprompt', (event) => {
            // 阻止事件的默認行為
            event.preventDefault();
            // 儲存事件以便稍後觸發
            deferredPrompt = event;
            // 在這裡可以顯示一個提示，讓用戶決定是否安裝 PWA

            console.log(deferredPrompt);
          });
        }
      })
      .catch((error) => {
        console.error('Service Worker 注冊失敗:', error);
      });
  }
}
// 在全域添加事件監聽器
function clickHandler() {
  // 移除事件監聽器
  window.removeEventListener('click', clickHandler);
  // 在這裡觸發 PWA 安裝提示
  triggerInstallPrompt();
}

// 在全域添加點擊事件監聽器
window.addEventListener('click', clickHandler);

// if ('serviceWorker' in navigator) {
//   // 註冊 Service Worker
//   navigator.serviceWorker.register('./service-worker.js')
//     .then((registration) => {
//       console.log('Service Worker 注冊成功:', registration);
//     })
//     .catch((error) => {
//       console.error('Service Worker 注冊失敗:', error);
//     });
// }

APP.use(VueAxios, axios);
APP.use(bootstrapIcons);
APP.use(store);
APP.use(router);
APP.use(Loading);
APP.mount('#app');
