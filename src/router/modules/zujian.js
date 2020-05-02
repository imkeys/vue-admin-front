import Layout from '@/layout'

export default {
  path: '/zujian',
  name: 'zujian',
  component: Layout,
  redirect: '/zujian/zujianhua',
  meta: {
    title: 'zujian',
    icon: 'icon-chanpin'
  },
  children: [
    {
      path: '/zujian/zujianhua',
      name: 'zujianhua',
      component: () => import('@/views/zujianhua/index.vue'),
      meta: {
        title: 'zujianhua',
        icon: 'icon-chanpin'
      }
    },
    {
      path: '/zujian/zujianhua',
      name: 'zujianchuancan',
      component: () => import('@/views/zujianchuancan/index.vue'),
      meta: {
        title: 'zujianchuancan',
        icon: 'icon-chanpin'
      }
    }
  ]
}
