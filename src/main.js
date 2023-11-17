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

// 在全域範圍中註冊 beforeinstallprompt 事件監聽器
let deferredPrompt;
function showInstallButton() {
  // 創建一個按鈕
  const installButton = document.createElement('button');
  installButton.textContent = '安裝 PWA';
  installButton.addEventListener('click', () => {
    // 顯示安裝提示
    if (deferredPrompt) {
      deferredPrompt.prompt();
      // 等待用戶的安裝反應
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('用戶已安裝 PWA');
        } else {
          console.log('用戶拒絕安裝 PWA');
        }
        // 清除 deferredPrompt
        deferredPrompt = null;
      });
    }
  });

  // 將按鈕添加到 DOM 中
  document.body.appendChild(installButton);
}

window.addEventListener('beforeinstallprompt', (event) => {
  // 阻止默認的安裝提示
  event.preventDefault();
  // 儲存事件對象以供稍後使用
  deferredPrompt = event;
  // 顯示安裝按鈕
  showInstallButton();
});

APP.use(VueAxios, axios);
APP.use(bootstrapIcons);
APP.use(store);
APP.use(router);
APP.use(Loading);
APP.mount('#app');
