import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/HelloWorld'
import Login from '@/components/login'
import Home from '@/components/home'
import Recommend from '@/components/recommend'
import Radio from '@/components/radio'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: "/login",
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: "Home",
            component: Home,
            children: [{
                    path: "recommend",
                    name: 'Recommend',
                    component: Recommend
                },
                {
                    path: "radio",
                    name: 'Radio',
                    component: Radio
                }
            ]
        }
    ]
})