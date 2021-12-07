export function getCartItems(state){
    return state.phones
}

export function getCartTotalPrice(state){
    const allPrice = state.phones.map(phone => {
        return phone.count * phone.price
    })
    return allPrice[0] ? allPrice[0] : 0
}

export function getCartTotalCount(state){
    // let totalCount = state.phones.

    return state.totalCount
}