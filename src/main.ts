import { createApp } from 'vue'
import './style.css'
import '@jd/jdesign-vue/dist/index.css'
import JDesign from '@jd/jdesign-vue'
import App from './App.vue'
import { router } from './router'

const app = createApp(App)
app.use(JDesign)
app.use(router)
app.mount('#app')
