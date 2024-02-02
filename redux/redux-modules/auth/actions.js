import { types } from "./types";
import api from "../api/auth";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const url = `http://localhost:8000/api`;

export const createUser = (data) => ({
  type: types.CREATE_USER,
  payload: api.createUser(data),
});

export const login = (data) => ({
  type: types.LOGIN,
  payload: api.login(data),
});

export const me = () => ({
  type: types.ME,
  payload: axios.get(`${url}/me`),
});

export function loginSuccess(token) {
  return {
    type: types.LOGIN_SUCCESS,
    payload: token,
  };
}

export const logout = (data) => {
  return (dispatch) => {
    const response = dispatch({
      type: types.LOGOUT,
      payload: axios.post(`${url}/logout`, data),
    });
    response.then((res) => {
      resetToken();
    });
  };
};

export function refreshAuthorizationToken(token) {
  return (dispatch) => {
    return axios
      .get({
        url: `${url}/refresh`,
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const token = res.data.data.access_token;
        localStorage.setItem("token", token);
        setAuthorizationToken(token);
        dispatch(loginSuccess(jwtDecode(token)));
      })
      .catch((err) => {
        resetToken();
      });
  };
}
export function setAuthorizationToken(token) {
  token
    ? (axios.defaults.headers.common["Authorization"] = `Bearer ${token}`)
    : delete axios.defaults.headers.common["Authorization"];
}
export function resetToken() {
  localStorage.removeItem("token");
  setAuthorizationToken(false);
}
