import axios from "axios";
/* import { stringify } from "query-string"; */

const url = `http://localhost:8000/api`;

const createUser = (data) => axios.post(`${url}/register`, data);

const api = {
  createUser,
};

export default api;
