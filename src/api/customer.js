import request from '@/utils/request';

// get all the customers info
export function getCustomers(){
    return request({
        url: '/customers',
        method: 'get'
    })
}

// store customer
export function store(data){
    return request({
        url: '/customers',
        method: 'post',
        data
    })
}

// customer login
export function login(data){
    return request({
        url: '/customer/login',
        method: 'post',
        data
    })
}

// customer logout
export function logout(){
    return request({
        url: '/customer/logout',
        method: 'post'
    })
}