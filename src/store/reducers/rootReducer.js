import { combineReducers } from "redux";
import { currentUserReducer } from "./currentUserReducer";
import { loggedInReducer } from "./loggedInReducer";

export const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  loggedIn: loggedInReducer,
});
