import Vue from 'vue'
import store from './store'
import { Message } from 'element-ui'
import router, { BASIC_ROUTES, ASYNC_ROUTES } from './router'
import { getToken, toggleLoginStatus, getFilteredRoutes } from '@/utils/auth'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routeInstance = new Vue({
  data () {
    return {
      currentRoute: []
    }
  }
})

Vue.prototype.$matchedRoutes = routeInstance

const WHITE_LIST = ['/login']

NProgress.configure({
  showSpinner: false
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      next({
        path: '/home'
      })
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          toggleLoginStatus(true)
          const roles = await store.dispatch('user/getInfo')
          const filteredRoutes = getFilteredRoutes(ASYNC_ROUTES, roles)
          router.addRoutes(filteredRoutes)
          routeInstance.currentRoute = BASIC_ROUTES.concat(filteredRoutes)
          next({
            ...to,
            replace: true
          })
        } catch (error) {
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next('/login?redirect=' + to.path)
        }
      }
    }
  } else {
    if (WHITE_LIST.includes(to.path)) {
      next()
    } else {
      next({
        path: `/login?redirect=${to.path}`
      })
    }
  }
})

router.afterEach(res => {
  NProgress.done()
})
