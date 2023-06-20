import { actionTypes } from "../actionTypes";

const {
  SET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACTS,
} = actionTypes;

export const setContacts = (contacts) => ({
  type: SET_CONTACTS,
  payload: contacts,
});

export const setContactToAdd = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const setContactToDelete = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const setAllContactsToDelete = () => ({ type: DELETE_CONTACTS });

export const setContactToUpdate = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});
