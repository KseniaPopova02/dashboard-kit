import { Form, Table } from "../../modules/ContactsContent";
import { StyledContactsWrapper } from "./style";
import { TableHeader } from "../../components";
import React, { useState, useEffect, useCallback } from "react";
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
} from "./redux";

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const [formState, setFormState] = useState({
    showContactsForm: false,
    editMode: false,
    editContact: null,
  });
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      photo:
        formState.editMode && values.photo === formState.editContact.photo
          ? formState.editContact.photo
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

    if (formState.editMode) {
      dispatch(updateExistingContact(newContact));
    } else {
      dispatch(addNewContact(newContact));
    }

    setFormState({
      ...formState,
      showContactsForm: false,
      editMode: false,
      editContact: null,
    });
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
      setFilterText(filterText);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleEdit = (id) => {
    const contact = contacts.find((contact) => contact.id === id);
    setFormState({
      ...formState,
      editMode: true,
      editContact: contact,
      showContactsForm: true,
    });
  };

  const handleCancelEditModeClick = () => {
    setFormState({
      ...formState,
      editMode: false,
      showContactsForm: false,
    });
  };

  return (
    <StyledContactsWrapper>
      <TableHeader
        setFilterText={setFilterText}
        handleSort={handleSort}
        handleFilter={handleFilterByFirstName}
        filterText={filterText}
        setShowContactsForm={(value) =>
          setFormState({ ...formState, showContactsForm: value })
        }
        handleDeleteAll={handleDeleteAll}
        headerText={{
          addContact: "Add contact",
          filterContacts: "contacts by name",
        }}
      />
      {formState.showContactsForm && (
        <Form
          setEditMode={(value) =>
            setFormState({ ...formState, editMode: value })
          }
          editMode={formState.editMode}
          editContact={formState.editContact}
          handleAddContact={handleAddContact}
          setShowContactsForm={(value) =>
            setFormState({ ...formState, showContactsForm: value })
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
