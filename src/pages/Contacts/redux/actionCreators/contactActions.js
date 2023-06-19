import { actionTypes } from "../actionTypes";

const {
  SET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  CLEAR_CONTACTS,
} = actionTypes;

export const setContacts = (contacts) => ({
  type: SET_CONTACTS,
  payload: contacts,
});

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

export const clearContacts = () => ({
  type: CLEAR_CONTACTS,
});
