import { defineStore } from 'pinia'
import { LStorage } from '../utils/storage';
import checkLoginStatus from '../components/layout/login/hooks/checkLoginStatus';
import { qrcodeCheck } from '../api/login';
import { ProfileType } from '../model/user';

export const useUserState = defineStore('user', {
    state: () => {
        return {
            token: '',
            cookie: '',
            isShowLogin: false,
            profileInfo: {} as ProfileType
        }
    },
    actions: {
        // 二维码登录
        async qrcodeLogin(key: string) {
            let timer: any;
            const cookie = LStorage.get('cookie');
            checkLoginStatus(cookie);
            timer = setInterval(async () => {
                const { code, message, cookie } = await qrcodeCheck(key);
                if (code === 800) {
                    alert(message);
                    clearInterval(timer);
                }
                if (code === 803) {
                    alert(message);
                    clearInterval(timer);
                    await checkLoginStatus(cookie);
                    LStorage.set('cookie', cookie)
                }
            }, 3000)
        }
    }
})