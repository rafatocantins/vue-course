import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(Vuelidate)

export const serverBus = new Vue();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
