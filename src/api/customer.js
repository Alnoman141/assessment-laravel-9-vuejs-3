import request from '@/utils/request';

export function getCustomers(){
    return request({
        url: '/customers',
        method: 'get'
    })
}

export function store(data){
    return request({
        url: '/customers',
        method: 'post',
        data
    })
}

export function login(data){
    return request({
        url: '/customer/login',
        method: 'post',
        data
    })
}

export function logout(){
    return request({
        url: '/customer/logout',
        method: 'post'
    })
}