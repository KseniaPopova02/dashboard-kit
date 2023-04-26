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
} from "./style";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

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

        <div>
          <StyledBtn type="submit">
            <PlusOutlined />
          </StyledBtn>
          <StyledBtn type="button" onClick={handleDeleteAllTasks}>
            <DeleteOutlined />
          </StyledBtn>
        </div>
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
