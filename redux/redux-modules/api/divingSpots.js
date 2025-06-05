import queryString from "query-string";
import axiosConfig from "src/helpers/axiosConfig";

const fetchSelector = (filters = {}) =>
  axiosConfig.get(
    `/selector/diving-spot?${queryString.stringify(filters, {
      arrayFormat: "index",
    })}`
  );

const createDivingSpot = (data) => axiosConfig.post(`/diving-spot`, data);

const addToUser = (data) => axiosConfig.post(`/diving-spot-user/${data}`);

const removeFromUser = (data) =>
  axiosConfig.post(`/remove-diving-spot-user`, data);

const fetchSubstrates = () =>
  axiosConfig.get(`/selector/diving-spot-substract`);

const api = {
  fetchSelector,
  createDivingSpot,
  addToUser,
  removeFromUser,
  fetchSubstrates,
};

export default api;
