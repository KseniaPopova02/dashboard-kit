import { actionTypes } from "../../actionTypes";

const { SET_EDIT_MODE, SET_EDIT_CONTACT, SHOW_CONTACTS_FORM } = actionTypes;

export const setEditMode = (payload) => ({
  type: SET_EDIT_MODE,
  payload,
});

export const setEditContact = (contact) => ({
  type: SET_EDIT_CONTACT,
  payload: contact,
});

export const setContactsFormToShow = (payload) => ({
  type: SHOW_CONTACTS_FORM,
  payload,
});
