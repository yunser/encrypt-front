import Vue from 'vue'
import Router from 'vue-router'

const Hash = resolve => require(['@/views/Hash'], resolve)
const HashHelp = resolve => require(['@/views/HashHelp'], resolve)
const About = resolve => require(['@/views/About'], resolve)

const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Hash
    },
    {
        path: '/hash/help',
        component: HashHelp
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
