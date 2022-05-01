import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'

// 定义路由跳转
const routes = [
    {
        name:'home',
        path:'/',
        meta:{
            title:'首页'
        },
        component:Home,
        // 重定向
        redirect:'/welcome',
        children:[
            {
                name:'welcome',
                path:'/welcome',
                meta:{
                    title:'欢迎'
                },
                component:Welcome
            }
        ]
    },
    {
        name:'login',
        path:'/login',
        meta:{
            title:'登陆'
        },
        component:()=> import('./../views/Login.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 对外暴露的名称为
export default router