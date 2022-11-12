<template>
    <Teleport to="body">
        <div v-if="openLogin">
            <el-dialog v-model="openLogin" @close="closeDailog" :show-close="false">
                <template #header="{}">
                    <div>
                        <span v-if="loginType === 'qrcode'" class="flex items-center justify-end">
                            <span class="mr-1">手机登录点击这里</span>
                            <IconPark @click="changeLoginType" class="cursor-pointer" :size="60" :icon="Iphone">
                            </IconPark>
                        </span>
                        <span v-else class="flex items-center justify-end">
                            <span class="mr-1">扫码登录更加安全</span>
                            <IconPark @click="changeLoginType" class="cursor-pointer" :size="60"
                                :icon="TwoDimensionalCode"></IconPark>
                        </span>
                    </div>
                </template>
                <phone-login v-if="loginType === 'iphone'"></phone-login>
                <qrcode-login v-else></qrcode-login>
            </el-dialog>
        </div>
    </Teleport>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import IconPark from '@/components/common/IconPark.vue';
import { Iphone, TwoDimensionalCode } from '@icon-park/vue-next';
import phoneLogin from '@/components/layout/login/components/phoneLogin.vue';
import qrcodeLogin from '@/components/layout/login/components/qrcodeLogin.vue';


type LoginType = 'iphone' | 'qrcode';
const loginType = ref<LoginType>('qrcode');
const emits = defineEmits(['closeLogin']);

withDefaults(
    defineProps<{
        openLogin: boolean
    }>(),
    {
        openLogin: false
    }
)

// 关闭弹窗
const closeDailog = () => {
    emits('closeLogin');
}

// 改变登录方式
const changeLoginType = () => {
    loginType.value = loginType.value === 'iphone' ? 'qrcode' : 'iphone';
};

</script>
<style lang='scss' scoped>
:deep(.el-dialog__header) {
    padding: 0;
    margin-right: 0;
}

:deep(.el-dialog) {
    @apply w-1/4 h-2/4;
}
</style>