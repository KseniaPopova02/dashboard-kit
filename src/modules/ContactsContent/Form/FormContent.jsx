import {
  CustomInput,
  Button,
  StyledFormWrapper,
  LogoTitle,
} from "../../../components";
import { StyledBtn, StyledModal } from "./style";
import { Form } from "formik";
import { CustomPhotoInput } from "../CustomPhotoInput";
import { useSelector } from "react-redux";

export const FormContent = ({
  setShowContactsForm,
  handleCancelEditModeClick,
}) => {
  const editMode = useSelector((state) => state.contactsPage.editMode);
  const editContact = useSelector((state) => state.contactsPage.editContact);

  const handleCancel = () => {
    setShowContactsForm(false);
    handleCancelEditModeClick();
  };
  return (
    <>
      <StyledModal
        open={true}
        onCancel={handleCancel}
        closable={false}
        footer={null}
      >
        <Form>
          <StyledFormWrapper>
            <LogoTitle>
              {editMode ? "Edit contact" : "Add new contact"}
            </LogoTitle>

            <CustomPhotoInput
              editContact={editContact}
              editMode={editMode}
              label="Add photo"
              name="photo"
            />

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
            <StyledBtn type="button" onClick={handleCancel}>
              Cancel
            </StyledBtn>
          </StyledFormWrapper>
        </Form>
      </StyledModal>
    </>
  );
};
