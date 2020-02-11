import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home"
import About from "@/components/About"
import Login from "@/page/Login"
import MainLayout from "@/page/MainLayout";
import store from "../store/index"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '首页',
        component: MainLayout,
        children: [
            {
                path: '/',
                name: 'Home页',
                component: Home
            }, {
                path: '/home',
                name: 'Home页',
                component: Home
            }, {
                path: '/about',
                name: '关于',
                component: About
            }
        ]
    },
    {
        path: '/login',
        name: '登录',
        component: Login
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    //可以在此判断是否登陆，如果未登陆则redirect到login
    if (to.path === '/login') {
        document.title = to.name
        next()
    } else if (store.getters['user/userName'] === '秦涛') {
        next()
    } else {
        next({
            path: '/login',
            query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
    }
    console.log(to.name)
    console.log(from.name)
})

export default router