import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Main.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/Main',
        name: 'Main',
        component: function () {
            return import( '../views/Main.vue')
        }
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
