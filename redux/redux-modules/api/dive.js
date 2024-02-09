import axios from "axios";

const url = `http://localhost:8000/api`;

const fetchMonthlyDives = () => axios.get(`${url}/dive-monthly`);

const fetchMostReportedSpecies = () =>
  axios.get(`${url}/dive-most-reported`);

const api = {
  fetchMonthlyDives,
  fetchMostReportedSpecies,
};

export default api;
