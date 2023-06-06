import {
  CustomInput,
  Button,
  StyledFormWrapper,
  LogoTitle,
} from "../../../components";
import { CustomPhotoInput } from "../CustomPhotoInput";
import { StyledForm, StyledBtn, StyledModal } from "./style";

export const FormContent = ({
  setShowContactsForm,
  onSubmit,
  editMode,
  handleCancelEditModeClick,
  editContact,
}) => {
  const handleCancel = () => {
    setShowContactsForm(false);
    handleCancelEditModeClick();
  };
  return (
    <>
      <StyledModal
        visible={true}
        onCancel={handleCancel}
        closable={false}
        footer={null}
      >
        <StyledForm onSubmit={onSubmit}>
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
            <StyledBtn
              type="button"
              onClick={() => {
                setShowContactsForm(false);
                handleCancelEditModeClick();
              }}
            >
              Cancel
            </StyledBtn>
          </StyledFormWrapper>
        </StyledForm>
      </StyledModal>
    </>
  );
};
