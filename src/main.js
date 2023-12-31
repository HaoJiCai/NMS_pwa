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

// 在全域範圍中註冊 beforeinstallprompt 事件監聽器
let deferredPrompt;
let hasShownInstallPrompt = false;

if ('serviceWorker' in navigator) {
  // 註冊 Service Worker
  navigator.serviceWorker.register('./service-worker.js')
    .then((registration) => {
      console.log('Service Worker 注冊成功:', registration);
    })
    .catch((error) => {
      console.error('Service Worker 注冊失敗:', error);
    });
}

function showInstall() {
  document.addEventListener('click', () => {
    // 檢查是否已經顯示過通知
    if (!hasShownInstallPrompt && deferredPrompt) {
      // 設定已經顯示通知的標誌
      hasShownInstallPrompt = true;
      // 顯示安裝提示
      deferredPrompt.prompt();
      // 等待用戶的安裝反應
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('使用者已安裝 PWA');
        } else {
          console.log('使用者拒絕安裝 PWA');
        }
        // 清除 deferredPrompt
        deferredPrompt = null;
      });
    }
  });
}

window.addEventListener('beforeinstallprompt', (event) => {
  // 阻止默認的安裝提示
  event.preventDefault();
  // 儲存事件對象以供稍後使用
  deferredPrompt = event;
  showInstall();
});

APP.use(VueAxios, axios);
APP.use(bootstrapIcons);
APP.use(store);
APP.use(router);
APP.use(Loading);
APP.mount('#app');
