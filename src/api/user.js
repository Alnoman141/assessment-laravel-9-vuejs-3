import request from '@/utils/request';

// user register
export function register(data){
    return request({
        url: '/register',
        method: 'post',
        data
    })
}

// user login
export function login(data){
    return request({
        url: '/login',
        method: 'post',
        data
    })
}

// user logout
export function logout(){
    return request({
        url: '/logout',
        method: 'post'
    })
}

// get all the users info
export function getUsers(){
    return request({
        url: '/users',
        method: 'get'
    })
}