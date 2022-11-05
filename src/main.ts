import { createApp } from 'vue'
import 'reset-css'
import "./assets/base.scss"
import "tailwindcss/tailwind.css"
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'nprogress/nprogress.css'
import Qrcode from './components/common/qrcode.vue';

import registerIcon from './utils/registerIcon';
import '@/utils/extends';
import "./directives/index";
const app = createApp(App)
const pinia = createPinia();
app.use(router).use(pinia);

registerIcon(app);
app.component('qr-code', Qrcode);

app.mount('#app')
