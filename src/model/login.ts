export interface QrcodeKey<T> {
    code: number,
    data: T
}

export interface QrcodeKeyData {
    code: number,
    unikey: string
}

export interface QrcodeCreate {
    code: number,
    data: {
        qrurl: string,
        qrimg: string
    }
}

export interface QrcodeCheck {
    code: number,
    message: string,
    cookie: string
}

export interface LoginStatus<T, F = any> {
    data: {
        code: number,
        account: T,
        profile: F
    }
}

export interface AccountType {
    id: number,
    userName: string,
    createTime: number,
    status: number,
    vipType: number
}
