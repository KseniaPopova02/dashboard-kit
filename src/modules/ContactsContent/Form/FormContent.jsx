// import { Field, ErrorMessage } from "formik";
// import { CustomPhotoInput } from "./CustomPhotoInput";
import {
  CustomInput,
  Button,
  StyledFormWrapper,
  LogoTitle,
} from "../../../components";
import { CustomPhotoInput } from "./CustomPhotoInput";
import { ModalWrapper, ModalOverlay, StyledForm, StyledBtn } from "./style";

export const FormContent = ({
  setShowForm,
  onSubmit,
  editMode,
  handleCancelEditModeClick,
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

            <CustomPhotoInput />

            {/* <Field name="photo">
              {({ field, form }) => (
                <div>
                  <input
                    name="photo"
                    type="file"
                    accept="image/*"
                    onChange={(event) =>
                      form.setFieldValue(field.name, event.target.files[0])
                    }
                  />
                  <ErrorMessage name="photo" component="div" />
                </div>
              )}
            </Field> */}
            {/* <CustomPhotoInput
              type="file"
              accept="image/*"
              name="photo"
              label="add photo"
            /> */}

            {/* <Field name="photo" component={CustomPhotoInput} /> */}

            {/* <CustomPhotoInput /> */}

            {/* <CustomPhotoInput label="add photo" name="photo" type="file" /> */}

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
            />
            <CustomInput
              label="Email"
              name="email"
              type="text"
              placeholder="Email"
            />
            <CustomInput
              label="Address"
              name="address"
              type="text"
              placeholder="address"
            />
            <Button type="submit">Save</Button>
            <StyledBtn
              type="button"
              onClick={() => {
                setShowForm(false);
                handleCancelEditModeClick();
              }}
            >
              Cancel
            </StyledBtn>
          </StyledFormWrapper>
        </StyledForm>
      </ModalWrapper>
    </>
  );
};
