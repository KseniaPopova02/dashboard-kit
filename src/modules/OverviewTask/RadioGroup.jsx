import React from "react";
import { StyledRadioGroup } from "./style";
import { Radio } from "antd";

export const RadioGroup = ({ options, selectedValue, onChange }) => {
  return (
    <StyledRadioGroup onChange={onChange} value={selectedValue}>
      {options.map((option) => {
        const StyledLabel = option.styledLabel;
        return (
          <Radio key={option.id} value={option.value}>
            <StyledLabel> {option.label}</StyledLabel>
          </Radio>
        );
      })}
    </StyledRadioGroup>
  );
};
