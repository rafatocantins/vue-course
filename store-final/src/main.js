import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './router'

// use Vue Router
Vue.use(VueRouter)

// Import our store.js containing all the modules
import store from './store/store'

// Get a filter from vue add it with a pipe
Vue.filter('currency', (value) => {
  return '$' +value.toLocaleString()
})

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
