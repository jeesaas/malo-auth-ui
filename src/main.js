import { createApp } from 'vue'
import App from './App.vue'
// 引入路由文件
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)
// 加载路由信息
app.use(router)
app.mount('#app')
