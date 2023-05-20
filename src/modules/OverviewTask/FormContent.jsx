import { Form, Field, useFormikContext } from "formik";
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
  StyledInput,
} from "./style";

export const FormContent = ({ handleDeleteAllTasks }) => {
  const { values, setFieldValue } = useFormikContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
  };

  return (
    // <Form>
    //   <StyledFormWrapper>
    //     <StyledInputWrapper>
    //       <div>
    //         <StyledInput
    //           name="taskName"
    //           type="text"
    //           placeholder="Create new task"
    //           value={values.taskName}
    //           onChange={handleChange}
    //         />
    //       </div>

    //       <StyledBtnWrapper>
    //         <StyledBtn type="submit">
    //           <StyledAdd />
    //         </StyledBtn>
    //         <StyledBtn type="button" onClick={handleDeleteAllTasks}>
    //           <StyledBin />
    //         </StyledBtn>
    //       </StyledBtnWrapper>
    //     </StyledInputWrapper>
    //     <StyledRadioWrapper>
    //       <div>
    //         <Field type="radio" id="urgent" name="flags" value="urgent" />
    //         <StyledLabelUrgent htmlFor="urgent">Urgent</StyledLabelUrgent>
    //       </div>
    //       <div>
    //         <Field type="radio" id="new" name="flags" value="new" />
    //         <StyledLabelNew htmlFor="new">New</StyledLabelNew>
    //       </div>
    //       <div>
    //         <Field type="radio" id="default" name="flags" value="default" />
    //         <StyledLabelDefault htmlFor="default">Default</StyledLabelDefault>
    //       </div>
    //     </StyledRadioWrapper>
    //   </StyledFormWrapper>
    // </Form>

    <form action="#">
      <StyledFormWrapper>
        <StyledInputWrapper>
          <div>
            <StyledInput type="text" placeholder="Create new task" />
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
      </StyledFormWrapper>
    </form>
  );
};
