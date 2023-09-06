import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import bootstrapIcons from 'bootstrap-icons/font/bootstrap-icons.scss';
import './registerServiceWorker';
import App from './App.vue';
import router from './router';
import store from './store';
// createApp(App).use(store).use(router).mount('#app');
const APP = createApp(App);

APP.use(VueAxios, axios);
APP.use(bootstrapIcons);
APP.use(store);
APP.use(router);
APP.mount('#app');
