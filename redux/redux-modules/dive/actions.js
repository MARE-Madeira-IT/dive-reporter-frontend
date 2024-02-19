import { types } from "./types";
import api from "../api/dive";

export const fetchMonthlyDives = () => ({
  type: types.FETCH_MONTHLY_DIVE,
  payload: api.fetchMonthlyDives(),
  meta: { globalError: true },
});

export const fetchMostReportedSpecies = () => ({
  type: types.FETCH_MOST_REPORTED_SPECIES,
  payload: api.fetchMostReportedSpecies(),
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
