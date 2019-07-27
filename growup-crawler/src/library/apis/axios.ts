import axios from 'axios';

const LOCAL_URL = "http://localhost:4000/api";

export const baseAxios = (() => {
  return axios.create({
    baseURL: LOCAL_URL,
    timeout: 3000
  });
})();
