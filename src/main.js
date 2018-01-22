// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import VueAnalytics from 'vue-analytics'
import App from './App'
import router from './router'
import Icon from 'vue-awesome/components/Icon'
import './icons'

// globally (in your main .js file)
Vue.component('icon', Icon)
Vue.use(VueScrollTo)
Vue.use(VueAnalytics, {
  router,
  id: 'UA-25942721-4'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
