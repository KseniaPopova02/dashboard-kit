import { combineReducers } from "redux";
import { currentUserReducer } from "./currentUserReducer";
import { loggedInReducer } from "./loggedInReducer";
import { chartAxisReducer } from "./chartAxisReducer";
import { chartInfoReducer } from "./chartInfoReducer";
import { ticketsReducer } from "./ticketsReducer";
import { overviewInfoReducer } from "./overviewInfoReducer";
import { taskReducer } from "./taskReducer";

export const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  loggedIn: loggedInReducer,
  chartAxisData: chartAxisReducer,
  chartInfo: chartInfoReducer,
  tickets: ticketsReducer,
  overviewInfo: overviewInfoReducer,
  tasks: taskReducer,
});
