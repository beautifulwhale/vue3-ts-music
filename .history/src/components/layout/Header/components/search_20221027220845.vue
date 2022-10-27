<template>
    <el-autocomplete
    v-model="keyword"
    :fetch-suggestions="querySearchAsync"
    placeholder="Please input"
    @select="handleSelect"
  />
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const keyword = ref('');

</script>
<style lang='scss' scoped>
</style>