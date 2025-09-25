import { createApp } from 'vue'
import './style.css'
import '@jd/jdesign-vue/dist/index.css'
import JDesign from '@jd/jdesign-vue'
import App from './App.vue'

const app = createApp(App)
app.use(JDesign)
app.mount('#app')
