import { types } from "./types";
import api from "../api/dive";

export const fetchMonthlyDives = () => ({
  type: types.FETCH_MONTHLY_DIVE,
  payload: api.fetchMonthlyDives(),
  meta: { globalError: true },
});
