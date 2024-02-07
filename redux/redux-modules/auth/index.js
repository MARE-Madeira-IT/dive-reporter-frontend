import { types } from "./types";

const initialState = {
  data: [], //
  isAuthenticated: true,
  loading: false,
  currentUser: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case `${types.CREATE_USER}_PENDING`:
    case `${types.LOGIN}_PENDING`:
    case `${types.LOGOUT}_PENDING`:
    case `${types.ME}_PENDING`:
      return {
        ...state,
        loading: true,
      };

    case `${types.CREATE_USER}_REJECTED`:
    case `${types.ME}_REJECTED`:
    case `${types.LOGIN}_REJECTED`:
    case `${types.LOGOUT}_REJECTED`:
      return {
        ...state,
        loading: false,
      };

    case `${types.CREATE_USER}_FULFILLED`:
      return {
        ...state,
        loading: false,
        data: [action.payload.data, ...state.data],
      };

    case `${types.ME}_FULFILLED`:
    case `${types.LOGIN}_FULFILLED`:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        currentUser: action.payload.data,
      };

    case `${types.LOGOUT}_FULFILLED`:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        currentUser: {},
      };
    case `${types.LOGIN_SUCCESS}`:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
      };

    default:
      return state;
  }
};
