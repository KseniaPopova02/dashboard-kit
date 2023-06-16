import { combineReducers } from "redux";
import { currentUserReducer } from "./currentUserReducer";
import { loggedInReducer } from "./loggedInReducer";
import { chartAxisReducer } from "./chartAxisReducer";
import { chartInfoReducer } from "../../modules/OverviewChartBlock/Info/redux";
import { overviewTicketsReducer } from "../../modules/OverviewTickets/redux";
import { overviewInfoReducer } from "../../modules/OverviewInfo/redux";
import { taskReducer } from "./taskReducer";
import { sidebarReducer } from "./sidebarReducer";

export const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  loggedIn: loggedInReducer,
  chartAxisData: chartAxisReducer,
  chartInfo: chartInfoReducer,
  tickets: overviewTicketsReducer,
  overviewInfo: overviewInfoReducer,
  tasks: taskReducer,
  isOpen: sidebarReducer,
});
