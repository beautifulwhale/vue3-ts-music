<template>
  <div v-if="isRouterActive">
    <router-view v-slot="{ Component }">
      <transition name="router-fade" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script lang='ts' setup>
import { nextTick, provide, ref } from 'vue';

// 解决路由刷新白屏
let isRouterActive = ref(true);
const reload = () => {
  isRouterActive.value = false;
  nextTick(() => {
    isRouterActive.value = true;    
  })
}


provide('reload', {
  reload
})


</script>
<style lang='scss' scoped>

</style>