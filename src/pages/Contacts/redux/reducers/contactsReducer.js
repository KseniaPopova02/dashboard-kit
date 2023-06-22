import { actionTypes } from "../actionTypes";

const {
  SET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACTS,
  SET_EDIT_MODE,
  SET_EDIT_CONTACT,
  SHOW_CONTACTS_FORM,
} = actionTypes;

const initialState = {
  contacts: [],
  filterText: "",
  showContactsForm: false,
  editMode: false,
  editContact: null,
};

export const contactsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return { ...state, contacts: action.payload };

    case ADD_CONTACT:
      return { ...state, contacts: [action.payload, ...state.contacts] };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };

    case DELETE_CONTACTS:
      return { ...state, contacts: [] };

    case SHOW_CONTACTS_FORM:
      return {
        ...state,
        showContactsForm: action.payload,
      };

    case SET_EDIT_MODE:
      return {
        ...state,
        editMode: action.payload,
      };

    case SET_EDIT_CONTACT:
      return {
        ...state,
        editContact: action.payload,
      };

    default:
      return state;
  }
};
