import { combineReducers } from "redux";
import { currentUserReducer } from "../../modules/SignUpForm/redux";
import {
  chartAxisReducer,
  chartInfoReducer,
  overviewTicketsReducer,
  overviewInfoReducer,
  overviewTasksReducer,
} from "../../pages/View/redux";
import { sidebarReducer } from "../../modules/SideBar/redux";
import { topbarInputReducer } from "../../modules/TopBar/redux";
import { photoInputReducer } from "../../modules/ContactsContent/CustomPhotoInput/redux";
import { contactsReducer } from "../../pages/Contacts/redux";

export const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  axis: chartAxisReducer,
  chartInfo: chartInfoReducer,
  tickets: overviewTicketsReducer,
  overviewInfo: overviewInfoReducer,
  tasks: overviewTasksReducer,
  isSidebarOpen: sidebarReducer,
  isTopbarInputDisplayed: topbarInputReducer,
  photoInputSrc: photoInputReducer,
  contacts: contactsReducer,
});
