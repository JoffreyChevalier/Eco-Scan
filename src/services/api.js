import axios from "axios";

const API_GISP = "http://192.168.1.56:8000/";
const API_OFF = "https://world.openfoodfacts.org/api/v0/product/";

export const giusepeApi = async () => {
  return (await axios(`${API_GISP}`)).data;
};

export const getProduct = async (product) => {
  // return (await axios(`${API_OFF}${product}.json`)).data;
  fetch(`https://world.openfoodfacts.org/api/v0/product/${product}.json`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

export const postItemInCart = async (data) => {
  return (await axios.post(`${API_URL}`, data)).data;
};
