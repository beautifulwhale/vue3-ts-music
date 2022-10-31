
// aixos封装

import axios, { AxiosPromise } from "axios";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from "element-plus";



class Request {
    instance: AxiosInstance
    baseConfig: AxiosRequestConfig = { baseURL: '/api', timeout: 5000 }
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(Object.assign(this.baseConfig, config));

        // 拦截器
        this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
            // ... token
            return config;
        }, (err: any) => {
            return Promise.reject(err);
        })

        this.instance.interceptors.response.use((response: AxiosResponse) => {
            const { data } = response;
            return data;
        }, (err: any) => {
            let message = '';
            switch (err.response.status) {
                case 400:
                    message = "请求错误(400)";
                    break;
                case 401:
                    message = "未授权，请重新登录(401)";
                    // 这里可以做清空storage并跳转到登录页的操作
                    break;
                case 403:
                    message = "拒绝访问(403)";
                    break;
                case 404:
                    message = "请求出错(404)";
                    break;
                case 408:
                    message = "请求超时(408)";
                    break;
                case 500:
                    message = "服务器错误(500)";
                    break;
                case 501:
                    message = "服务未实现(501)";
                    break;
                case 502:
                    message = "网络错误(502)";
                    break;
                case 503:
                    message = "服务不可用(503)";
                    break;
                case 504:
                    message = "网络超时(504)";
                    break;
                case 505:
                    message = "HTTP版本不受支持(505)";
                    break;
                default:
                    message = `连接出错(${err.response.status})!`;
                    ElMessage({
                        type: 'error',
                        message: `${message},请检查网络连接`,
                        showClose: true
                    })
            }
        })
    }

    // 定义方法
    public request(config: AxiosRequestConfig): AxiosPromise {
        return this.instance.request(config);
    }

    public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<Result<T>> {
        return this.instance.get(url, config);
    }

    public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Result<T>> {
        return this.instance.post(url, data, config);
    }

    // put delete 同理...

}

export default new Request({})
