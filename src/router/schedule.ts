/*
 * @Description: 定时任务
 * @Author: oscar
 * @Email: jincan.liu@gmail.com
 * @Date: 2023-07-19 11:24:09
 * @LastEditTime: 2023-07-19 15:59:48
 * @LastEditors: oscar
 */
import Layout from '@/layout/index.vue'
const routers = [
  {
    path: '/schedule',
    meta: {
      title: '定时任务'
    },
    component: Layout,
    redirect: '',
    children: [
      {
        path: 'manage',
        name: 'schedule-manage',
        meta: {
          title: '任务管理'
        },
        component: () => import('@/views/schedule/manage.vue')
      },
    ]
  },
  
]

export default {
  routers
}
