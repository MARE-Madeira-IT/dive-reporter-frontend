import queryString from "query-string";
import axiosConfig from "src/helpers/axiosConfig";

const fetchMonthlyDives = (filters = { self: false }) =>
  axiosConfig.get(
    `/dive-monthly?${queryString.stringify(filters, {
      arrayFormat: "index",
    })}`
  );

const fetchMostReportedSpecies = (filters = {}) =>
  axiosConfig.get(
    `/dive-most-reported?${queryString.stringify(filters, {
      arrayFormat: "index",
    })}`
  );

const fetchRankingDives = () => axiosConfig.get(`/dive-ranking`);

const fetchDiveCreatures = (filters = {}) =>
  axiosConfig.get(
    `/selector/creature?${queryString.stringify(filters, {
      arrayFormat: "index",
    })}`
  );

const fetchDiveCoords = (filters = {}) =>
  axiosConfig.get(
    `/coordinates/dive?${queryString.stringify(filters, {
      arrayFormat: "index",
    })}`
  );

const fetchDive = (page = 1, filters = {}) =>
  axiosConfig.get(
    `/dive?${queryString.stringify(filters, {
      arrayFormat: "index",
    })}&page=${page}`
  );

const deleteDive = (id) => axiosConfig.delete(`/dive/${id}`);

const exportDiveCsv = (filters) =>
  axiosConfig.get(
    `/export/csv/dive?${queryString.stringify(filters, {
      arrayFormat: "index",
    })}`,
    {
      responseType: "blob",
    }
  );

const api = {
  fetchMonthlyDives,
  fetchMostReportedSpecies,
  fetchRankingDives,
  fetchDiveCreatures,
  fetchDiveCoords,
  fetchDive,
  deleteDive,
  exportDiveCsv,
};

export default api;
