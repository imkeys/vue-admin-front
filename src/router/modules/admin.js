import Layout from '@/layout'

export default {
  path: '/admin',
  component: Layout,
  redirect: '/admin',
  meta: {
    title: 'admin',
    icon: 'icon-zhuye'
  },
  children: [
    {
      path: '/admin',
      component: () => import(/* webpackChunkName: "admin" */ '@/views/admin/index.vue'),
      meta: {}
    }
  ]
}
