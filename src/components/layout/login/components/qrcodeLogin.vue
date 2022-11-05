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
import { onMounted, ref } from 'vue';
import { qrcodeKey, qrcodeCreate } from '../../../../api/login';
import { useUserState } from '../../../../store/user';

const key = ref('');
const qrUrl = ref('');
const store = useUserState();

// 获取qrcode key
const getQrcodeKey = async () => {
    const { data, code } = await qrcodeKey();
    if (code === 200) {
        key.value = data.unikey;
        getQrcodeCreate(key.value);
    }
};

// 二维码生成
const getQrcodeCreate = async (key: string) => {
    console.log('key===>', key);
    const { data, code } = await qrcodeCreate(key);
    if (code === 200) {
        qrUrl.value = data.qrurl;
        store.qrcodeLogin(key);
    }
};



onMounted(() => {
    getQrcodeKey();
})
</script>
<style lang='scss' scoped>
.headers {
    @apply text-center font-bold text-lg font-black
}

.qrcode {
    @apply flex justify-center my-5
}
</style>