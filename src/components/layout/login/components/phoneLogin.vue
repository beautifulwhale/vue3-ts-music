<template>
    <div class="title">登录QQ音乐</div>
    <section class="mt-10">
        <el-form :model="loginForm" :rules="rules" ref="loginFormRef">
            <el-form-item>
                <el-input v-model="loginForm.phone">
                    <template #prefix>
                        <span>手机号：</span>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="loginForm.qrcode" placeholder="请输入短信验证码">
                    <template #prefix>
                        <span>验证码：</span>
                    </template>
                    <template #suffix>
                        <span class="text-emerald-400 cursor-pointer" @click="getQrcode">获取验证码</span>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="phoneLogin">登录</el-button>
            </el-form-item>
        </el-form>
    </section>
</template>

<script setup lang='ts'>
import { reactive, ref } from 'vue';
import { FormRules, FormInstance, ElMessage } from 'element-plus';
import { getPhoneQrcode, verifyPhoneQrcode } from '../../../../api/login';
import toast from '../../../common/toast';
const loginForm = reactive({
    phone: '',
    qrcode: ''
});
const loginFormRef = ref<FormInstance>();
// 校验手机号
const validateTel = (_: any, value: any, callback: any) => {
    const isValid = /^1[3-9]\d{9}$/.test(value);
    if (!isValid) {
        callback(new Error('手机号格式错误'))
    } else {
        callback();
    }
};
const rules = reactive<FormRules>({
    phone: [
        { required: true, trigger: 'blur', message: '请输入手机号' },
        { validator: validateTel, message: '手机号格式错误', trigger: 'blur' }
    ]
});

const phoneLogin = () => {
    loginFormRef.value?.validate(async valid => {
        if (valid) {
            const { data, code } = await verifyPhoneQrcode(loginForm.phone, loginForm.qrcode);
            if (data && code === 200) {
                console.log('verify success');
            }
        }
    })
};
const getQrcode = async () => {
    const { data, code } = await getPhoneQrcode(loginForm.phone);
    if (data && code === 200) {
        toast({ title: '验证码已发送，请查收～' });
    }
}
</script>
<style lang='scss' scoped>
.title {
    @apply text-center m-5 text-3xl font-semibold
}

:deep(.el-button) {
    @apply w-96 cursor-pointer
}

:deep(.el-form-item__content) {
    @apply ml-12
}

:deep(.el-input) {
    @apply w-96 h-10
}
</style>