/*
 * @Description: main
 * @Author: oscar
 * @Email: jincan.liu@gmail.com
 * @Date: 2023-07-18 18:37:13
 * @LastEditTime: 2023-07-19 15:58:52
 * @LastEditors: oscar
 */
import { createApp } from 'vue'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import "./assets/css/layout.less";

import App from './App.vue'
import router from './router'
import './permission'

const app = createApp(App)

//导入组件库
import * as Icons from '@ant-design/icons-vue'
// 注册组件
Object.keys(Icons).map(key => {
  app.component(key, Icons[key as keyof typeof Icons])
})

app.use(router)
app.use(Antd)
app.mount('#app')
