import { createApp } from 'vue'
import App from './App.vue'
// 引入路由文件
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import request from './utils/request'
import api from './api/index'

const app = createApp(App)
app.config.globalProperties.$request = request;
// 引入api
app.config.globalProperties.$api = api;

app.use(ElementPlus)
// 加载路由信息
app.use(router)
app.mount('#app')
