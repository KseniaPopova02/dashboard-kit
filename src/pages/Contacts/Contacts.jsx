import { Form, Table } from "../../modules/ContactsContent";
import { StyledContactsWrapper } from "./style";
import { TableHeader } from "../../components";
import React, { useEffect, useCallback } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContacts,
  addNewContact,
  deleteContact,
  deleteAllContact,
  updateExistingContact,
  sortContactsByFirstName,
  filterContactsByFirstName,
  setFilterText,
  setEditMode,
  setEditContact,
  setContactsFormToShow,
} from "../../store";

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactsPage.contacts);
  const filterText = useSelector((state) => state.contactsPage.filterText);
  const showContactsForm = useSelector(
    (state) => state.contactsPage.showContactsForm
  );
  const editMode = useSelector((state) => state.contactsPage.editMode);
  const editContact = useSelector((state) => state.contactsPage.editContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      photo:
        editMode && values.photo === editContact.photo
          ? editContact.photo
          : values.photo
          ? URL.createObjectURL(values.photo)
          : null,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      address: values.address,
      date: new Date().toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };

    if (editMode) {
      const updatedContact = {
        ...newContact,
        date: editContact.date,
        id: editContact.id,
      };
      dispatch(updateExistingContact(editContact.id, updatedContact));
    } else {
      dispatch(addNewContact(newContact));
    }

    dispatch(setContactsFormToShow(false));
    dispatch(setEditContact(null));
    dispatch(setEditMode(false));
    resetForm();
  };

  const handleDeleteAll = useCallback(() => {
    dispatch(deleteAllContact());
  }, [dispatch]);

  const handleSort = useCallback(() => {
    dispatch(sortContactsByFirstName());
  }, [dispatch]);

  const handleFilterByFirstName = async (filterText) => {
    try {
      await dispatch(filterContactsByFirstName(filterText));
      dispatch(setFilterText(filterText));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleEdit = (id) => {
    const contact = contacts.find((contact) => contact.id === id);
    dispatch(setContactsFormToShow(true));
    dispatch(setEditContact(contact));
    dispatch(setEditMode(true));
  };

  const handleCancelEditModeClick = () => {
    dispatch(setEditMode(false));
    dispatch(setContactsFormToShow(false));
  };

  return (
    <StyledContactsWrapper>
      <TableHeader
        handleSort={handleSort}
        handleFilter={handleFilterByFirstName}
        filterText={filterText}
        setShowContactsForm={(value) => dispatch(setContactsFormToShow(value))}
        handleDeleteAll={handleDeleteAll}
        headerText={{
          addContact: "Add contact",
          filterContacts: "contacts by name",
        }}
      />
      {showContactsForm && (
        <Form
          setEditMode={(value) => dispatch(setEditMode(value))}
          editMode={editMode}
          editContact={editContact}
          handleAddContact={handleAddContact}
          setShowContactsForm={(value) =>
            dispatch(setContactsFormToShow(value))
          }
          handleCancelEditModeClick={handleCancelEditModeClick}
        />
      )}
      <Table
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        contacts={contacts}
      />
    </StyledContactsWrapper>
  );
};
