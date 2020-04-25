import Layout from '@/layout'

export default {
  path: '/',
  name: '概况',
  component: Layout,
  redirect: '/admin',
  children: [
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('@/views/admin/index.vue')
    }
  ]
}
