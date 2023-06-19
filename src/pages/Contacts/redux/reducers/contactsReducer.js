import { actionTypes } from "../actionTypes";

const {
  SET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  CLEAR_CONTACTS,
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

    case CLEAR_CONTACTS:
      return [];

    default:
      return state;
  }
};
