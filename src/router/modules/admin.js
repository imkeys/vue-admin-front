import Layout from '@/layout'

export default {
  path: '/',
  name: 'admin',
  component: Layout,
  redirect: '/admin',
  meta: {
    icon: 'icon-tiaosepan'
  },
  children: [
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/admin/index.vue'),
      meta: {
        icon: 'icon-tiaosepan'
      }
    }
  ]
}
