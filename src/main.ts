import { createApp } from 'vue'
import 'reset-css'
import "./assets/base.scss"
import "tailwindcss/tailwind.css"
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'

import registerIcon from './utils/registerIcon';
import '@/utils/extends';
import "./directives/index";
const app = createApp(App)
const pinia = createPinia();
app.use(router).use(pinia);

registerIcon(app)

app.mount('#app')
