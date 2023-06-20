import { Api, CONTACTS } from "../../../../API";
import { updateTaskCheckbox } from "../../../../modules/OverviewTask/redux";
import {
  setContacts,
  setContactToAdd,
  setContactToDelete,
  setContactToUpdate,
  setAllContactsToDelete,
} from "../actionCreators";

export const fetchContacts = () => {
  return async (dispatch) => {
    try {
      const response = await Api.get(CONTACTS);
      dispatch(setContacts(response.reverse()));
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterContactsByFirstName = (filterText) => {
  return async (dispatch) => {
    try {
      const response = await Api.get(
        `${CONTACTS}?firstName_like=${filterText}`
      );
      dispatch(setContacts(response));
    } catch (error) {
      console.log(error);
    }
  };
};

export const sortContactsByFirstName = () => {
  return async (dispatch) => {
    try {
      const response = await Api.get(`${CONTACTS}?_sort=firstName`);
      dispatch(setContacts(response));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addNewContact = (newContact) => {
  return async (dispatch) => {
    try {
      await Api.post(CONTACTS, newContact).then(() =>
        dispatch(setContactToAdd(newContact))
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteContact = (id) => {
  return async (dispatch) => {
    try {
      await Api.delete(`${CONTACTS}/${id}`);
      dispatch(setContactToDelete(id));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteAllContact = () => {
  return async (dispatch) => {
    try {
      const contacts = await Api.get(CONTACTS);
      for (const contact of contacts) {
        await Api.delete(`${CONTACTS}/${contact.id}`);
      }
      dispatch(setAllContactsToDelete());
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateExistingContact = (id, updatedContact) => {
  return async (dispatch) => {
    try {
      await Api.put(CONTACTS, id, updatedContact);
      dispatch(setContactToUpdate(updatedContact));
    } catch (error) {
      console.log(error);
    }
  };
};
