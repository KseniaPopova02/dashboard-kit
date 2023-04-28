import { Form, Field } from "formik";
import { CustomInput } from "./CastomInput";
import {
  StyledBtn,
  StyledInputWrapper,
  StyledFormWrapper,
  StyledRadioWrapper,
  StyledLabelUrgent,
  StyledLabelNew,
  StyledLabelDefault,
  StyledBin,
  StyledAdd,
  StyledBtnWrapper,
} from "./style";

export const FormContent = ({ handleDeleteAllTasks }) => (
  <Form>
    <StyledFormWrapper>
      <StyledInputWrapper>
        <div>
          <CustomInput
            name="taskName"
            type="text"
            placeholder="Create new task"
          />
        </div>

        <StyledBtnWrapper>
          <StyledBtn type="submit">
            <StyledAdd />
          </StyledBtn>
          <StyledBtn type="button" onClick={handleDeleteAllTasks}>
            <StyledBin />
          </StyledBtn>
        </StyledBtnWrapper>
      </StyledInputWrapper>
      <StyledRadioWrapper>
        <div>
          <Field type="radio" id="urgent" name="flags" value="urgent" />
          <StyledLabelUrgent htmlFor="urgent">Urgent</StyledLabelUrgent>
        </div>
        <div>
          <Field type="radio" id="new" name="flags" value="new" />
          <StyledLabelNew htmlFor="new">New</StyledLabelNew>
        </div>
        <div>
          <Field type="radio" id="default" name="flags" value="default" />
          <StyledLabelDefault htmlFor="default">Default</StyledLabelDefault>
        </div>
      </StyledRadioWrapper>
    </StyledFormWrapper>
  </Form>
);
