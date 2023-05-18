import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { contactSchema, initialValues, FormContent } from "./Form";
import { nanoid } from "nanoid";
import { DropDownMenu } from "./DropDownMenu";
import {
  StyledHeaderWrapper,
  StyledBtnWrapper,
  StyledBtnRight,
  StyledHeaderSvg,
  StyledInput,
  StyledBtnLeft,
  StyledPlusOutlined,
  StyledBtnText,
  StyledSpan,
  StyledContactsWrapper,
  StyledTable,
  StyledTH,
  StyledTD,
  StyledTableWrapper,
} from "./style";
import { ReloadOutlined, DeleteOutlined } from "@ant-design/icons";
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
      id: nanoid(),
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
    setIsInputActive(false);
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

  const handleDelete = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
    setOriginalContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <StyledContactsWrapper>
      <StyledHeaderWrapper>
        <StyledBtnWrapper className="left">
          <StyledBtnRight onClick={handleSortContacts}>
            <StyledHeaderSvg>
              <SortSvg />
            </StyledHeaderSvg>
            <div>Sort</div>
          </StyledBtnRight>
          {isInputActive ? (
            <StyledInput
              type="text"
              placeholder="Filter contacts by name"
              onBlur={handleFilterInputBlur}
              onChange={(e) => handleFilterContacts(e.target.value)}
              autoFocus
              value={filterText}
            />
          ) : (
            <StyledBtnRight onClick={handleFilterInputClick}>
              <StyledHeaderSvg>
                <FilterSvg />
              </StyledHeaderSvg>
              <div>
                Filter <StyledSpan>contacts by name</StyledSpan>
              </div>
            </StyledBtnRight>
          )}
        </StyledBtnWrapper>
        <StyledBtnWrapper>
          <StyledBtnLeft onClick={() => setShowForm(true)}>
            <StyledPlusOutlined />
            <StyledBtnText>Add contact</StyledBtnText>
          </StyledBtnLeft>
          <StyledBtnLeft onClick={handleDeleteAllContacts}>
            <DeleteOutlined />
          </StyledBtnLeft>

          <StyledBtnLeft onClick={handleResetContacts}>
            <ReloadOutlined />
          </StyledBtnLeft>
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
        <StyledTableWrapper>
          <StyledTable>
            <thead>
              <tr>
                <StyledTH>Name</StyledTH>
                <StyledTH>Email</StyledTH>
                <StyledTH>Address</StyledTH>
                <StyledTH>Created at</StyledTH>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <StyledTD>
                    <div>
                      <img src={contact.photo} alt={contact.firstName} />
                      <div>
                        {contact.firstName} {contact.lastName}
                      </div>
                    </div>
                  </StyledTD>
                  <StyledTD>{contact.email}</StyledTD>
                  <StyledTD>{contact.address}</StyledTD>
                  <StyledTD>{contact.date}</StyledTD>
                  <StyledTD>
                    <DropDownMenu handleDelete={handleDelete} />
                  </StyledTD>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </StyledTableWrapper>
      ) : (
        <div>No contacts yet</div>
      )}
      <div>pages info</div>
    </StyledContactsWrapper>
  );
};
