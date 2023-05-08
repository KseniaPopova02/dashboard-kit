import { Field } from "formik";
import {
  CustomInput,
  Button,
  StyledFormWrapper,
  LogoTitle,
} from "../../../components";
import { ModalWrapper, ModalOverlay, StyledForm, StyledBtn } from "./style";

export const FormContent = ({ setShowForm }) => (
  <>
    <ModalOverlay />
    <ModalWrapper>
      <StyledForm>
        <StyledFormWrapper>
          <LogoTitle>Add new contact</LogoTitle>
          <Field type="text" name="photo" placeholder="Photo" />
          <CustomInput
            label="First name"
            name="name"
            type="text"
            placeholder="First name"
          />
          <CustomInput
            label="Last name"
            name="surname"
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
          <StyledBtn type="button" onClick={() => setShowForm(false)}>
            Cancel
          </StyledBtn>
        </StyledFormWrapper>
      </StyledForm>
    </ModalWrapper>
  </>
);
