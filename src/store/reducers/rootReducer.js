import { combineReducers } from "redux";
import { currentUserReducer } from "../../modules/SignUpForm/redux";
import { chartAxisReducer } from "../../modules/OverviewChartBlock/Chart/redux";
import { chartInfoReducer } from "../../modules/OverviewChartBlock/Info/redux";
import { overviewTicketsReducer } from "../../modules/OverviewTickets/redux";
import { overviewInfoReducer } from "../../modules/OverviewInfo/redux";
import { tasksReducer } from "../../modules/OverviewTask/redux";
import { sidebarReducer } from "../../modules/SideBar/redux";

export const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  axis: chartAxisReducer,
  chartInfo: chartInfoReducer,
  tickets: overviewTicketsReducer,
  overviewInfo: overviewInfoReducer,
  tasks: tasksReducer,
  isOpen: sidebarReducer,
});
