<template>
  <div>
    <div class="h-14 align-middle">
        <el-avatar class="mt-4" size="small" :src="circleUrl" />
        <span class="ml-2 text-sm">点击登录</span>
    </div>
    <div>

    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const circleUrl = ref('');
</script>
<style lang='scss' scoped>
</style>