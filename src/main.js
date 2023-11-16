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

window.addEventListener('beforeinstallprompt', (event) => {
  // 阻止默認的安裝提示，以便直接顯示自定義提醒
  event.preventDefault();
  // 直接顯示安裝提示
  event.prompt();
  // 等待用戶的安裝反應
  event.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('用戶已安裝 PWA');
    } else {
      console.log('用戶拒絕安裝 PWA');
    }
  });
});

APP.use(VueAxios, axios);
APP.use(bootstrapIcons);
APP.use(store);
APP.use(router);
APP.use(Loading);
APP.mount('#app');
