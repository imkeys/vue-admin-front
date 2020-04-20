import { Layout } from '@/layout'

// 组件使用
import zujianchuancan from '@/views/zujianchuancan/index.vue'
import zujianhua from '@/views/zujianhua/index.vue'

export default {
  path: '/zujian',
  name: '组件',
  component: Layout,
  redirect: '/zujian/zujianhua',
  children: [
    {
      path: '/zujian/zujianhua',
      name: '组件化',
      component: zujianhua
    },
    {
      path: '/zujian/zujianhua',
      name: '组件传参',
      component: zujianchuancan
    }
  ]
}
