import { types } from "./types";

const initialState = {
  data: [], //DivingSpot list
  DivingSpotSelector: [],
  meta: {}, //meta information about DivingSpots and pagination
  loading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case `${types.FETCH_DIVING_SPOT_SELECTOR}_PENDING`:
    case `${types.ADD_TO_USER}_PENDING`:
    case `${types.REMOVE_FROM_USER}_PENDING`:
    case `${types.CREATE_DIVING_SPOT}_PENDING`:
      return {
        ...state,
        loading: true,
      };

    case `${types.FETCH_DIVING_SPOT_SELECTOR}_REJECTED`:
    case `${types.ADD_TO_USER}_REJECTED`:
    case `${types.REMOVE_FROM_USER}_REJECTED`:
    case `${types.CREATE_DIVING_SPOT}_REJECTED`:
      return {
        ...state,
        loading: false,
      };

    case `${types.FETCH_DIVING_SPOT_SELECTOR}_FULFILLED`:
      return {
        ...state,
        loading: false,
        DivingSpotSelector: action.payload.data.data,
      };

    case `${types.ADD_TO_USER}_FULFILLED`:
      return {
        ...state,
        loading: false,
      };

    case `${types.REMOVE_FROM_USER}_FULFILLED`:
      return {
        ...state,
        loading: false,
      };

    case `${types.CREATE_DIVING_SPOT}_FULFILLED`:
      return {
        ...state,
        data: [action.payload.data.data, ...state.data],
      };

    default:
      return state;
  }
};
