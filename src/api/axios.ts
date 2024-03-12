import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://65ef4befead08fa78a503f49.mockapi.io/',
  headers: {
    'Content-Type': 'application/json', 
  },
});


export default axiosInstance;
