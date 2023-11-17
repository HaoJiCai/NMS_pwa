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

// 自定義安裝提示
function showCustomInstallPrompt(event) {
  // 在這裡你可以顯示自己的安裝提示 UI，或直接呼叫 event.prompt() 觸發瀏覽器的內建提示
  event.prompt();
  // 等待用戶的安裝反應
  event.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('用戶已安裝 PWA');
    } else {
      console.log('用戶拒絕安裝 PWA');
    }
  });
}

// 監聽 beforeinstallprompt 事件
window.addEventListener('beforeinstallprompt', (event) => {
  // 阻止預設行為，以便自定義安裝提示
  event.preventDefault();
  console.log('觸發 beforeinstallprompt');
  // 做一些你想要的操作，例如顯示自定義的安裝提示
  showCustomInstallPrompt(event);
  console.log('觸發 showCustomInstallPrompt');
});

APP.use(VueAxios, axios);
APP.use(bootstrapIcons);
APP.use(store);
APP.use(router);
APP.use(Loading);
APP.mount('#app');
