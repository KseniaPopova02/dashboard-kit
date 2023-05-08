import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
  photo: Yup.string(),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  address: Yup.string(),
});

export const ContactsContent = () => {
  const [contacts, setContacts] = useState([]);
  const [sortType, setSortType] = useState("asc");
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState("");

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

  const handleFilterClick = () => {
    const input = document.getElementById("filterInput");
    setFilter(input.value);
  };

  const filteredContacts = contacts
    .filter((contact) =>
      contact.firstName.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => a.firstName.localeCompare(b.firstName));

  return (
    <div>
      <button onClick={handleFilterClick}>Filter</button>
      <button onClick={handleSortContacts}>Sort</button>
      <button onClick={() => setShowForm(true)}>Add contact</button>
      {showForm && (
        <Formik
          initialValues={{
            photo: "",
            firstName: "",
            lastName: "",
            email: "",
            address: "",
          }}
          onSubmit={handleAddContact}
          validationSchema={contactSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <Field type="text" name="photo" placeholder="Photo" />
              <Field type="text" name="firstName" placeholder="First name" />
              {errors.firstName && touched.firstName && (
                <div>{errors.firstName}</div>
              )}
              <Field type="text" name="lastName" placeholder="Last name" />
              {errors.lastName && touched.lastName && (
                <div>{errors.lastName}</div>
              )}
              <Field type="email" name="email" placeholder="Email" />
              {errors.email && touched.email && <div>{errors.email}</div>}
              <Field type="text" name="address" placeholder="Address" />
              <button type="submit">Add</button>
              <button type="button" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </Form>
          )}
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
