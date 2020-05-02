import Vue from 'vue'
import Router from 'vue-router'

// Router Modules
import adminRouter from './modules/admin'
import zujianRouter from './modules/zujian'
import articleRouter from './modules/article'

Vue.use(Router)

// constantRoutes
export const constantRoutes = [
  {
    path: '/',
    redirect: '/login',
    hidden: true
  },
  adminRouter,
  zujianRouter,
  articleRouter,
  {
    path: '/login',
    name: '登录',
    component: () => import('@/views/login/index'),
    meta: {
      title: 'login',
      icon: 'icon-tuichudenglu'
    }
  },
  {
    path: '/404',
    name: '404错误',
    component: () => import('@/views/error-page/404'),
    meta: {
      title: 'notFind',
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
