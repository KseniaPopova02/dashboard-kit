import { combineReducers } from "redux";
import { currentUserReducer } from "./currentUserReducer";
import { loggedInReducer } from "./loggedInReducer";
import { chartAxisReducer } from "./chartAxisReducer";
import { chartInfoReducer } from "./chartInfoReducer";

export const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  loggedIn: loggedInReducer,
  chartAxisData: chartAxisReducer,
  chartInfo: chartInfoReducer,
});
