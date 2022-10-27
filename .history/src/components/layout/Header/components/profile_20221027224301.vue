<template>
  <div>
    <div class="h-14">
        <el-avatar size="small" :src="circleUrl" />
        <span class="ml-2 text-xs">点击登录</span>
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