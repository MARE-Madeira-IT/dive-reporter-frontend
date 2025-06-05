import axios from "axios";

const axiosConfig = axios.create({
  baseURL: `${import.meta.env.VITE_API}/api`, // Replace with your API base URL
  timeout: 10000, // Request timeout in milliseconds
  withCredentials: true,
  headers: {
    "Content-Type": "application/json", // Set the default content type
    Accept: "application/json", // Set the default content type
  },
});

axiosConfig.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      (error.response.status !== 401 || error.config.url.includes("login"))
    ) {
      return Promise.reject({
        status: error.response.status,
        data: error.response.data,
        message: error.response.statusText || "Request failed",
      });
    } else if (error.request) {
      return Promise.reject({
        status: null,
        message: "No response received from the server",
      });
    } else {
      return Promise.reject({
        message: error.message || "Request setup failed",
      });
    }
  }
);

export default axiosConfig;
