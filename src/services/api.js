import axios from "axios";

const API_GISP = "http://192.168.1.56:8000/";
const API_OFF = " https://world.openfoodfacts.org/";

export const giusepeApi = async () => {
  return (await axios(`${API_GISP}`)).data;
};

export const getAllFood = async () => {
  return (await axios(`${API_OFF}`)).data;
};

export const postItemInCart = async (data) => {
  return (await axios.post(`${API_URL}`, data)).data;
};
