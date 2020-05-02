// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'

import store from './store'
import router from './router'
import App from './App'

import elementui from 'element-ui'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'

import '@/styles/common.css'
import '@/styles/animate.css'

// import '../mock'

const i18n = new VueI18n({
  locale: 'zh_CN',
  messages: {
    'zh_CN': require('@/languages/zh_CN.json'),
    'en': require('@/languages/en.json')
  }
})

// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

Vue.use(VueI18n, Cookies)
Vue.use(elementui, {
  size: 'medium',
  zIndex: 3000
})

Vue.prototype.$axios = axios

let vm = new Vue({
  router,
  i18n,
  store,
  el: '#app',
  render: h => h(App)
})

Vue.use({ vm })
