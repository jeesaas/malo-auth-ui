/**
 * axios二次封装
 */
import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from './../router'

const TOKEN_INVALID = 'Token认证失败，请重新登录'
const NETWORK_ERROR = '网络请求异常，请稍后重试'

// 获取环境配置信息
const env = import.meta.env

const baseApi = env["VITE_BASE_API"];

// 创建axios实例对象，添加全局配置
const service = axios.create({
    baseURL: baseApi,
    timeout: env["VITE_TIME_OUT"]
})

// 请求拦截
service.interceptors.request.use((req) => {
    const headers = req.headers;
    // 后续待完善
    if (!headers.Authorization) headers.Authorization = 'Bearer ' + "123456";
    return req;
})

// 响应拦截
service.interceptors.response.use((res) => {
    const { statusCode, data, errorCode,errorMsg} = res.data;
    if (statusCode === 200) {
        return data;
    } else if (statusCode === 401) {
        ElMessage.error(TOKEN_INVALID)
        setTimeout(() => {
            router.push('/login')
        }, 1500)
        return Promise.reject(TOKEN_INVALID)
    } else {
        ElMessage.error(errorMsg || NETWORK_ERROR)
        return Promise.reject(errorMsg || NETWORK_ERROR)
    }
})

/**
 * 请求核心函数
 * @param {*} options 请求配置
 */
function request(options) {
    options.method = options.method || 'get'
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data;
    }
    service.defaults.baseURL = baseApi.toString();
    return service(options)
}

['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
    request[item] = (url, data, options) => {
        return request({
            url,
            data,
            method: item,
            ...options
        })
    }
})

export default request;