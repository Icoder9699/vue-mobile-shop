import axios from "axios";

export async function fetchPhones(state){
    const phones = await axios.get(' http://localhost:3001/phones')
    state.phones = phones.data;
}
