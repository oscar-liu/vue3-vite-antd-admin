<!--
 * @Description: sider module
 * @Author: oscar
 * @Email: jincan.liu@gmail.com
 * @Date: 2023-07-19 09:20:12
 * @LastEditTime: 2023-07-20 13:40:54
 * @LastEditors: oscar
-->
<template>
  <a-layout-sider v-model:collapsed="state.collapsed" class="sider">
    <a-menu
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      :items="menus"
      @click="handleClick"
      :inline-collapsed="state.collapsed"
    />
    <div class="collapsed">
      <a-button @click="toggleCollapsed">
        <MenuUnfoldOutlined v-if="state.collapsed" />
        <MenuFoldOutlined v-else />
      </a-button>
    </div>
  </a-layout-sider>
</template>

<script lang="ts" setup>

import { reactive, watch, VueElement, h, createVNode } from 'vue';
import type { MenuProps, ItemType } from 'ant-design-vue';
import { useRouter } from 'vue-router'
import * as icons  from '@ant-design/icons-vue';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons-vue';

const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['1'],
  preOpenKeys: ['1'],
});

// 隐式any索引处理
const handerField =  function <T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// 创建icon
const CreateIcon = ( iconName: string|any ) => {
  return createVNode( handerField(icons, iconName) );
}

import { module1 } from '@/mock/menus'

const router = useRouter()

function getItem(
  label: VueElement | string,
  key: string,
  icon?: any,
  children?: ItemType[],
  type?: 'group',
): ItemType {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as ItemType;
}

const menus: ItemType[] = reactive([ ])
module1.map( (elem:any) => {
  let tmp = getItem( elem.label, String(elem.key), h( CreateIcon(elem.icon) ), elem.children)
  menus.push(tmp)
})

const handleClick: MenuProps['onClick'] = e => {
  router.push(`${e.item.path}`)
};

watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal;
  },
);

const toggleCollapsed = () => {
  state.collapsed = !state.collapsed;
  state.openKeys = state.collapsed ? [] : state.preOpenKeys;
};

</script>

<style scoped lang="less">
  .sider{
    width: 200px;
    background: #fff; 
    box-shadow: 3px 3px 5px #f2f2f2;
  }
  .collapsed{
    position: absolute;
    bottom: 10px;
    left: 15px;
    z-index: 10;
    display: flex;
  }

</style>
<style>
  .sider .ant-menu-item-icon{
    font-size: 16px !important;
  }
  .sider .ant-menu-light .ant-menu-item-selected{
    border-right: 2px solid #1677ff;
  }
</style>