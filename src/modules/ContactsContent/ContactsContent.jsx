import React, { useState } from "react";
import { Formik } from "formik";

import { contactSchema, initialValues, FormContent } from "./Form";

export const ContactsContent = () => {
  const [contacts, setContacts] = useState([]);
  const [sortType, setSortType] = useState("asc");
  const [showForm, setShowForm] = useState(false);
  const [filterBy, setFilterBy] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const handleAddContact = (values, { resetForm }) => {
    const newContact = {
      id: Date.now(),
      photo: values.photo,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      address: values.address,
    };
    setContacts([...contacts, newContact]);
    setShowForm(false);
    resetForm();
  };

  const handleSortContacts = () => {
    const sortedContacts = [...contacts].sort((a, b) => {
      if (sortType === "asc") {
        return a.firstName.localeCompare(b.firstName);
      } else {
        return b.firstName.localeCompare(a.firstName);
      }
    });
    setContacts(sortedContacts);
    setSortType(sortType === "asc" ? "desc" : "asc");
  };

  const handleFilterBy = (param) => {
    setFilterBy(param);
    setFilterValue("");
  };

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const filteredContacts = contacts
    .filter((contact) =>
      filterBy
        ? contact[filterBy].toLowerCase().includes(filterValue.toLowerCase())
        : true
    )
    .sort((a, b) => a[filterBy].localeCompare(b[filterBy]));

  return (
    <div>
      <div>
        {filterBy ? (
          <input
            type="text"
            value={filterValue}
            onChange={handleFilterChange}
          />
        ) : (
          <button onClick={() => handleFilterBy("firstName")}>Filter</button>
        )}
        <button onClick={() => handleFilterBy("")}>Clear filter</button>
        <button onClick={handleSortContacts}>Sort</button>
        <button onClick={() => setShowForm(true)}>Add contact</button>
      </div>
      {showForm && (
        <Formik
          initialValues={initialValues}
          onSubmit={handleAddContact}
          validationSchema={contactSchema}
        >
          {() => <FormContent setShowForm={setShowForm} />}
        </Formik>
      )}
      <ul>
        {filteredContacts.map((contact) => (
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
    </div>
  );
};
