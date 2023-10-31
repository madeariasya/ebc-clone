import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'

import App from './App.vue'
import router from './router'

createApp(App)
.use(createPinia())
.use(createVuestic())
.use(router)

.mount('#app')
