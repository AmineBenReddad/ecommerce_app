import axios from "axios";

const API_URL = 'https://api.escuelajs.co/api/v1';

//Fetch all products
export const fetchProducts = async () => {
    return axios.get(`${API_URL}/products`);
};