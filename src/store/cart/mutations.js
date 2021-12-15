
export function addToCart(state, phone){
    state.phones.push({
        ...phone
    })
}

export function incrementItemCount(state, id ){
    console.log(id);
    const cartItem = state.phones.find(phone => phone.id === id)
    cartItem.count += 1
}

export function decrementItemCount(state, id){
    const cartItem = state.phones.find(phone => phone.id === id)
    if(cartItem.count === 1){
        cartItem.count = 1
    }else{
        cartItem.count--
    }
}

export function removeItem(state, id){
    const cartItem = state.phones.filter(phone => phone.id !== id)
    state.phones = cartItem
}
