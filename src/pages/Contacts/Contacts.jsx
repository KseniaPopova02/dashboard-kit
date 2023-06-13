import { Form, Table } from "../../modules/ContactsContent";
import { StyledContactsWrapper } from "./style";
import { TableHeader } from "../../components";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { nanoid } from "nanoid";

export const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [formState, setFormState] = useState({
    showContactsForm: false,
    editMode: false,
    editContact: null,
  });
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const originalContacts = useMemo(() => {
    return JSON.parse(localStorage.getItem("contacts")) || [];
  }, []);

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

    const updatedContacts = formState.editMode
      ? contacts.map((contact) =>
          contact.id === formState.editContact.id
            ? { ...newContact, date: contact.date }
            : contact
        )
      : [newContact, ...contacts];

    setContacts(updatedContacts);
    setFormState({
      ...formState,
      showContactsForm: false,
      editMode: false,
      editContact: null,
    });
    resetForm();
  };

  const handleDeleteAll = useCallback(() => {
    setContacts([]);
    localStorage.removeItem("contacts");
  }, []);

  const handleSort = useCallback(() => {
    setContacts(
      [...contacts].sort((a, b) => a.firstName.localeCompare(b.firstName))
    );
  }, [contacts]);

  const handleFilter = useCallback(
    (filterText) => {
      setFilterText(filterText);
      if (!filterText) {
        setContacts(originalContacts);
      } else {
        const filteredContacts = originalContacts.filter((contact) =>
          contact.firstName.toLowerCase().includes(filterText.toLowerCase())
        );
        setContacts(filteredContacts);
      }
    },
    [originalContacts]
  );

  const handleDelete = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
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
        handleSort={handleSort}
        handleFilter={handleFilter}
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
