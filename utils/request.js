import Vue from 'vue'
import axios from 'axios'

const service = axios.create({
	// baseURL: 'http://localhost:8082',
	baseURL: "http://106.15.170.74:8082",
	timeout: 60000,
	crossDomain: true,
	withCredentials: true,
})

// request拦截器,在请求之前做一些处理
service.interceptors.request.use(
    config => {
        // if (store.state.token) {
        //     // 给请求头添加user-token
        //     config.headers["user-token"] = store.state.token;
        // }
        console.log('请求拦截成功')
        return config;
    },
    error => {
        console.log(error); // for debug
        return Promise.reject(error);
    }
); 

//配置成功后的拦截器
service.interceptors.response.use(res => {
	console.log(res.data)
    if (res.data.code== 200) {
        return res.data
    } else {
        return Promise.reject(res.data.message);
    }
}, error => {
	if (error.response.status) {
		switch (error.response.status) {
			case 401:
				break;
			default:
				break;
		}
	}
    return Promise.reject(error)
})

export default service