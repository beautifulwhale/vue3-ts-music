<template>
  <div>
    <el-avatar :size="50" :src="circleUrl" />
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const circleUrl = ref('')
</script>
<style lang='scss' scoped>
</style>