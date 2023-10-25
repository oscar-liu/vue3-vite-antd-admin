import { createRouter, createWebHistory } from 'vue-router'

import dashhoard from './dashhoard'
import schedule from './schedule'
import common from './common'
import system from './system'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/dashhoard/workbench' // default home
  },
  {
    path: '/login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login/index.vue')
  },
  ...dashhoard.routers,
  ...schedule.routers,
  ...system.routers,
  ...common.routers,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
