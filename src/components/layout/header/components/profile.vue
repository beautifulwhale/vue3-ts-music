<template>
    <div class="h-14 flex items-center">
        <el-avatar class="cursor-pointer" size="small" :src="circleUrl" @click="openLogin" />
        <span class="ml-2 cursor-pointer text-sm" @click="openLogin">点击登录</span>
        <IconParkVue class="ml-3 cursor-pointer" :icon="Platte"></IconParkVue>
        <IconParkVue class="ml-3 cursor-pointer" :icon="isFullscreen ? FullScreen : OffScreen"
            @click="handleScreenfull"></IconParkVue>
    </div>
    <loginVue :open-login="isLogin" @close-login="closeLogin"></loginVue>
</template>

<script setup lang='ts'>
import { FullScreen, OffScreen, Platte } from '@icon-park/vue-next';
import screenfull from 'screenfull';
import { ref } from 'vue';
import IconParkVue from '../../../common/IconPark.vue';
import loginVue from '../../login/login.vue';

const circleUrl = ref('');
const isFullscreen = ref(true);
const isLogin = ref(false);

// 全屏
const handleScreenfull = () => {
    if (screenfull.isEnabled) {
        screenfull.toggle();
        isFullscreen.value = screenfull.isFullscreen;
    }
}

// 登录
const openLogin = () => {
    isLogin.value = true;
}
// 关闭登录框
const closeLogin = () => {
    isLogin.value = false;
}
</script>
<style lang='scss' scoped>

</style>