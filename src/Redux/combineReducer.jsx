import { combineReducers } from "redux";
import login from "./Reducers/login";

const combineReducer = combineReducers({
  login: login,
});

export default combineReducer;
