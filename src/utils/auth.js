const TokenKey = 'Admin-Token'
const Customer = 'Customer Token'

export function getToken() {
    return localStorage.getItem(TokenKey)
}

export function setToken(token) {
    return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
    return localStorage.removeItem(TokenKey)
}

export function getCustomerToken() {
    return localStorage.getItem(Customer)
}

export function setCustomerToken(token) {
    return localStorage.setItem(Customer, token)
}

export function removeCustomerToken() {
    return localStorage.removeItem(Customer)
}