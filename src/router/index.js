import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../view/Index'
import Cart from '../view/Cart'
import Item from '../view/Item'
import Payment from '../view/Payment'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/item/:id',
    name: 'Item',
    component: Item
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
