import Layout from '@/layout'

export default {
  path: '/zujian',
  name: 'zujian',
  component: Layout,
  redirect: '/zujian/zujianhua',
  meta: {
    icon: 'icon-chanpin'
  },
  children: [
    {
      path: '/zujian/zujianhua',
      name: 'zujianhua',
      component: () => import('@/views/zujianhua/index.vue'),
      meta: {
        icon: 'icon-chanpin'
      }
    },
    {
      path: '/zujian/zujianhua',
      name: 'zujianchuancan',
      component: () => import('@/views/zujianchuancan/index.vue'),
      meta: {
        icon: 'icon-chanpin'
      }
    }
  ]
}
