import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { contactSchema, initialValues, FormContent } from "./Form";
import { nanoid } from "nanoid";
import { DropDownMenu } from "./DropDownMenu";
import {
  StyledContactsWrapper,
  StyledTable,
  StyledTableWrapper,
  StyledLastTdWrapper,
  StyledNameWrapper,
  StyledAvatar,
} from "./style";
import { UserOutlined } from "@ant-design/icons";
import { TableHeader } from "../../components";

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

  const handleDeleteAll = () => {
    setContacts([]);
    setOriginalContacts([]);
    localStorage.removeItem("contacts");
  };

  const handleSort = () => {
    setContacts(
      [...contacts].sort((a, b) => a.firstName.localeCompare(b.firstName))
    );
  };

  const handleReset = () => {
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

  const handleFilter = (filterText) => {
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

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",

      render: (_, record) => (
        <StyledNameWrapper>
          <StyledAvatar icon={<UserOutlined />} src={record.photo} />
          {record.firstName} {record.lastName}
        </StyledNameWrapper>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Created at",
      dataIndex: "date",
      key: "date",

      render: (_, record) => (
        <StyledLastTdWrapper>
          <span>{record.date}</span>
          <DropDownMenu handleDelete={handleDelete} contactId={record.id} />
        </StyledLastTdWrapper>
      ),
    },
  ];

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
            <FormContent onSubmit={handleSubmit} setShowForm={setShowForm} />
          )}
        </Formik>
      )}
      <StyledTableWrapper>
        <StyledTable
          pagination={false}
          dataSource={contacts}
          columns={columns}
        />
      </StyledTableWrapper>
      <div>pages info</div>
    </StyledContactsWrapper>
  );
};
