import axios from "axios";

const API_URL = "http://192.168.1.56:8000/cart/add";

export const postItemInCart = async (data) => {
  return (await axios.post(`${API_URL}`, data)).data;
};
