import { combineReducers } from "redux";
import { currentUserReducer } from "../../modules/SignUpForm/redux";
import { overviewPageReducer } from "../../pages/View/redux";
import { photoInputReducer } from "../../modules/ContactsContent/CustomPhotoInput/redux";
import { contactsReducer } from "../../pages/Contacts/redux";

export const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  overviewPage: overviewPageReducer,
  photoInputSrc: photoInputReducer,
  contacts: contactsReducer,
});
