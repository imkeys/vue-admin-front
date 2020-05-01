import Vue from 'vue'
import Router from 'vue-router'

// Router Modules
import adminRouter from './modules/admin'
import zujianRouter from './modules/zujian'

Vue.use(Router)

// constantRoutes
export const constantRoutes = [
  {
    path: '/',
    redirect: '/admin',
    hidden: true
  },
  adminRouter,
  zujianRouter,
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
    meta: {
      icon: 'icon-tuichudenglu'
    }
  },
  {
    path: '/404',
    name: 'notFind',
    component: () => import('@/views/error-page/404'),
    meta: {
      icon: 'icon-bug'
    }
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
