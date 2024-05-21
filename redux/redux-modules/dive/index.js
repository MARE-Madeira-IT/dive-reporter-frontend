import { types } from "./types";

const initialState = {
  data: [], //Dive list
  monthlyData: [],
  mostReportedData: [],
  rankingDivesData: [],
  creaturesData: [],
  coordinatesData: [],
  meta: {}, //meta information about Dive and pagination
  loading: false,
  loadingCreatures: false,
  speciesData: [],
  loadingExport: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case `${types.FETCH_MONTHLY_DIVE}_PENDING`:
    case `${types.FETCH_MOST_REPORTED_SPECIES}_PENDING`:
    case `${types.FETCH_RANKING_DIVES}_PENDING`:
    case `${types.FETCH_DIVE_COORDS}_PENDING`:
    case `${types.FETCH_DIVE}_PENDING`:
    case `${types.FETCH_SPECIES_DIVES}_PENDING`:
    case `${types.DELETE_DIVE}_PENDING`:
      return {
        ...state,
        loading: true,
      };

    case `${types.FETCH_DIVE_CREATURES}_PENDING`:
      return {
        ...state,
        loadingCreatures: true,
      };
    case `${types.EXPORT_DIVE_CSV}_PENDING`:
      return {
        ...state,
        loadingExport: true,
      };

    case `${types.FETCH_MONTHLY_DIVE}_REJECTED`:
    case `${types.FETCH_MOST_REPORTED_SPECIES}_REJECTED`:
    case `${types.FETCH_RANKING_DIVES}_REJECTED`:
    case `${types.FETCH_DIVE_COORDS}_REJECTED`:
    case `${types.FETCH_DIVE}_REJECTED`:
    case `${types.FETCH_SPECIES_DIVES}_REJECTED`:
    case `${types.DELETE_DIVE}_REJECTED`:
      return {
        ...state,
        loading: false,
      };

    case `${types.FETCH_DIVE_CREATURES}_REJECTED`:
      return {
        ...state,
        loadingCreatures: false,
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
    case `${types.FETCH_DIVE_CREATURES}_FULFILLED`:
      return {
        ...state,
        loadingCreatures: false,
        creaturesData: action.payload.data.data,
      };
    case `${types.FETCH_DIVE_COORDS}_FULFILLED`:
      return {
        ...state,
        loading: false,
        coordinatesData: action.payload.data.data,
      };

    case `${types.FETCH_DIVE}_FULFILLED`:
      return {
        ...state,
        loading: false,
        data: action.payload.data.data,
        meta: action.payload.data.meta,
      };

    case `${types.FETCH_SPECIES_DIVES}_FULFILLED`:
      return {
        ...state,
        loading: false,
        speciesData: action.payload.data,
      };

    case `${types.DELETE_DIVE}_FULFILLED`:
      return {
        ...state,
        loading: false,
        data: state.data.filter((dive) => dive.id !== action.meta.id),
      };

    case `${types.EXPORT_DIVE_CSV}_REJECTED`:
    case `${types.EXPORT_DIVE_CSV}_FULFILLED`:
      return {
        ...state,
        loadingExport: false,
      };

    default:
      return state;
  }
};
