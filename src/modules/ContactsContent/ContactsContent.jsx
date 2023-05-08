import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { contactSchema, initialValues, FormContent } from "./Form";

export const ContactsContent = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [originalContacts, setOriginalContacts] = useState([]);
  const [isInputActive, setIsInputActive] = useState(false);
  const [filterText, setFilterText] = useState("");

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
      id: Date.now(),
      photo: values.photo,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      address: values.address,
    };
    setContacts((prevContacts) => [newContact, ...prevContacts]);
    setOriginalContacts((prevContacts) => [newContact, ...prevContacts]);
    setShowForm(false);
    resetForm();
    console.log("Submitted");
  };

  const handleDeleteAllContacts = () => {
    setContacts([]);
    setOriginalContacts([]);
    localStorage.removeItem("contacts");
  };

  const handleSortContacts = () => {
    setContacts(
      [...contacts].sort((a, b) => a.firstName.localeCompare(b.firstName))
    );
  };

  const handleResetContacts = () => {
    setContacts(originalContacts);
    setFilterText("");
  };

  const handleFilterInputClick = () => {
    setIsInputActive(true);
  };

  const handleFilterInputBlur = (e) => {
    if (!e.target.value) {
      setIsInputActive(false);
    }
  };

  const handleFilterContacts = (filterText) => {
    setFilterText(filterText);
    if (!filterText) {
      setContacts(originalContacts);
    } else {
      const filteredContacts = originalContacts.filter((contact) =>
        contact.firstName.toLowerCase().includes(filterText.toLowerCase())
      );
      setContacts(filteredContacts);
    }
  };

  return (
    <div>
      <div>
        {isInputActive ? (
          <input
            type="text"
            placeholder="Filter contacts by name"
            onBlur={handleFilterInputBlur}
            onChange={(e) => handleFilterContacts(e.target.value)}
            autoFocus
            value={filterText}
          />
        ) : (
          <button onClick={handleFilterInputClick}>
            Filter contacts by name
          </button>
        )}
        <button onClick={handleSortContacts}>Sort</button>
        <button onClick={handleDeleteAllContacts}>Delete all</button>
        <button onClick={() => setShowForm(true)}>Add contact</button>
        <button onClick={handleResetContacts}>Reset</button>
      </div>
      {showForm && (
        <Formik
          initialValues={initialValues}
          validationSchema={contactSchema}
          onSubmit={handleAddContact}
        >
          {({ handleSubmit }) => (
            <FormContent onSubmit={handleSubmit} setShowForm={setShowForm} />
          )}
        </Formik>
      )}
      {contacts.length > 0 ? (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <div>
                <img src={contact.photo} alt={contact.firstName} />
                <div>
                  {contact.firstName} {contact.lastName}
                </div>
                <div>{contact.email}</div>
                <div>{contact.address}</div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>No contacts yet</div>
      )}
    </div>
  );
};
