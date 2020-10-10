import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import store from './store'
import router from './router'

Vue.config.productionTip = false
AOS.init()

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
