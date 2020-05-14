import Layout from '@/layout'

export default {
  path: '/admin',
  component: Layout,
  redirect: '/home',
  meta: {
    title: 'admin',
    icon: 'icon-zhuye',
    roles: ['maintain']
  },
  children: [
    {
      path: '/home',
      component: () => import(/* webpackChunkName: "admin" */ '@/views/admin/index.vue'),
      meta: {
        roles: ['maintain']
      }
    }
  ]
}
