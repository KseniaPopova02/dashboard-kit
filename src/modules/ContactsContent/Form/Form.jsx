import { Formik } from "formik";
import { FormContent } from "./FormContent";
import { initialValues, contactSchema } from "./formConfig";

export const Form = ({
  editMode,
  editContact,
  handleAddContact,
  setShowContactsForm,
  handleCancelEditModeClick,
  setEditMode,
}) => (
  <Formik
    initialValues={initialValues(editMode, editContact)}
    validationSchema={contactSchema}
    onSubmit={handleAddContact}
  >
    {() => (
      <FormContent
        setEditMode={setEditMode}
        editContact={editContact}
        setShowContactsForm={setShowContactsForm}
        editMode={editMode}
        handleCancelEditModeClick={handleCancelEditModeClick}
      />
    )}
  </Formik>
);