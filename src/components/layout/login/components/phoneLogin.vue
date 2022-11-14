<template>
    <div class="title">登录QQ音乐</div>
    <section class="mt-10">
        <el-form :model="loginForm" :rules="loginRules" ref="loginFormRef">
            <el-form-item prop="phone">
                <el-input v-model="loginForm.phone">
                    <template #prefix>
                        <span>手机号：</span>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="qrcode">
                <el-input v-model="loginForm.qrcode" placeholder="请输入短信验证码">
                    <template #prefix>
                        <span>验证码：</span>
                    </template>
                    <template #suffix>
                        <span v-if="!qrcodeStatus" class="text-emerald-400 cursor-pointer"
                            @click="getQrcode">获取验证码</span>
                        <span v-else>{{ residueTime }}s</span>
                    </template>
                </el-input>
                <span class="el-from-item_error" slot="error"></span>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="phoneLogin" :disabled="loginDisabled">登录</el-button>
            </el-form-item>
        </el-form>
    </section>
</template>

<script setup lang='ts'>
import { getCurrentInstance, reactive, ref } from 'vue';
import { FormRules, FormInstance } from 'element-plus';
import { getPhoneQrcode, verifyPhoneQrcode } from '../../../../api/login';
import toast from '../../../common/toast';
import { loginStatus } from '../../../../api/login';
import saveProfile from '../hooks/handleProfile';
import { LStorage } from '../../../../utils/storage';

const loginForm = reactive({
    phone: '',
    qrcode: ''
});
const loginFormRef = ref<FormInstance>();
const mitter = getCurrentInstance()?.appContext.config.globalProperties.mitter;
// 剩余时间
const residueTime = ref(30);
let qrcodeStatus = ref(false);
const loginDisabled = ref(true);

// 验证失败信息提示
const qrcodeMessage = ref('');
// 校验手机号
const validateTel = (_: any, value: any, callback: any) => {
    const isValid = /^1[3-9]\d{9}$/.test(value);
    if (!isValid) {
        callback(new Error('手机号格式错误'))
    } else {
        callback();
    }
};
// 校验验证码
const valideQrcode = (_: any, value: any, callback: any) => {
    if (!value) {
        callback('验证码不能为空～');
    } else if (qrcodeMessage.value) {
        callback(qrcodeMessage.value);
        console.log('validate qrcodeMessage===>');

    } else {
        callback();
    }
}
const loginRules = reactive<FormRules>({
    phone: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { trigger: 'change', validator: validateTel }
    ],
    qrcode: [
        { trigger: 'blur', validator: valideQrcode }
    ]
});


let timer: any;
const phoneLogin = () => {
    loginFormRef.value?.validate(async valid => {
        if (valid) {
            try {
                const { data, code, message } = await verifyPhoneQrcode(loginForm.phone, loginForm.qrcode);
                if (code === 503 && !data) {
                    qrcodeMessage.value = message as string;
                    loginFormRef.value?.validateField('qrcode');
                }
                if (data && code === 200) {
                    const cookie = LStorage.get('cookie');
                    const { data: { profile, code } } = await loginStatus(cookie);
                    if (code === 200) {
                        if (cookie) {
                            saveProfile(true, cookie, profile);
                        }
                        mitter.emit('closeLoginDialog');
                        toast({ title: '登录成功～' });
                        clearInterval(timer);
                    }
                }
            } catch (error) {
                console.log('error', error);

                qrcodeMessage.value = '验证码错误！';
                loginFormRef.value?.validateField('qrcode');
            }
        }
    })
};
// 发送验证码
const getQrcode = async () => {
    const { data, code } = await getPhoneQrcode(loginForm.phone);
    qrcodeStatus.value = true;
    loginDisabled.value = false;
    if (timer) {
        clearInterval(timer);
    }
    timer = setInterval(() => {
        if (residueTime.value > 1) {
            residueTime.value--
        } else {
            clearInterval(timer);
            qrcodeStatus.value = false;
            loginDisabled.value = true;
            residueTime.value = 30;
            loginForm.qrcode = '';
            loginFormRef.value?.clearValidate();
        }
    }, 1000);
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