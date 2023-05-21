import { useState } from "react";
import {
  StyledBtn,
  StyledInputWrapper,
  StyledFormWrapper,
  StyledBin,
  StyledAdd,
  StyledBtnWrapper,
  StyledInput,
  StyledLabelUrgent,
  StyledLabelNew,
  StyledLabelDefault,
} from "./style";
import { RadioGroup } from "./RadioGroup";

const options = [
  {
    id: 1,
    value: "urgent",
    label: "Urgent",
    styledLabel: StyledLabelUrgent,
  },
  { id: 2, value: "new", label: "New", styledLabel: StyledLabelNew },
  {
    id: 3,
    value: "default",
    label: "Default",
    styledLabel: StyledLabelDefault,
  },
];

export const FormContent = ({ handleDeleteAllTasks, onSubmit }) => {
  const [selectedValue, setSelectedValue] = useState("default");

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
        <RadioGroup
          options={options}
          selectedValue={selectedValue}
          onChange={handleRadioChange}
        />
      </StyledFormWrapper>
    </form>
  );
};
