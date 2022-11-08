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

// export function login(data){
//     return request({
//         url: '/login',
//         method: 'post',
//         data
//     })
// }

// export function logout(){
//     return request({
//         url: '/logout',
//         method: 'post'
//     })
// }