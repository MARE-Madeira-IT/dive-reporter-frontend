import { types } from "./types";
import api from "../api/auth";
import { jwtDecode } from "jwt-decode";
import axiosConfig from "src/helpers/axiosConfig";

export const createUser = (data) => ({
  type: types.CREATE_USER,
  payload: api.createUser(data),
});

export const login = (data) => {
  return (dispatch) => {
    return axiosConfig.post(`/login`, data).then((res) => {
      const token = res.data.data.access_token;
      localStorage.setItem("token", token);
      setAuthorizationToken(token);
      dispatch(loginSuccess(jwtDecode(token), res.data.user));
    });
  };
};

export const me = () => ({
  type: types.ME,
  payload: axiosConfig.get(`/me`),
});

export function loginSuccess(token, user) {
  return {
    type: types.LOGIN_SUCCESS,
    payload: token,
    user: user,
  };
}

export const logout = () => {
  return (dispatch) => {
    resetToken();

    dispatch({
      type: types.LOGOUT,
      payload: axiosConfig.get(`/logout`),
    });
  };
};

export function refreshAuthorizationToken(token) {
  return (dispatch) => {
    return axiosConfig
      .get({
        url: `/refresh`,
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
    ? (axiosConfig.defaults.headers.common["Authorization"] = `Bearer ${token}`)
    : delete axiosConfig.defaults.headers.common["Authorization"];
}

export function resetToken() {
  localStorage.removeItem("token");
  setAuthorizationToken(false);
}

export const updateProfilePicture = (id, data) => ({
  type: types.UPDATE_PROFILE_PICTURE,
  payload: api.updateProfilePicture(id, data),
  meta: { globalError: true },
});
