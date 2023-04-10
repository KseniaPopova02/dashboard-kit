import styled from "styled-components";
import { Input } from "antd";

export const StyledInput = styled(Input.Password)`
  &.input__password {
    &.ant-input-affix-wrapper {
      border: 1px solid #dfe0eb;
      border-radius: 8px;
      font-weight: 400;
      font-size: 14px;
      color: #4b506d;
      padding: 10px 16px;
      max-width: 316px;
      width: 100%;
      outline: none;
      &:hover {
        border-color: #3751ff;
      }
    }
  }
`;
