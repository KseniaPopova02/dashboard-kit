import { combineReducers } from "redux";
import { currentUserReducer } from "../../modules/SignUpForm/redux";
import { chartAxisReducer } from "../../modules/OverviewChartBlock/Chart/redux";
import { chartInfoReducer } from "../../modules/OverviewChartBlock/Info/redux";
import { overviewTicketsReducer } from "../../modules/OverviewTickets/redux";
import { overviewInfoReducer } from "../../modules/OverviewInfo/redux";
import { tasksReducer } from "../../modules/OverviewTask/redux";
import { sidebarReducer } from "../../modules/SideBar/redux";
import { topbarInputReducer } from "../../modules/TopBar/redux";
import { photoInputReducer } from "../../modules/ContactsContent/CustomPhotoInput/redux";

export const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  axis: chartAxisReducer,
  chartInfo: chartInfoReducer,
  tickets: overviewTicketsReducer,
  overviewInfo: overviewInfoReducer,
  tasks: tasksReducer,
  isSidebarOpen: sidebarReducer,
  isTopbarInputDisplayed: topbarInputReducer,
  photoInputSrc: photoInputReducer,
});
