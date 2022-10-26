import { createApp } from 'vue'
import 'reset-css'
import App from './App.vue'
import router from './router'
import {} from 'pinia'
const app = createApp(App)

app.use(router)

app.mount('#app')
