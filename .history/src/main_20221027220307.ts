import { createApp } from 'vue'
import 'reset-css'
import "./assets/base.scss"
import "tailwindcss/tailwind.css"
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import registerIcon from './utils/registerIcon'
const app = createApp(App)
const pinia = createPinia();
app.use(router).use(pinia);

registerIcon(app)

app.mount('#app')
