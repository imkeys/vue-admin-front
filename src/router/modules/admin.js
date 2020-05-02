import Layout from '@/layout'

export default {
  path: '/admin',
  component: Layout,
  redirect: '/admin',
  meta: {
    title: 'admin',
    icon: 'icon-tiaosepan'
  },
  children: [
    {
      path: '/admin',
      component: () => import('@/views/admin/index.vue')
    }
  ]
}
