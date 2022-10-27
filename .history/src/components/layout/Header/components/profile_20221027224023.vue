<template>
  <div>
    <div class="">
        <el-avatar size="small" :src="circleUrl" />
        
    </div>

  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const circleUrl = ref('');
</script>
<style lang='scss' scoped>
</style>