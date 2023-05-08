import { Form, Field } from "formik";
import { CustomInput, Button, StyledFormWrapper } from "../../../components";
export const FormContent = ({ setShowForm }) => (
  <Form>
    <StyledFormWrapper>
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
      <CustomInput label="Email" name="email" type="text" placeholder="Email" />
      <CustomInput
        label="Address"
        name="address"
        type="text"
        placeholder="address"
      />
      <Button type="submit">Save</Button>
      <button type="button" onClick={() => setShowForm(false)}>
        Cancel
      </button>
    </StyledFormWrapper>
  </Form>
);
