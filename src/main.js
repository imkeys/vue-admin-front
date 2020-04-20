// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import elementui from 'element-ui'
import App from './App'
import AppJs from './appjs.js'
import router from './router'

import '@/assets/css/common.css'
import '@/assets/css/animate.css'

Vue.prototype.$axios = axios

Vue.use(elementui, {
  size: 'small'
})

Vue.use(AppJs, axios)

let vm = new Vue({
  router,
  el: '#app',
  render: h => h(App)
})

Vue.use({
  vm
})
