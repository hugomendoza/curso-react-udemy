import axios, { AxiosRequestHeaders } from "axios";
import { getEnvVariables } from "../helpers";

interface CustomAxiosHeaders extends AxiosRequestHeaders {
  "x-token": string;
}

const { VITE_API_URL } = getEnvVariables();

const calendarApi = axios.create({
  baseURL: VITE_API_URL
});

calendarApi.interceptors.request.use( config => {
  
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("token")
  } as CustomAxiosHeaders;
  
  return config;
})


export default calendarApi;
