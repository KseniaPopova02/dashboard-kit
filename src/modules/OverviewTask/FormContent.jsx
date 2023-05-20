import { useState } from "react";
import {
  StyledBtn,
  StyledInputWrapper,
  StyledFormWrapper,
  StyledBin,
  StyledAdd,
  StyledBtnWrapper,
  StyledInput,
  StyledRadioWrapper,
} from "./style";
import { RadioGroup } from "./RadioGroup";

const options = [
  { id: 1, value: "option1", label: "Option 1" },
  { id: 2, value: "option2", label: "Option 2" },
  { id: 3, value: "option3", label: "Option 3" },
];

export const FormContent = ({ handleDeleteAllTasks, onSubmit }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskName = e.target.taskName.value;
    const flags = selectedValue;

    onSubmit({ taskName, flags });

    e.target.reset();
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

    <form onSubmit={handleSubmit}>
      <StyledFormWrapper>
        <StyledInputWrapper>
          <div>
            <StyledInput
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
      </StyledFormWrapper>

      <RadioGroup
        options={options}
        selectedValue={selectedValue}
        onChange={handleRadioChange}
      />
    </form>
  );
};
