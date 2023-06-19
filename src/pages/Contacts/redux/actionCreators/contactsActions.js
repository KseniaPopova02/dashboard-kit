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

export const deleteContacts = () => ({ type: DELETE_CONTACTS });

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

export const filterContacts = (filterText) => ({
  type: FILTER_CONTACTS,
  payload: filterText,
});

export const sortContacts = () => ({
  type: SORT_CONTACTS,
});
