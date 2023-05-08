import React, { useState, useEffect } from "react";
import { Formik } from "formik";

import { contactSchema, initialValues, FormContent } from "./Form";

export const ContactsContent = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (storedContacts) {
      setContacts(storedContacts);
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
    setShowForm(false);
    resetForm();
    console.log("Submitted");
  };

  const handleDeleteAllContacts = () => {
    setContacts([]);
    localStorage.removeItem("contacts");
  };

  return (
    <div>
      <div>
        <button onClick={handleDeleteAllContacts}>Delete all</button>
        <button onClick={() => setShowForm(true)}>Add contact</button>
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
