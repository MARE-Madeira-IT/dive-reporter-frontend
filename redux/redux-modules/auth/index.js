import { types } from "./types";

const initialState = {
  data: [], //
  meta: {}, //meta information about litter and pagination
  loading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case `${types.CREATE_USER}_PENDING`:
      return {
        ...state,
        loading: true,
      };

    case `${types.CREATE_USER}_REJECTED`:
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

    default:
      return state;
  }
};
