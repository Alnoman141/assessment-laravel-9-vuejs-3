import request from '@/utils/request';

export function getBills(){
    return request({
        url: '/customer-bills',
        method: 'get'
    })
}

export function store(data){
    return request({
        url: '/customer-bills',
        method: 'post',
        data
    })
}

export function update(data){
    return request({
        url: '/customer-bills/' + data.id,
        method: 'put',
        data
    })
}

export function getAuthCustomerBills(){
    return request({
        url: '/auth-customer/bills',
        method: 'get'
    })
}