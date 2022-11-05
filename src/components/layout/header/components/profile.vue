<template>
    <div class="h-14 flex items-center">
        <el-avatar class="cursor-pointer" size="small" :src="circleUrl" />
        <span class="ml-2 cursor-pointer text-sm">点击登录</span>
        <IconParkVue class="ml-3 cursor-pointer" :icon="Platte"></IconParkVue>
        <IconParkVue class="ml-3 cursor-pointer" :icon="isFullscreen ? FullScreen : OffScreen"
            @click="handleScreenfull"></IconParkVue>
    </div>
</template>

<script setup lang='ts'>
import { FullScreen, OffScreen, Platte } from '@icon-park/vue-next';
import screenfull from 'screenfull';
import { ref } from 'vue';
import IconParkVue from '../../../common/IconPark.vue';

const circleUrl = ref('');
const isFullscreen = ref(true);
const handleScreenfull = () => {
    if (screenfull.isEnabled) {
        screenfull.toggle();
        isFullscreen.value = screenfull.isFullscreen;
    }
}
</script>
<style lang='scss' scoped>

</style>