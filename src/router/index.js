import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/HelloWorld'
import Login from '@/components/login'

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
        }
    ]
})