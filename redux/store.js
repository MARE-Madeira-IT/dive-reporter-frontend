import rootReducer from "./rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import messageMiddleware from "./messageMiddleware";
import promise from "redux-promise-middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(messageMiddleware, thunk, promise))
);
