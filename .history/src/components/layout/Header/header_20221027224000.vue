<template>
  <div class="h-14 w-full flex justify-between it">
    <div class="h-14 flex items-center justify-between w-4/12">
      <div>
        <el-icon class="mr-4 mt-2 ml-3">
          <ArrowLeftBold />
        </el-icon>
        <el-icon class="mr-2">
          <ArrowRightBold />
        </el-icon>
      </div>
      <!-- 搜索框 -->
      <searchVue></searchVue>
    </div>
    <div class="">
      <profileVue></profileVue>
    </div>
  </div>
</template>

<script setup lang='ts'>
import searchVue from './components/search.vue';
import profileVue from './components/profile.vue';
</script>
<style lang='scss' scoped>

</style>