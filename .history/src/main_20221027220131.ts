import { createApp } from 'vue'
import 'reset-css'
import "./assets/base.scss"
import "tailwindcss/tailwind.css"
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { createPinia } from 'pinia'
const app = createApp(App)
const pinia = createPinia();
app.use(router).use(pinia);

app.mount('#app')
