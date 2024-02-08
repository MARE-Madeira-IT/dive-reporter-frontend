import { combineReducers } from "redux";
import auth from "./redux-modules/auth";
import contact from "./redux-modules/contact";
import dive from "./redux-modules/dive";

const rootReducer = combineReducers({
  auth,
  contact,
  dive,
});

export default rootReducer;
