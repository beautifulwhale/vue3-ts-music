<template>
    <div class="h-14 flex items-center">
        <template v-if="!isCookie || loginState">
            <!-- <el-avatar class="cursor-pointer" size="small" :src="circleUrl" @click="openLogin" /> -->
            <div class="w-5 h-5 bg-purple-200 rounded-full cursor-pointer" @click="openLogin">
                <img :src="circleUrl" />
            </div>
            <span class="ml-2 cursor-pointer text-sm text-skin-primary" @click="openLogin">点击登录</span>
        </template>
        <template v-else>
            <el-dropdown>
                <!-- <el-avatar class="cursor-pointer" size="small" :src="avatarUrl" /> -->
                <div>
                    <img class="w-5 h-5 rounded-full" :src="avatarUrl" alt="">
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <span class="cursor-pointer text-skin-primary" @click="handleLogout">退出登录</span>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <span class="ml-2 cursor-pointer text-sm text-skin-primary">{{ nickName }}</span>
        </template>
        <el-dropdown>
            <IconParkVue class="ml-3 cursor-pointer" :icon="Platte"></IconParkVue>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item class="p-1">
                        <IconParkVue @click="changeTheme('dark')" class="cursor-pointer" :size="18" :icon="Moon">
                        </IconParkVue>
                    </el-dropdown-item>
                    <el-dropdown-item class="p-1">
                        <IconParkVue @click="changeTheme('light')" class="cursor-pointer" :size="18" :icon="Sun">
                        </IconParkVue>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <IconParkVue class="ml-3 cursor-pointer" :icon="isFullscreen ? FullScreen : OffScreen"
            @click="handleScreenfull"></IconParkVue>
    </div>
    <loginVue :open-login="isLogin" @close-login="closeLogin"></loginVue>
</template>

<script setup lang='ts'>
import { DarkMode, FullScreen, Moon, OffScreen, Platte, Sun } from '@icon-park/vue-next';
import screenfull from 'screenfull';
import { onMounted, onUnmounted, ref, getCurrentInstance, inject, nextTick } from 'vue';
import IconParkVue from '../../../common/IconPark.vue';
import loginVue from '../../login/login.vue';
import { LStorage } from '../../../../utils/storage';
import { logout } from '../../../../api/login';
import handleProfile from '../../login/hooks/handleProfile';
import { ElDropdown, ElDropdownMenu } from 'element-plus';

const circleUrl = ref('');
const nickName = ref('');
const avatarUrl = ref('');
const isFullscreen = ref(true);
const isLogin = ref(false);

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

// 切换主题
type Theme = 'dark' | 'light'
const changeTheme = (type: Theme) => {
    const appDom = document.querySelector("#app");
    if (type === 'light') {
        appDom?.removeAttribute('class');
    } else {
        appDom?.setAttribute('class', 'theme-dark');
    }
}
onMounted(() => {
    mitter.on('closeLoginDialog', () => {
        isLogin.value = false;
        nextTick(() => {
            loginState.value = true;
            reloadObj.reload();
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