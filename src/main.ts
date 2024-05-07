import './assets/reset.css';
import './assets/main.css';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';

import { createApp } from 'vue';
import App from './App.vue';
import VueVirtualScroller from 'vue-virtual-scroller';

createApp(App).use(VueVirtualScroller).mount('#app');
