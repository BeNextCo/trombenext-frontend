import axios from "axios";

var axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  header: { "Content-Type": "application/json" }
  /* other custom settings */
});

export default axiosInstance;
