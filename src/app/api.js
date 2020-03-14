import axios from "axios";
import { getCredential, removeCredential } from "./auth";
import { redirect } from "./tools";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 
    "Content-Type": "application/json",
  }
});

axiosInstance.interceptors.request.use(config => {
  config.headers.Authorization = `Basic ${getCredential()}`
  return config
}, 
error => Promise.reject(error))

axiosInstance.interceptors.response.use(response =>response,
  error => {
    const {status} = error.response

    if (status === 403) {
      removeCredential()
      redirect('/login')
    }
    
    return Promise.reject(error)
  })

export default axiosInstance;
