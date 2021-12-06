export async function fetchPhones({commit, dispatch}){
    return commit('fetchPhones')
}

export function setLoading({commit}, payload){

    return commit('setLoading', payload)
}

export function setCategory({commit}, payload){
   
    return commit('setCategory', payload)
}

export function setSortType({commit}, payload){
    return commit('setSortType', payload)
}