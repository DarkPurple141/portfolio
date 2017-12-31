import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Projects from '@/pages/Projects'
import Media from '@/pages/Media'
import About from '@/pages/About'
import Contact from '@/pages/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/media',
      name: 'Media',
      component: Media
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },

  ]
})
