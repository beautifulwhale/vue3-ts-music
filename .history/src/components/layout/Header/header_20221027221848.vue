<template>
  <div class="h-14 w-full">
    <div class="h-14 flex items-center justify-between w-4/12">
      <div class=""></div>
      <el-icon>
        <ArrowLeftBold />
      </el-icon>
      <el-icon>
        <ArrowRightBold />
      </el-icon>
      <!-- 搜索框 -->
      <searchVue></searchVue>
    </div>
    <div class="">

    </div>
  </div>
</template>

<script setup lang='ts'>
import searchVue from './components/search.vue';
</script>
<style lang='scss' scoped>

</style>