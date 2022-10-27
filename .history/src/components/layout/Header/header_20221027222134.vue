<template>
  <div class="h-14 w-full">
    <div class="h-14 flex items-center justify-between w-2">
      <div class="">
        <el-icon class="mr-6 mt-2 ml-3">
          <ArrowLeftBold />
        </el-icon>
        <el-icon class="mr-4">
          <ArrowRightBold />
        </el-icon>
      </div>
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