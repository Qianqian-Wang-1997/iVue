import Vue from 'vue'
import Router from 'vue-router'

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

import Home from '../components/Home'
import Find from '../components/Find'
import Mine from '../components/tailpage/Mine'
import Work from '../components/tailpage/Work'
import Activity from '../components/tailpage/Activity'

import General from '../components/navpage/General'

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
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/activity',
      name: 'activity',
      component: Activity
    },
    {
      path: '/general',
      name: 'general',
      component: General
    }
  ]
})
