import axios from "axios";
/* import { stringify } from "query-string"; */

const url = `http://localhost:8000/api`;

const createUser = (data) => axios.post(`${url}/register`, data);

const login = (data) => axios.post(`${url}/login`, data);

const logout = () => axios.get(`${url}/logout`);

const api = {
  createUser,
  login,
  logout,
};

export default api;
