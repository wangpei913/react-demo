import JsonP from 'jsonp';
import axios from 'axios';
import { message } from 'antd';

const instance = axios.create({
    baseURL: 'https://easy-mock.com/mock/5ca09b6679bfa10ec9d0330f/mockApi',
    timeout: 3000, // 请求超时
})
instance.interceptors.request.use(
    config => {
        const TOKEN = '1fd399bdd9774831baf555ae5979c66b'
        if (TOKEN) {
            // 配置请求头 token
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            config.headers['Authorization'] = TOKEN;
        }
        return config;
    },
    error => {
        message.error('请求出错啦，快找原因啦!');
        return Promise.reject(error);
    }
);
instance.interceptors.response.use(
    function (response) {
        const { status, data } = response;
        if (Object.is(status, 401)) {
            // 根据返回状态码做出相应的操作
        }
        return data;
    },
    function (error) {
        message.error('请求出错啦，快找原因啦!');
        return Promise.reject(error)
    }
)
export default class Axios {
    static jsonp (option) {
        return new Promise((resolve, reject) => {
            JsonP(option.url, {
                param: 'callback'
            },function (err, res) {
                if (res.status === 'success') {
                    resolve(res)
                } else {
                    reject(res.message)
                }
            })
        })
    }
    static async get(url, params) {
        return await instance.get(url, {params}) 
    }
    static async post(url, params) {
        return await instance.post(url, params);
    }
}