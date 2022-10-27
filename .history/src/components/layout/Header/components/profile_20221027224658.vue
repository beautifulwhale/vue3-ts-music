<template>
    <div class="h-14 flex items-center">
        <el-avatar size="small" :src="circleUrl" />
        <span class="ml-2 text-sm">点击登录</span>
        <IconParkVue :></IconParkVue>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import IconParkVue from '../../../common/IconPark.vue';

const circleUrl = ref('');
</script>
<style lang='scss' scoped>

</style>