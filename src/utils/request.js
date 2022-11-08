import axios from 'axios'
import { getToken, getCustomerToken } from '@/utils/auth'
// create an axios instance
const service = axios.create({
    baseURL: "http://127.0.0.1:8000/api", // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    // timeout: 5000, // request timeout
})

// customer authentification routes
const customerAuthRoutes =  ['/customer/logout', '/auth-customer/bills']

// request interceptor
service.interceptors.request.use(
    config => {
        let token = getToken();
        if(customerAuthRoutes.indexOf(config.url) !== -1){
          token = getCustomerToken();
        }
        // do something before request is sent
        if (token) {
            // let each request carry token
            // please modify it according to the actual situation
            config.headers['Access-Control-Allow-Headers'] = '*',
            config.headers['Access-Control-Allow-Origin'] = '*',
            config.headers['Accept'] = 'application/json',
            config.headers['Content-Type'] = 'application/json',
            config.headers['Authorization'] = 'Bearer ' + token
        }
        return config
    },
    error => {
        // do something with request error
        console.log( 'error', error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
    */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    async response => {
        const res = response

        // if the custom status is not 200, it is judged as an error.
        if (res.status !== 200) {
            // 508: Illegal token; 512: Other clients logged in; 514: Token expired;
            if (res.status === 508 || res.status === 512 || res.status === 514 || res.status === 401) {
                // to re-login
                location.reload();
            }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    async error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

export default service