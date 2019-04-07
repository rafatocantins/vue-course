import Vue from 'vue'
import Router from 'vue-router'
import Homepage from './routes/Homepage'
import MonsterPlayer from './routes/MonsterPlayer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
        path: '/monster-player',
        name: 'monster-player',
        component: MonsterPlayer 
    }
  ],
  mode: 'history'
})



