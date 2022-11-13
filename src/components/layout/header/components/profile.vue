<template>
    <div class="h-14 flex items-center">
        <template v-if="!isCookie || loginState">
            <el-avatar class="cursor-pointer" size="small" :src="circleUrl" @click="openLogin" />
            <span class="ml-2 cursor-pointer text-sm" @click="openLogin">点击登录</span>
        </template>
        <template v-else>
            {{ 123 }}
            <el-dropdown>
                <!-- <el-avatar class="cursor-pointer" size="small" :src="avatarUrl" /> -->
                <div>
                    <img class="w-5 h-5 rounded-full" :src="avatarUrl" alt="">
                </div>
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
import { onMounted, onUnmounted, ref, getCurrentInstance, inject, nextTick } from 'vue';
import IconParkVue from '../../../common/IconPark.vue';
import loginVue from '../../login/login.vue';
import { LStorage } from '../../../../utils/storage';
import { logout } from '../../../../api/login';
import handleProfile from '../../login/hooks/handleProfile';
import { useUserState } from '../../../../store/user';
import { ElAvatar, ElDropdown, ElDropdownMenu } from 'element-plus';
import { useRouter } from 'vue-router';

const circleUrl = ref('');
const nickName = ref('');
const avatarUrl = ref('');
const isFullscreen = ref(true);
const isLogin = ref(false);
const store = useUserState();
const router = useRouter();

// 引入路由刷新
interface Reload {
    reload: () => void
}
const reloadObj = inject('reload') as Reload;


const cookie = LStorage.get('cookie');
let isCookie = cookie ? true : false;
const loginState = ref(false);
const mitter = getCurrentInstance()?.appContext.config.globalProperties.mitter;

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
        nextTick(() => {
            reloadObj.reload();
        })
    }
}
onMounted(() => {
    mitter.on('closeLoginDialog', () => {
        isLogin.value = false;
        nextTick(() => {
            loginState.value = true;
            reloadObj.reload();
            console.log('storage', LStorage.get('avatarUrl'));
            console.log('local===>', avatarUrl.value);
            console.log('store==>', store.profileInfo.avatarUrl);

        })
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