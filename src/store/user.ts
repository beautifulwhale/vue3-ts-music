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
            profileInfo: {} as ProfileType,
            codeMessage: {
                code: 0,
                message: ''
            }
        }
    },
    actions: {
        // 二维码登录
        async qrcodeLogin(key: string) {
            let timer: any;
            const cookie = LStorage.get('cookie');
            checkLoginStatus(cookie);
            timer = setInterval(async () => {
                try {
                    const { code, message, cookie } = await qrcodeCheck(key);
                    if (code === 800) {
                        this.codeMessage.code = code;
                        this.codeMessage.message = message;
                        clearInterval(timer);
                    }
                    if (code === 803) {
                        this.codeMessage.code = code;
                        this.codeMessage.message = message;
                        clearInterval(timer);
                        const { profile } = await checkLoginStatus(cookie);
                        LStorage.set('cookie', cookie);
                        this.cookie = cookie;
                        this.saveProfile(profile);
                    }
                } catch (error: any) {
                    throw new Error(error);
                }
            }, 3000)
        },
        saveProfile(profileMessage: ProfileType) {
            this.profileInfo = profileMessage;
        }
    }
})