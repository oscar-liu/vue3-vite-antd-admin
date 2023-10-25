/*
 * @Description: 
 * @Author: oscar
 * @Email: jincan.liu@gmail.com
 * @Date: 2023-06-28 18:30:19
 * @LastEditTime: 2023-07-19 15:59:44
 * @LastEditors: oscar
 */
import Layout from '@/layout/index.vue'
const routers = [
  {
    path: '/dashhoard',
    name: 'Dashhoard',
    component: Layout,
    redirect: '',
    meta: {
      title: 'Dashhoard',
    },
    children: [
      {
        path: 'workbench',
        name: 'dashhoard-workbench',
        meta: {
          title: '工作台',
          // keepAlive: true
        },
        component: () => import('@/views/dashboard/workbench.vue')
      },
    ]
  },
  
]

export default {
  routers
}
