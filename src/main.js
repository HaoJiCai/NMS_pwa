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
  setTimeout(() => {
    // 顯示安裝提示
    if (deferredPrompt) {
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
  }, 1000);
}

function requestNotificationPermission() {
  if ('Notification' in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        const notification = new Notification('通知權限已啟用', {
          body: '您現在可以接收通知了！',
        });
        console.log(notification);
        showInstall();
      }
    });
  }
}

window.addEventListener('beforeinstallprompt', (event) => {
  // 阻止默認的安裝提示
  event.preventDefault();
  // 儲存事件對象以供稍後使用
  deferredPrompt = event;
  requestNotificationPermission();
});

APP.use(VueAxios, axios);
APP.use(bootstrapIcons);
APP.use(store);
APP.use(router);
APP.use(Loading);
APP.mount('#app');
