import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import items from './modules/items'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cart,
    items
  },
  state: {
  },
  mutations: {
  }
})

export default store
