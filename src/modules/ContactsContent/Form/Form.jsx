import { Formik } from "formik";
import { FormContent } from "./FormContent";
import { initialValues, contactSchema } from "./formConfig";

export const Form = ({
  editMode,
  editContact,
  handleAddContact,
  setShowForm,
  handleCancelEditModeClick,
  setEditMode,
}) => (
  <Formik
    initialValues={initialValues(editMode, editContact)}
    validationSchema={contactSchema}
    onSubmit={handleAddContact}
  >
    {({ handleSubmit }) => (
      <FormContent
        setEditMode={setEditMode}
        editContact={editContact}
        onSubmit={handleSubmit}
        setShowForm={setShowForm}
        editMode={editMode}
        handleCancelEditModeClick={handleCancelEditModeClick}
      />
    )}
  </Formik>
);
