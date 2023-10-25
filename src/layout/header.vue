<!--
 * @Description: 
 * @Author: oscar
 * @Email: jincan.liu@gmail.com
 * @Date: 2023-07-19 08:53:01
 * @LastEditTime: 2023-08-09 16:34:41
 * @LastEditors: oscar
-->
<template>
  <div class="top">
    <div class="info">
      <div class="item">
        <bell-outlined :style="{fontSize: '18px', color: '#fff'}" />
      </div>
      <div class="item act-tools">
        <a-avatar>
          <template #icon><UserOutlined /></template>
        </a-avatar>
        <a-popover title=" " trigger="click">
          <template #content>
            <p><UserOutlined />  个人中心</p>
            <a href="javascript:;" @click="exit"><login-outlined />  退出登录</a>
          </template>
          <div class="exit">Admin <down-outlined size="12" /></div>
        </a-popover>
        
        <!-- <div class="exit">Admin</div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { ref } from 'vue';
// const currentKey = ref<string[]>(['1']);
import { UserOutlined, BellOutlined } from '@ant-design/icons-vue';
const exit = () => {
  window.localStorage.clear()
}
</script>

<style scoped lang="less">
  .top{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .info{
      color: #fff;
      display: flex;
      align-items: center;
    }
  }
  .item{
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
  .act-tools{
    cursor: pointer;
  }
</style>
