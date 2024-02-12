import axios from "axios";

const url = `http://localhost:8000/api`;

const fetchMonthlyDives = () => axios.get(`${url}/dive-monthly`);

const fetchMostReportedSpecies = () => axios.get(`${url}/dive-most-reported`);

const fetchRankingDives = () => axios.get(`${url}/dive-ranking`);

const api = {
  fetchMonthlyDives,
  fetchMostReportedSpecies,
  fetchRankingDives,
};

export default api;
