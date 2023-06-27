import { combineReducers } from "redux";
// import { currentUserReducer } from "../../modules/SignUpForm/redux";
// import { overviewPageReducer } from "../../pages/View/redux";
import { contactsPageReducer } from "../contactsReducer";

export const rootReducer = combineReducers({
  //   currentUser: currentUserReducer,
  //   overviewPage: overviewPageReducer,
  contactsPage: contactsPageReducer,
});
