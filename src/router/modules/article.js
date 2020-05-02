import Layout from '@/layout'

export default {
  path: '/article',
  name: '文章',
  component: Layout,
  redirect: '/article/list',
  meta: {
    title: 'article',
    icon: 'icon-chanpin'
  },
  children: [
    {
      path: '/article/list',
      name: '文章列表',
      component: () => import('@/views/zujianhua/index.vue'),
      meta: {
        title: 'articleList',
        icon: 'icon-chanpin'
      }
    },
    {
      path: '/article/list/add',
      name: '添加文章',
      component: () => import('@/views/zujianchuancan/index.vue'),
      meta: {
        title: 'articleListAdd',
        icon: 'icon-chanpin'
      }
    }
  ]
}
