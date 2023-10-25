/*
 * @Description: 公共路由
 * @Author: oscar
 * @Email: jincan.liu@gmail.com
 * @Date: 2023-07-19 11:26:45
 * @LastEditTime: 2023-07-19 15:59:40
 * @LastEditors: oscar
 */
import Layout from '@/layout/index.vue'
const routers = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: { title: '404' },
    component: Layout,
    children: [
      {
        path: '',
        name: 'error-404',
        meta: {
          title: 'Error-404',
        },
        component: () => import('@/views/common/404.vue')
      },
    ]
  }
]

export default {
  routers
}
