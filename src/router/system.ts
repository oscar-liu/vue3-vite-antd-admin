/*
 * @Description: 系统模块
 * @Author: oscar
 * @Email: jincan.liu@gmail.com
 * @Date: 2023-07-19 11:24:09
 * @LastEditTime: 2023-07-19 15:59:48
 * @LastEditors: oscar
 */
import Layout from '@/layout/index.vue'
const routers = [
  {
    path: '/system',
    meta: {
      title: '系统管理'
    },
    component: Layout,
    redirect: '',
    children: [
      {
        path: 'user',
        name: 'system-user',
        meta: {
          title: '用户管理'
        },
        component: () => import('@/views/system/user.vue')
      },
      {
        path: 'role',
        name: 'role-manage',
        meta: {
          title: '角色管理'
        },
        component: () => import('@/views/system/role.vue')
      },
      {
        path: 'menu',
        name: 'menu-manage',
        meta: {
          title: '菜单管理'
        },
        component: () => import('@/views/system/menu.vue')
      },
      {
        path: 'param',
        name: 'param-manage',
        meta: {
          title: '参数管理'
        },
        component: () => import('@/views/system/param.vue')
      },
      {
        path: 'log/operation',
        name: 'log-operation',
        meta: {
          title: '操作日志'
        },
        component: () => import('@/views/system/log/operation.vue')
      },
      {
        path: 'log/error',
        name: 'log-error',
        meta: {
          title: '错误日志'
        },
        component: () => import('@/views/system/log/error.vue')
      },
    ]
  },
  
]

export default {
  routers
}
