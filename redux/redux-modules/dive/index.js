import { types } from "./types";

const initialState = {
  data: [], //Dive list
  monthlyData: [],
  mostReportedData: [],
  rankingDivesData: [],
  meta: {}, //meta information about Dive and pagination
  loading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case `${types.FETCH_MONTHLY_DIVE}_PENDING`:
    case `${types.FETCH_MOST_REPORTED_SPECIES}_PENDING`:
    case `${types.FETCH_RANKING_DIVES}_PENDING`:
      return {
        ...state,
        loading: true,
      };

    case `${types.FETCH_MONTHLY_DIVE}_REJECTED`:
    case `${types.FETCH_MOST_REPORTED_SPECIES}_REJECTED`:
    case `${types.FETCH_RANKING_DIVES}_REJECTED`:
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
    case `${types.FETCH_MOST_REPORTED_SPECIES}_FULFILLED`:
      return {
        ...state,
        loading: false,
        mostReportedData: action.payload.data,
      };
    case `${types.FETCH_RANKING_DIVES}_FULFILLED`:
      return {
        ...state,
        loading: false,
        rankingDivesData: action.payload.data,
      };

    default:
      return state;
  }
};
