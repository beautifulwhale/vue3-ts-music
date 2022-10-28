<template>
    <div class="h-14 flex items-center">
        <el-avatar class="cursor-pointer" size="small" :src="circleUrl" />
        <span class="ml-2 cursor-pointer text-sm">点击登录</span>
        <IconParkVue class="ml-3 cursor-pointer" :icon="Platte"></IconParkVue>
        <IconParkVue class="ml-3 cursor-pointer" :icon="FullScreenOne"></IconParkVue>
    </div>
</template>

<script setup lang='ts'>
import { FullScreenOne, Platte } from '@icon-park/vue-next';
import { ref } from 'vue';
import IconParkVue from '../../../common/IconPark.vue';

const circleUrl = ref('');
</script>
<style lang='scss' scoped>

</style>