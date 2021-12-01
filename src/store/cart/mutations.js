export function addToCart(state, payload){
    
    // смартфон по ид если есть то запушем если нет то добавим в массив items
    // let phonesById = []
    // if(!state.cart.items[payload.id]){
    //     phonesById = [payload]
    // }else{
    //     phonesById = [...state.cart.items[payload.id].phones, payload]
    // }

    const phonesById = !state.items[payload.id] ? [payload] : [...state.items[payload.id].phones, payload]
    
    // для рассчета totalPrice и сорт by id 
    const newItems  = {
        ...state.items,
        [payload.id]: {  
            phones: phonesById,
            // price of smartphones by id 
            totalPrice: phonesById.reduce((sum, obj) => obj.price + sum, 0)
        }
    }
    
    const items = Object.values(newItems ).map(obj => obj.phones)
    
    // returns array of arrays 
    const allPhones = [].concat.apply([], items)

    // totalPrice of all phones in a cart
    const totalPrice = allPhones.reduce((sum, obj) => obj.price + sum, 0)

    return {
        ...state, 
        items: newItems,
        totalCount: allPhones.length,
        totalPrice
    };

}
