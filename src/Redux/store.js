import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "react-thunk";
import combineReducer from "./combineReducer";

const middleware = [thunk];
const store = createStore(
  combineReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
