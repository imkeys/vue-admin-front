import Vue from 'vue'
import Router from 'vue-router'

// Router Modules
// import adminRouter from './modules/admin'

Vue.use(Router)

// constantRoutes
export const constantRoutes = [
  // adminRouter,
  {
    path: '/{index}?',
    redirect: '/admin'
  },
  {
    path: '/admin',
    name: '概况',
    component: () => import('@/views/admin/index.vue')
  },
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
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

export default router
