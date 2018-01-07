import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Engineering from '@/pages/Engineering'
import Journalism from '@/pages/Journalism'
import Writing from '@/pages/Writing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/engineer',
      name: 'Engineering',
      component: Engineering
    },
    {
      path: '/journo',
      name: 'Journalism',
      component: Journalism
    },
    {
      path: '/blog',
      name: 'Teaching',
      component: Writing
    },
    {
      path: '/about',
      name: 'Skills',
      component: About
    }

  ]
})
