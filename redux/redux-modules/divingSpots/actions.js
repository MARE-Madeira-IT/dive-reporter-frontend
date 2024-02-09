import { types } from "./types";
import api from "../api/divingSpots";

export const fetchSelector = (filters) => ({
  type: types.FETCH_DIVING_SPOT_SELECTOR,
  payload: api.fetchSelector(filters),
  meta: { globalError: true },
});

export const createDivingSpot = (data) => ({
  type: types.CREATE_DIVING_SPOT,
  payload: api.createDivingSpot(data),
  meta: { globalError: true },
});

export const addToUser = (data) => ({
  type: types.ADD_TO_USER,
  payload: api.addToUser(data),
  meta: { globalError: true },
});

export const removeFromUser = (data) => ({
  type: types.REMOVE_FROM_USER,
  payload: api.removeFromUser(data),
  meta: { globalError: true },
});
