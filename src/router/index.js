import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import MoreInfo from '@/components/MoreInfo'
import Find from '@/components/Find'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/MoreInfo',
      name: 'MoreInfo',
      componet: MoreInfo
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    }
  ]
})
