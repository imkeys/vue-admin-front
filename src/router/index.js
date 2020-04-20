import Vue from 'vue'
import Router from 'vue-router'

// Router Modules
import dashboardRouter from './modules/dashboard'

Vue.use(Router)

// constantRoutes
export const constantRoutes = [
  dashboardRouter,
  {
    path: '/login',
    name: '登录',
    component: () => import('@/views/login/index')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export default router
