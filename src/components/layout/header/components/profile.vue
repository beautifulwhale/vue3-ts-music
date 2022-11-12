<template>
    <div class="h-14 flex items-center">
        <template v-if="!loginState">
            <el-avatar class="cursor-pointer" size="small" :src="circleUrl" @click="openLogin" />
            <span class="ml-2 cursor-pointer text-sm" @click="openLogin">点击登录</span>
        </template>
        <template v-else>
            <el-dropdown>
                <el-avatar class="cursor-pointer" size="small" :src="avatarUrl" />
                <template #dropdown>
                    <el-dropdown-menu>
                        <span class="cursor-pointer" @click="handleLogout">退出登录</span>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
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
import IconParkVue from '../../../common/IconPark.vue';
import loginVue from '../../login/login.vue';
import { LStorage } from '../../../../utils/storage';
import { logout } from '../../../../api/login';
import handleProfile from '../../login/hooks/handleProfile';
import { useUserState } from '../../../../store/user';

const circleUrl = ref('');
const nickName = ref('');
const avatarUrl = ref('');
const isFullscreen = ref(true);
const isLogin = ref(false);


const cookie = LStorage.get('cookie');
const loginState = cookie ? true : false;
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

// 退出登录
const handleLogout = async () => {
    const { code } = await logout();
    if (code === 200) {
        handleProfile(false);
    }
}
onMounted(() => {
    mitter.on('closeLoginDialog', () => {
        isLogin.value = false;
    });
    avatarUrl.value = LStorage.get('avatarUrl') || '';
    nickName.value = LStorage.get('nickname') || '';
});
onUnmounted(() => {
    mitter.off('closeLoginDialog');
})
</script>
<style lang='scss' scoped>

</style>