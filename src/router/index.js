import Vue from 'vue'
import Router from 'vue-router'

// Router Modules
import adminRouter from './modules/admin'
import articleRouter from './modules/article'
import productRouter from './modules/product'
import orderRouter from './modules/order'
import userRouter from './modules/user'
import dataRouter from './modules/data'
import systemRouter from './modules/system'

Vue.use(Router)

// constantRoutes
export const constantRoutes = [
  {
    path: '/',
    redirect: '/login',
    hidden: true
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
    meta: {
      title: 'login',
      icon: 'icon-tuichudenglu'
    },
    hidden: true
  },
  adminRouter,
  articleRouter,
  productRouter,
  orderRouter,
  userRouter,
  dataRouter,
  systemRouter,
  {
    path: '/404',
    name: 'notFind',
    component: () => import('@/views/error-page/404'),
    meta: {
      title: 'notFind',
      icon: 'icon-bug'
    },
    hidden: true
  },
  {
    path: '/500',
    name: 'serveError',
    component: () => import('@/views/error-page/500'),
    meta: {
      title: 'serveError',
      icon: 'icon-bug'
    },
    hidden: true
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
