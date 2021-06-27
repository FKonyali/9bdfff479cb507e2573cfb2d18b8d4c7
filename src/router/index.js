import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
{
path: '/',
name: 'Home',
component: Home
},
{
path: '/select-room',
name: 'Select Room',
component: () => import('../views/SelectRoom.vue')
},
{
path: '/payment',
name: 'Payment',
component: () => import('../views/Payment.vue')
},
{
path: '/result',
name: 'Result',
component: () => import('../views/Result.vue')
}
]

const router = new VueRouter({
mode: 'history',
base: process.env.BASE_URL,
routes
})

export default router
