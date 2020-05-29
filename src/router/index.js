import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import Mine from '../components/Mine'
import Find from '../components/Find'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/Find',
      name: 'Find',
      component: Find
    }
  ]
})
