import request from "./request";
import { QrcodeKey, QrcodeKeyData, QrcodeCreate, QrcodeCheck, LoginStatus, AccountType } from '../model/login';
import { ProfileType } from "../model/user";
/**
 * 
 * @params 此处携带时间戳 防止缓存
 */

// 获取二维码key
export function qrcodeKey() {
    return request.request<QrcodeKey<QrcodeKeyData>>({
        url: `/login/qr/key?timerstamp=${Date.now()}`,
        method: 'get',
    })
}

// 二维码生成
export function qrcodeCreate(key: string) {
    return request.request<QrcodeCreate>({
        url: `/login/qr/create?key=${key}&qrimg=true&timerstamp=${Date.now()}`,
        method: 'get',
    })
}

// 二维码检测扫码状态
export function qrcodeCheck(key: string) {
    return request.request<QrcodeCheck>({
        url: `/login/qr/check?key=${key}&timerstamp=${Date.now()}`,
        method: 'get',
    })
}

// 检查登录状态
export function loginStatus(cookie: string = '') {
    return request.request<LoginStatus<AccountType, ProfileType>>({
        url: `/login/status?timerstamp=${Date.now()}`,
        method: 'post',
        data: {
            cookie
        }
    })
}
