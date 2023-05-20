import React from "react";
import { Radio } from "antd";
import { StyledRadioGroup } from "./style";

export const RadioGroup = ({ options, selectedValue, onChange }) => {
  return (
    <StyledRadioGroup onChange={onChange} value={selectedValue}>
      {options.map((option) => (
        <Radio key={option.id} value={option.value}>
          {option.label}
        </Radio>
      ))}
    </StyledRadioGroup>
  );
};
