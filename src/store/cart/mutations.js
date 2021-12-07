export function addToCart(state, payload){
    const product = state.phones.find(phone => phone.id === payload.id)
    if(product){
        product.count++
        state.phones[payload.id] = product
    }else{
        payload.count = 1
        state.phones.push(payload)
    }
    
}

export function pushProductToCart(state,payload){
    state.phones.push(payload)
}

export function incrementItemQuantity(state, {id}){
    const cartItem = state.phones.find(phone => phone.id === id)
    cartItem.count++
}
