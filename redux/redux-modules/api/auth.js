import axios from "axios";

const url = `${import.meta.env.VITE_API}/api`;

const createUser = (data) => axios.post(`${url}/register`, data);

const login = (data) => axios.post(`${url}/login`, data);

const api = {
  createUser,
  login,
};

export default api;
