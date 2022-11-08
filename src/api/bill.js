import request from '@/utils/request';

// get all the bills info
export function getBills(){
    return request({
        url: '/customer-bills',
        method: 'get'
    })
}

// store bill
export function store(data){
    return request({
        url: '/customer-bills',
        method: 'post',
        data
    })
}

// update bill
export function update(data){
    return request({
        url: '/customer-bills/' + data.id,
        method: 'put',
        data
    })
}

// get logedin customer's bills info
export function getAuthCustomerBills(){
    return request({
        url: '/auth-customer/bills',
        method: 'get'
    })
}