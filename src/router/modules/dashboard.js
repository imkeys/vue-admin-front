import Layout from '@/layout'

export default {
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  children: [
    {
      path: '/dashboard',
      component: () => import('@/views/dashboard/index.vue'),
      name: 'Dashboard',
      meta: {
        title: '概况',
        icon: 'dashboard',
        affix: true
      }
    }
  ]
}
