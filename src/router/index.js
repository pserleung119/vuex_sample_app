import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../view/Index'
import Cart from '../view/Cart'
import Item from '../view/Item'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
