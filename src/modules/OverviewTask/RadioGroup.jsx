import React from "react";

export const RadioGroup = ({ options, value, onChange, id }) => {
  return (
    <div>
      {options.map((option) => (
        <label key={option.id}>
          <input
            type="radio"
            value={option.value}
            checked={option.value === value}
            onChange={onChange}
          />
        </label>
      ))}
    </div>
  );
};
