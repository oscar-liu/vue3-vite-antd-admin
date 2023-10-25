<!--
 * @Description: 
 * @Author: oscar
 * @Email: jincan.liu@gmail.com
 * @Date: 2023-07-19 11:33:39
 * @LastEditTime: 2023-07-19 15:59:12
 * @LastEditors: oscar
-->
<template>
  <div class="breadcrumb">
    <a-breadcrumb style="margin: 16px 0">
      <!-- <a-breadcrumb-item>
        <router-link to="/">首页</router-link>
      </a-breadcrumb-item> -->
      <a-breadcrumb-item 
        v-for="(item, index) in listBread"
        :key=" index + item.path"
      >
        <span v-if="index == 0">{{ item.meta.title }}</span>
        <router-link v-else :to="item.path" class="strong">{{ item.meta.title }}</router-link>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <!-- <div class="top-hd">
      <div class="tit">{{currentTitle}}</div>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
import { useRoute } from "vue-router";

type breadcrumItem = {
  meta?: any,
  path: string
}
const breadcrumItems:Array<breadcrumItem> = []
const listBread = ref(breadcrumItems);
const route = useRoute();
const currentTitle: string | any = ref('')

// 监听路由变化
watchEffect(() => {
  listBread.value = route.matched
  currentTitle.value = route.matched[route.matched.length-1 ].meta.title || ""
});
</script>

<style scoped lang="less">
  .breadcrumb{
    padding: 0 24px;
    background-color: #fff;
    .strong{
      color: #000;
    }
  }
</style>