import Cookies from "js-cookie"

export function logIn(state,payload){
    Cookies.set('token', payload.token)
    state.token = payload.token
    state.isAuthenticated = payload.isAuthenticated
}

export function logOut(state){
    state.token = null
    state.isAuthenticated = false
}


