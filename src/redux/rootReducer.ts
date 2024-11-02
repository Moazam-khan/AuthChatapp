import { combineReducers } from "redux";
import { user, app } from "./reducers";

const createRootReducer = () =>
  combineReducers({
    user,
    app,
  });

export default createRootReducer;
