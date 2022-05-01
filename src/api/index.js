/**
 * API管理
 */
import request from './../utils/request'

export default{
    login(param) {
        return request({
            url:'/demo',
            data:param
        })
    }
}