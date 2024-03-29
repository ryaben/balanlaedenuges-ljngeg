import './assets/main.css';
import './assets/fonts.css';
import './assets/media-queries.css';
import "vue-connect-wallet/dist/style.css";

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Notifications from '@kyvg/vue3-notification';

createApp(App).use(router).use(Notifications).mount('#app');
