import axios from "axios";

const API_URL = "http://192.168.1.56:8000/";

export const giusepeApi = async () => {
  return (await axios(`${API_URL}`)).data;
};
