export function fetchPhones({commit}){
    return commit('fetchPhones')
}

export function setLoading({commit}, payload){
    return commit('setLoading', payload)
}

export function setCategory({commit}, payload){
    return commit('setCategory', payload)
}