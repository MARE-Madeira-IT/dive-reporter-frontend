import { types } from "./types";

const initialState = {
  data: [], //Dive list
  monthlyData: [],
  mostReportedData: [],
  speciesReportsData: [],
  meta: {}, //meta information about Dive and pagination
  loading: false,
  coordinates: [],
  loadingCoordinates: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case `${types.FETCH_MONTHLY_DIVE}_PENDING`:
      return {
        ...state,
        loading: true,
      };

    case `${types.FETCH_MONTHLY_DIVE}_REJECTED`:
      return {
        ...state,
        loading: false,
      };

    case `${types.FETCH_MONTHLY_DIVE}_FULFILLED`:
      return {
        ...state,
        loading: false,
        monthlyData: action.payload.data,
      };

    default:
      return state;
  }
};
