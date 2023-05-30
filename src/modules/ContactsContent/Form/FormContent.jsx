import {
  CustomInput,
  Button,
  StyledFormWrapper,
  LogoTitle,
} from "../../../components";
import { CustomPhotoInput } from "../CustomPhotoInput";
import { ModalWrapper, ModalOverlay, StyledForm, StyledBtn } from "./style";

export const FormContent = ({
  setShowForm,
  onSubmit,
  editMode,
  handleCancelEditModeClick,
}) => (
  <>
    <ModalOverlay />
    <ModalWrapper>
      <StyledForm onSubmit={onSubmit}>
        <StyledFormWrapper>
          <LogoTitle>{editMode ? "Edit contact" : "Add new contact"}</LogoTitle>

          <CustomPhotoInput label="Add photo" name="photo" />

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
