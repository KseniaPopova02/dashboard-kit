import { StyledContactsWrapper } from "./style";
import { TableHeader } from "../../components";
import { Form } from "./Form";
import { Table } from "./Table";

export const ContactsContentRep = ({
  handleSort,
  isInputActive,
  handleFilterInputBlur,
  handleFilter,
  filterText,
  handleFilterInputClick,
  setShowForm,
  handleDeleteAll,
  handleReset,
  showForm,
  editMode,
  editContact,
  handleAddContact,
  handleCancelEditModeClick,
  handleDelete,
  handleEdit,
  contacts,
  setEditMode,
}) => (
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
