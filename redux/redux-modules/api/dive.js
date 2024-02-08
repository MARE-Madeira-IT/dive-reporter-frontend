import axios from "axios";

const url = `http://localhost:8000/api`;

const fetchMonthlyDives = () => axios.get(`${url}/dive-monthly`);

const api = {
  fetchMonthlyDives,
};

export default api;
