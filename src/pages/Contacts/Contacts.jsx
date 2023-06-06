import { Form, Table } from "../../modules/ContactsContent";
import { StyledContactsWrapper } from "./style";
import { TableHeader } from "../../components";
import React, { useState, useEffect, useCallback } from "react";
import { nanoid } from "nanoid";

export const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [originalContacts, setOriginalContacts] = useState([]);
  const [isInputActive, setIsInputActive] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editContact, setEditContact] = useState(null);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (storedContacts) {
      setContacts(storedContacts);
      setOriginalContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

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
      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact.id === editContact.id
            ? { ...newContact, date: contact.date }
            : contact
        )
      );
      setOriginalContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact.id === editContact.id
            ? { ...newContact, date: contact.date }
            : contact
        )
      );
    } else {
      setContacts((prevContacts) => [newContact, ...prevContacts]);
      setOriginalContacts((prevContacts) => [newContact, ...prevContacts]);
    }

    setShowForm(false);
    setEditMode(false);
    resetForm();
  };

  const handleDeleteAll = useCallback(() => {
    setContacts([]);
    setOriginalContacts([]);
    localStorage.removeItem("contacts");
  }, []);

  const handleSort = useCallback(() => {
    setContacts(
      [...contacts].sort((a, b) => a.firstName.localeCompare(b.firstName))
    );
  }, [contacts]);

  const handleReset = useCallback(() => {
    setContacts(originalContacts);
    setFilterText("");
    setIsInputActive(false);
  }, [originalContacts]);

  const handleFilterInputClick = () => {
    setIsInputActive(true);
  };

  const handleFilterInputBlur = (e) => {
    if (!e.target.value) {
      setIsInputActive(false);
    }
  };

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

  const handleDelete = useCallback((id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
    setOriginalContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  }, []);

  const handleEdit = useCallback(
    (id) => {
      const contact = contacts.find((contact) => contact.id === id);
      setEditContact(contact);
      setEditMode(true);
      setShowForm(true);
    },
    [contacts]
  );

  const handleCancelEditModeClick = useCallback(() => {
    setEditMode(false);
  }, []);

  return (
    <StyledContactsWrapper>
      <TableHeader
        handleSort={handleSort}
        isInputActive={isInputActive}
        handleFilterInputBlur={handleFilterInputBlur}
        handleFilter={handleFilter}
        filterText={filterText}
        handleFilterInputClick={handleFilterInputClick}
        setShowForm={setShowForm}
        handleDeleteAll={handleDeleteAll}
        handleReset={handleReset}
      />
      {showForm && (
        <Form
          setEditMode={setEditMode}
          editMode={editMode}
          editContact={editContact}
          handleAddContact={handleAddContact}
          setShowForm={setShowForm}
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
