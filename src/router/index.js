import { createRouter, createWebHistory } from 'vue-router'
import arena from '../components/arena/index.vue'
import cashGames from '../components/cashGames/index.vue'
import cashier from '../components/arena/index.vue'
import donate from '../components/donate/index.vue'
import forgotPassword from '../components/forgotPassword/index.vue'
import inbox from '../components/inbox/index.vue'
import lobby from '../components/lobby/index.vue'
import login from '../components/login/index.vue'
import profile from '../components/profile/index.vue'
import register from '../components/register/index.vue'
import room from '../components/room/index.vue'
import school from '../components/school/index.vue'
import settings from '../components/settings/index.vue'
import sitngo from '../components/sitngo/index.vue'


const routes = [
    {
        path: '/',
        component: lobby
    },
    {
        path: '/arena',
        component: arena
    },
    {
        path: '/cash',
        component: cashGames
    },
    {
        path: '/cashier',
        component: cashier
    },
    {
        path: '/donate',
        component: donate
    },
    {
        path: '/forgot',
        component: forgotPassword
    },
    {
        path: '/inbox',
        component: inbox
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/profile',
        component: profile
    }, {
        path: '/register',
        component: register
    },
    {
        path: '/room',
        component: room
    },
    {
        path: '/school',
        component: school
    },
    {
        path: '/settings',
        component: settings
    },
    {
        path: '/sitngo',
        component: sitngo
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router