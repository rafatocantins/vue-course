import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './router'

// use Vue Router
Vue.use(VueRouter)

// Import our store.js containing all the modules
import store from './store/store'

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
