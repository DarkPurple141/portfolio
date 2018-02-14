import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Engineering from '@/pages/Engineering'
import Journalism from '@/pages/Journalism'
import Writing from '@/pages/Writing'

Vue.use(Router)
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}

export default new Router({
  scrollBehavior,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
         scrollToTop: true
      }
    },
    {
      path: '/engineer',
      name: 'Engineer',
      component: Engineering,
      meta: {
         scrollToTop: true
      }
    },
    {
      path: '/journo',
      name: 'Journalist',
      component: Journalism,
      meta: {
         scrollToTop: true
      }
    },
    {
      path: '/thinker',
      name: 'Thinker',
      component: Writing,
      meta: {
         scrollToTop: true
      },
      props: true
   },
   {
      path: '/thinker/read/*',
      name: 'Article',
      component: Writing,
      props: (route) => ({
            post: route.query.post,
        })
   },
   {
     path: '/thinker/:subject',
     name: 'BlogSubject',
     component: Writing,
     props: true
   },
   {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
         scrollToTop: true
      }
   }
  ]
})
