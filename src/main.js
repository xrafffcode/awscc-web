import './assets/css/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Popover } from 'bootstrap';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

document.querySelectorAll('[data-bs-toggle="popover"]').forEach(node => new Popover(node))
