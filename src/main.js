// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import elementui from 'element-ui'
import App from './App'
import AppJs from './appjs.js'
import router from './router'
import VueI18n from 'vue-i18n'

import '@/styles/common.css'
import '@/styles/animate.css'

Vue.prototype.$axios = axios

Vue.use(elementui, {
  size: 'small'
})

const i18n = new VueI18n({
  locale: 'zh_CN',
  messages: {
    'zh_CN': require('@/languages/zh_CN.json'),
    'en': require('@/languages/en.json')
  }
})

Vue.use(AppJs, axios, VueI18n)

let vm = new Vue({
  router,
  i18n,
  el: '#app',
  render: h => h(App)
})

Vue.use({
  vm
})
