import axios from "axios";

export async function fetchPhones(state){
    const phones = await axios.get(`http://localhost:3001/phones?${state.category === null ? '' : `category=${state.category}`}`)
    state.phones = phones.data;
}

export function setCategory(state,payload){
    state.category = payload
}