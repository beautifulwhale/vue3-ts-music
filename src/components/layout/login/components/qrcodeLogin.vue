<template>
    <header class="headers">
        手机扫码，安全登录
    </header>
    <div class="qrcode">
        <qr-code :value="qrUrl" :size="180"></qr-code>
    </div>
    <div class="text-center">
        打开手机，扫一扫登录
    </div>
</template>

<script setup lang='ts'>
import { ElMessage } from 'element-plus';
import { onMounted, ref, watch, getCurrentInstance } from 'vue';
import { qrcodeKey, qrcodeCreate, qrcodeCheck, loginStatus } from '../../../../api/login';
import { useUserState } from '../../../../store/user';
import toast from '../../../common/toast';
import { LStorage } from '../../../../utils/storage';
import { ProfileType } from '../../../../model/user';
import saveProfile from '../hooks/handleProfile';

const key = ref('');
const qrUrl = ref('');
const store = useUserState();
const mitter = getCurrentInstance()?.appContext.config.globalProperties.mitter;
const profileInfo = ref<ProfileType>({
    userId: 0,
    avatarUrl: '',
    city: 0,
    createTime: 0,
    gender: 0,
    nickname: '',
    signature: '',
    userName: '',
    userType: 0,
    vipType: 0
});

// 获取qrcode key
const getQrcodeKey = async () => {
    const { data, code } = await qrcodeKey();
    if (code === 200) {
        key.value = data.unikey;
        console.log(key.value, 'key');

        getQrcodeCreate(key.value);
    }
};

// 二维码生成
const getQrcodeCreate = async (key: string) => {
    const { data, code } = await qrcodeCreate(key);
    if (code === 200) {
        qrUrl.value = data.qrurl;
        // 二维码登录
        qrcodeLogin(key);
    }
};

// 二维码登录
const qrcodeLogin = async (key: string) => {
    let timer: any;
    const cookie = LStorage.get('cookie');
    await loginStatus(cookie);

    timer = setInterval(async () => {
        try {
            const { code, message, cookie } = await qrcodeCheck(key);
            if (code === 800) {
                const codeMessage = { code, message };
                store.changeCodeMessage(codeMessage);
                clearInterval(timer);
            }
            if (code === 803) {
                const codeMessage = { code, message };
                store.changeCodeMessage(codeMessage);
                clearInterval(timer);
                const { data: { profile } } = await loginStatus(cookie);
                saveProfile(true, cookie, profile);
            }
        } catch (error: any) {
            throw new Error(error);
        }
    }, 3000)
}

watch(() => store.codeMessage.code, (newCode) => {
    if (newCode === 801) {
        ElMessage({
            type: 'success',
            message: store.codeMessage.message
        });
    }
    if (newCode === 803) {
        mitter.emit('closeLoginDialog');
        toast({ title: '登录成功～' });
    }
})
onMounted(() => {
    getQrcodeKey();
})
</script>
<style lang='scss' scoped>
.headers {
    @apply text-center font-bold text-lg
}

.qrcode {
    @apply flex justify-center my-5
}
</style>