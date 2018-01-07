// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Icon from 'vue-awesome/components/Icon'

import 'vue-awesome/icons/github'
import 'vue-awesome/icons/bitbucket'
import 'vue-awesome/icons/twitter'
import 'vue-awesome/icons/medium'
import 'vue-awesome/icons/circle'
import 'vue-awesome/icons/linkedin'
import 'vue-awesome/icons/reorder'
import 'vue-awesome/icons/arrow-down'
import 'vue-awesome/icons/gears'
import 'vue-awesome/icons/pencil'
import 'vue-awesome/icons/code'
import 'vue-awesome/icons/newspaper-o'
import 'vue-awesome/icons/envelope'

// globally (in your main .js file)
Vue.component('icon', Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
