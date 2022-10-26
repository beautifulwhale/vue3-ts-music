import { createApp } from 'vue'
import 'reset-css'
import moduleName from 'module';
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
const app = createApp(App)
const pinia = createPinia();
app.use(router).use(pinia);

app.mount('#app')
