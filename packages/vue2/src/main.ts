/* eslint-disable vue/multi-word-component-names */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import VueAnalytics from 'vue-analytics'
import App from './App.vue'
import router from './router'
import Icon from 'vue-awesome/components/Icon.vue'
import './icons'
import './helpers'
import resource from './plugins/resource'
import * as content from './content/blog'

//import 'prismjs/themes/prism.css'
import 'prism-themes/themes/prism-atom-dark.css'
//import 'prism-themes/themes/prism-duotone-light.css'
import 'prismjs/components/prism-c.min.js'
import 'prismjs/components/prism-yaml.min.js'
import 'prismjs/components/prism-bash.min.js'

// globally (in your main .js file)
Vue.component('icon', Icon)

Vue.use(VueScrollTo)

Vue.use(VueAnalytics, {
  router,
  id: 'UA-25942721-4',
})

Vue.use(resource, {
  resources: content,
  endpoint: '/static/api',
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: (h) => h(App),
  el: '#app',
  router,
  components: { App },
})
