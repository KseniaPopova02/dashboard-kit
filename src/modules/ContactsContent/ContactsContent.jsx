import React, { useState, useEffect, useCallback } from "react";
import { Formik } from "formik";
import { contactSchema, initialValues, FormContent } from "./Form";
import { Table } from "./Table/";
import { nanoid } from "nanoid";
import { StyledContactsWrapper } from "./style";
import { StyledAvatar } from "./Table/style";
import { TableHeader } from "../../components";
import { UserOutlined } from "@ant-design/icons";

export const ContactsContent = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [originalContacts, setOriginalContacts] = useState([]);
  const [isInputActive, setIsInputActive] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [editContact, setEditContact] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editContactForForm, setEditContactForForm] = useState(null);

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
      photo: values.photo ? (
        URL.createObjectURL(values.photo)
      ) : (
        <StyledAvatar icon={<UserOutlined />} />
      ),
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
          contact.id === editContact ? newContact : contact
        )
      );
      setOriginalContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact.id === editContact ? newContact : contact
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

  const handleDeleteAll = () => {
    setContacts([]);
    setOriginalContacts([]);
    localStorage.removeItem("contacts");
  };

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

  const handleDelete = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
    setOriginalContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const handleEdit = (id) => {
    const contact = contacts.find((contact) => contact.id === id);
    setEditContactForForm(contact);
    setEditContact(id);
    setEditMode(true);
    setShowForm(true);
  };

  const handleCancelEditModeClick = () => {
    setEditMode(false);
  };

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
        <Formik
          initialValues={initialValues}
          validationSchema={contactSchema}
          onSubmit={handleAddContact}
        >
          {({ handleSubmit }) => (
            <FormContent
              onSubmit={handleSubmit}
              setShowForm={setShowForm}
              editMode={editMode}
              handleCancelEditModeClick={handleCancelEditModeClick}
            />
          )}
        </Formik>
      )}
      <Table
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        contacts={contacts}
      />
    </StyledContactsWrapper>
  );
};
