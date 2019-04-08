import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import { routes } from './router'

// use Vue Router
Vue.use(VueRouter)

// use Vue Resource
Vue.use(VueResource)

// Set the options for the endpoint using vue-resources
Vue.http.options.root = 'https://stock-trader-68c0c.firebaseio.com/';

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
