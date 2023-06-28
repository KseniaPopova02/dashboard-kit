import { combineReducers } from "redux";
import { currentUserReducer } from "../currentUserReducer";
import { overviewPageReducer } from "../overviewReducer";
import { contactsPageReducer } from "../contactsReducer";

export const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  overviewPage: overviewPageReducer,
  contactsPage: contactsPageReducer,
});
