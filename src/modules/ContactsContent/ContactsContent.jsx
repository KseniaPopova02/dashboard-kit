import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { contactSchema, initialValues, FormContent } from "./Form";
import { StyledHeaderWrapper, StyledBtnWrapper } from "./style";
import { ReactComponent as SortSvg } from "../../assets/svg/sort.svg";
import { ReactComponent as FilterSvg } from "../../assets/svg/filter.svg";

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
      date: new Date().toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
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
      <StyledHeaderWrapper>
        <StyledBtnWrapper>
          <div onClick={handleSortContacts}>
            <div>
              <SortSvg />
            </div>
            <div>Sort</div>
          </div>
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
            <div onClick={handleFilterInputClick}>
              <div>
                <FilterSvg />
              </div>
              <div>Filter contacts by name</div>
            </div>
          )}
        </StyledBtnWrapper>
        <StyledBtnWrapper>
          <div onClick={handleDeleteAllContacts}>Delete all</div>
          <div onClick={() => setShowForm(true)}>Add contact</div>
          <div onClick={handleResetContacts}>Reset</div>
        </StyledBtnWrapper>
      </StyledHeaderWrapper>
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
                <div> {contact.date}</div>
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
