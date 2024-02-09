import axios from "axios";
import queryString from "query-string";

const url = `http://localhost:8000/api`;

const fetchSelector = (filters = {}) =>
  axios.get(
    `${url}/selector/diving-spot?${queryString.stringify(filters, {
      arrayFormat: "index",
    })}`
  );

const createDivingSpot = (data) => axios.post(`${url}/diving-spot`, data);

const addToUser = (data) => axios.post(`${url}/diving-spot-user/${data}`);

const removeFromUser = (data) =>
  axios.post(`${url}/remove-diving-spot-user`, data);

const fetchSubstrates = () =>
  axios.get(`${url}/selector/diving-spot-substract`);

const api = {
  fetchSelector,
  createDivingSpot,
  addToUser,
  removeFromUser,
  fetchSubstrates,
};

export default api;
