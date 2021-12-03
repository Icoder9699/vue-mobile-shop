export function fetchPhones({commit}){
    return commit('fetchPhones')
}

export function setLoading({commit}, payload){
    return commit('setLoading', payload)
}