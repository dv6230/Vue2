import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', name: 'home', component: HomeView},
    {path: '/login', name: 'login', component: () => import('../views/LoginPage')},
    {path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')},
    {
        path: '/main',
        name: 'mainPage',
        component: () => import('../views/MainPage.vue'),
        children: [
            {path: 'First', name: 'fristPage', component: () => import('../views/FirstPage.vue')},
            {path: 'Second', name: 'secondPage', component: () => import('../views/SecondPage.vue')}
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
