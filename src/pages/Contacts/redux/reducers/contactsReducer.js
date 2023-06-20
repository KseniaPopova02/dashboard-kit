import { actionTypes } from "../actionTypes";

const {
  SET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACTS,
  FILTER_CONTACTS,
  SORT_CONTACTS,
} = actionTypes;

const initialState = {
  contacts: [],
};

export const contactsReducer = (state = initialState.contacts, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return action.payload;

    case ADD_CONTACT:
      return [action.payload, ...state];

    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== action.payload);

    case UPDATE_CONTACT:
      return state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );

    case DELETE_CONTACTS:
      return [];

    case FILTER_CONTACTS:
      const filterText = action.payload.toLowerCase()();
      return state.filter((contact) =>
        contact.firstName.toLowerCase().includes(filterText)
      );

    case SORT_CONTACTS:
      return [...state].sort((a, b) => a.firstName.localeCompare(b.firstName));

    default:
      return state;
  }
};
