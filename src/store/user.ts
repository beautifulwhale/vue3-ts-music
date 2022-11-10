import { defineStore } from 'pinia'
import { ProfileType } from '../model/user';
import { CodeMessage } from '../model/user';
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
        saveCookie(cookie: string) {
            this.cookie = cookie;
        },
        changeCodeMessage(codeMessage: CodeMessage) {
            let { code, message } = codeMessage;
            this.codeMessage.code = code;
            this.codeMessage.message = message;
        },
        saveProfile(profileMessage: ProfileType) {
            console.log('profileMessage==>', profileMessage);
            this.profileInfo = profileMessage;
        }
    }
})