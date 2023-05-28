import { Field, ErrorMessage } from "formik";
import {
  CustomInput,
  Button,
  StyledFormWrapper,
  LogoTitle,
} from "../../../components";

import { ModalWrapper, ModalOverlay, StyledForm, StyledBtn } from "./style";

export const FormContent = ({
  setShowForm,
  onSubmit,
  editMode,
  editContactForForm,
}) => {
  return (
    <>
      <ModalOverlay />
      <ModalWrapper>
        <StyledForm onSubmit={onSubmit}>
          <StyledFormWrapper>
            <LogoTitle>
              {editMode ? "Edit contact" : "Add new contact"}
            </LogoTitle>

            <Field name="photo">
              {({ field, form }) => (
                <div>
                  <input
                    id="photo"
                    type="file"
                    onChange={(event) =>
                      form.setFieldValue(field.name, event.target.files[0])
                    }
                  />
                  <ErrorMessage name="photo" component="div" />
                </div>
              )}
            </Field>

            <CustomInput
              label="First name"
              name="firstName"
              type="text"
              placeholder="First name"
            />
            <CustomInput
              label="Last name"
              name="lastName"
              type="text"
              placeholder="Last name"
              // value={editContactForForm ? editContactForForm.lastName : ""}
            />
            <CustomInput
              label="Email"
              name="email"
              type="text"
              placeholder="Email"
              // value={editContactForForm ? editContactForForm.email : ""}
            />
            <CustomInput
              label="Address"
              name="address"
              type="text"
              placeholder="address"
              // value={editContactForForm ? editContactForForm.address : ""}
            />
            <Button type="submit">Save</Button>
            <StyledBtn type="button" onClick={() => setShowForm(false)}>
              Cancel
            </StyledBtn>
          </StyledFormWrapper>
        </StyledForm>
      </ModalWrapper>
    </>
  );
};
