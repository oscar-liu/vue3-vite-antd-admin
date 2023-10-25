<!--
 * @Description: 
 * @Author: oscar
 * @Email: jincan.liu@gmail.com
 * @Date: 2023-07-19 08:52:37
 * @LastEditTime: 2023-10-20 15:38:24
 * @LastEditors: oscar
-->
<template>
  <a-layout class="layout">

    <a-layout-header class="header">
      <div class="left">
        <div class="logo"></div>
        <div class="title">Admin</div>
      </div>
      <Header></Header>
    </a-layout-header>

    <a-layout>
      <Sider></Sider>
      <a-layout >
        <Breadcrumb></Breadcrumb>

        <a-layout-content :style="{ minHeight: '450px' }">
          <router-view v-slot="{ Component }">
            <keep-alive v-if="$route.meta.keepAlive">
              <component :is="Component" :key="$route.fullPath"></component>
            </keep-alive>
            <component :is="Component" v-if="!$route.meta.keepAlive"></component>
          </router-view>
        </a-layout-content>

      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>

import Header from './header.vue';
import Sider from './sider.vue'
import Breadcrumb from './breadcrumb.vue';

</script>

<style scoped lang="less">
.layout{
  min-height: 100vh;
  .header{
    padding-inline: 30px;
    line-height: 48px;
    height: 48px;
  }
  .left {
    float: left;
    min-width: 180px;
    color: #fff;
    display: flex;
    align-items: center;
    padding-right: 20px;
  }
  .logo{
    // background-color: #f2f2f2;
    width: 30px;
    height: 30px;
    border-radius: 6px;
    margin-right: 10px;
    background-image: url("../assets/img/logo.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .title{
    font-size: 18px;
  }
}

.ant-row-rtl #layout .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
