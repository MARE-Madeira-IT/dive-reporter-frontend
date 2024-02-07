import axios from "axios";

const url = `http://localhost:8000/api`;

const createContact = (data) => axios.post(`${url}/contact`, data);

const api = {
  createContact,
};

export default api;
