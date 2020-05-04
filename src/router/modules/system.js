import Layout from '@/layout'

export default {
  path: '/system',
  name: 'system',
  component: Layout,
  redirect: '/system/profile',
  meta: {
    title: 'system',
    icon: 'icon-xitong'
  },
  children: [
    {
      path: '/system/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "system" */ '@/views/system/profile.vue'),
      meta: {
        title: 'profile'
      }
    },
    {
      path: '/system/password',
      name: 'password',
      component: () => import(/* webpackChunkName: "system" */ '@/views/system/password.vue'),
      meta: {
        title: 'password'
      }
    }
  ]
}
