export function addToCart({commit}, payload){
  commit('addToCart', payload)
}

export function updateCart({commit}, payload){
    return commit('updateCart', payload)
}