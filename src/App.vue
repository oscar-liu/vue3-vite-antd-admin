<!--
 * @Description: App
 * @Author: oscar
 * @Email: jincan.liu@gmail.com
 * @Date: 2023-07-18 18:38:52
 * @LastEditTime: 2023-07-19 15:07:25
 * @LastEditors: oscar
-->
<template>
  <a-config-provider
    :theme="{
      token : {
        borderRadius: 2,
      }
    }"
  >
  <RouterView />
  </a-config-provider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>