import { combineReducers } from "redux";
import auth from "./redux-modules/auth";
import contact from "./redux-modules/contact";
import dive from "./redux-modules/dive";
import divingSpots from "./redux-modules/divingSpots";

const rootReducer = combineReducers({
  auth,
  contact,
  dive,
  divingSpots,
});

export default rootReducer;
