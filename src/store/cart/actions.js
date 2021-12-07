export function addToCart({commit}, payload){
  commit('addToCart', payload)
}

export function updateCart({commit}, payload){
    return commit('updateCart', payload)
}


export function incrementItemQuantity({commit}, payload){
  return commit('incrementItemQuantity', payload)
}

export function decrementItemQuantity({commit}, payload){
  return commit('decrementItemQuantity', payload)
}

export function removeItem({commit}, payload){
  return commit('removeItem', payload)
}

