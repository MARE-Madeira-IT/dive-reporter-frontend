import { types } from "./types";
import api from "../api/auth";

export const createUser = (data) => ({
  type: types.CREATE_USER,
  payload: api.createUser(data),
  meta: { globalError: true },
});
