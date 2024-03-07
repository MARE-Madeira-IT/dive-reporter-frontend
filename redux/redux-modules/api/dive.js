import axios from "axios";
import queryString from "query-string";

const url = `${import.meta.env.VITE_API}/api`;

const fetchMonthlyDives = (filters = { self: false }) =>
  axios.get(
    `${url}/dive-monthly?${queryString.stringify(filters, {
      arrayFormat: "index",
    })}`
  );

const fetchMostReportedSpecies = (filters = {}) =>
  axios.get(
    `${url}/dive-most-reported?${queryString.stringify(filters, {
      arrayFormat: "index",
    })}`
  );

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

const fetchDive = (page = 1, filters = {}) =>
  axios.get(
    `${url}/dive?${queryString.stringify(filters, {
      arrayFormat: "index",
    })}&page=${page}`
  );

const deleteDive = (id) => axios.delete(`${url}/dive/${id}`);

const api = {
  fetchMonthlyDives,
  fetchMostReportedSpecies,
  fetchRankingDives,
  fetchDiveCreatures,
  fetchDiveCoords,
  fetchDive,
  deleteDive,
};

export default api;
