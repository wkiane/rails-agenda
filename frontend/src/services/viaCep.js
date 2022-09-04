import axios from "axios";

export async function getAddressViaCEP(zipCode) {
    const response = await axios.get(`http://viacep.com.br/ws/${zipCode}/json/`);
    return response;
}