import axios from "axios";
import queryString from "query-string";

const url = `http://localhost:8000/api`;

const fetchMonthlyDives = () => axios.get(`${url}/dive-monthly`);

const fetchMostReportedSpecies = () => axios.get(`${url}/dive-most-reported`);

const fetchRankingDives = () => axios.get(`${url}/dive-ranking`);

const fetchDiveCreatures = (filters = {}) =>
  axios.get(
    `${url}/selector/creature?${queryString.stringify(filters, {
      arrayFormat: "index",
    })}`
  );

const fetchDiveCoords = (filters = {}) =>
  axios.get(
    `${url}/coordinates/dive?${queryString.stringify(filters, {
      arrayFormat: "index",
    })}`
  );

const api = {
  fetchMonthlyDives,
  fetchMostReportedSpecies,
  fetchRankingDives,
  fetchDiveCreatures,
  fetchDiveCoords,
};

export default api;
