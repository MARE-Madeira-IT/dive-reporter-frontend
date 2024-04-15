import { types } from "./types";
import api from "../api/dive";

import axios from "axios";
import { download } from "src/helpers/helper";
import queryString from "query-string";

export const fetchMonthlyDives = (filters) => ({
  type: types.FETCH_MONTHLY_DIVE,
  payload: api.fetchMonthlyDives(filters),
  meta: { globalError: true },
});

export const fetchSpeciesDives = (filters) => ({
  type: types.FETCH_SPECIES_DIVES,
  payload: api.fetchMonthlyDives(filters),
  meta: { globalError: true },
});

export const fetchMostReportedSpecies = (filters) => ({
  type: types.FETCH_MOST_REPORTED_SPECIES,
  payload: api.fetchMostReportedSpecies(filters),
  meta: { globalError: true },
});

export const fetchRankingDives = () => ({
  type: types.FETCH_RANKING_DIVES,
  payload: api.fetchRankingDives(),
  meta: { globalError: true },
});

export const fetchDiveCreatures = (filters) => ({
  type: types.FETCH_DIVE_CREATURES,
  payload: api.fetchDiveCreatures(filters),
  meta: { globalError: true },
});

export const fetchDiveCoords = (filters) => ({
  type: types.FETCH_DIVE_COORDS,
  payload: api.fetchDiveCoords(filters),
  meta: { globalError: true },
});

export const fetchDive = (page = 1, filters = {}) => ({
  type: types.FETCH_DIVE,
  payload: api.fetchDive(page, filters),
  meta: { globalError: true },
});

export const deleteDive = (id) => ({
  type: types.DELETE_DIVE,
  payload: api.deleteDive(id),
  meta: { id, globalError: true },
});

export const exportDiveCsv = (filters = {}) => ({
  type: types.EXPORT_DIVE_CSV,
  payload: api.exportDiveCsv(filters).then(
    (response) => {
      download(response, "dive-reporter.xlsx");
    },
    (error) => {
      return error.data;
    }
  ),
  meta: { globalError: true },
});
