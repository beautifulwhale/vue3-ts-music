<template>
    <div class="h-14 flex items-center">
        <template v-if="isLogin === false">
            <el-avatar class="cursor-pointer" size="small" :src="circleUrl" @click="openLogin" />
            <span class="ml-2 cursor-pointer text-sm" @click="openLogin">点击登录</span>
        </template>
        <template v-else>
            <el-avatar class="cursor-pointer" size="small" :src="circleUrl" />
            <span class="ml-2 cursor-pointer text-sm">{{ nickName }}</span>
        </template>
        <IconParkVue class="ml-3 cursor-pointer" :icon="Platte"></IconParkVue>
        <IconParkVue class="ml-3 cursor-pointer" :icon="isFullscreen ? FullScreen : OffScreen"
            @click="handleScreenfull"></IconParkVue>
    </div>
    <loginVue :open-login="isLogin" @close-login="closeLogin"></loginVue>
</template>

<script setup lang='ts'>
import { FullScreen, OffScreen, Platte } from '@icon-park/vue-next';
import screenfull from 'screenfull';
import { onMounted, onUnmounted, ref, getCurrentInstance, watch } from 'vue';
import { useUserState } from '../../../../store/user';
import IconParkVue from '../../../common/IconPark.vue';
import loginVue from '../../login/login.vue';

const circleUrl = ref('');
const nickName = ref('');
const isFullscreen = ref(true);
const isLogin = ref(false);
const mitter = getCurrentInstance()?.appContext.config.globalProperties.mitter;
const store = useUserState();

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
};

//监视是否登录
watch(() => store.profileInfo, () => {
    console.log(store.profileInfo);
    circleUrl.value = store.profileInfo.avatarUrl;
    nickName.value = store.profileInfo.nickname;
})

onMounted(() => {
    mitter.on('closeLoginDialog', () => {
        isLogin.value = false;
    });
});
onUnmounted(() => {
    mitter.off('closeLoginDialog');
})
</script>
<style lang='scss' scoped>

</style>