import styled from "styled-components";
import { Link } from "react-router-dom";
import { Checkbox } from "antd";

export const StyledTaskWrapper = styled.div`
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  background: #ffffff;
  width: 546px;
`;

export const StyledTaskTitle = styled.div`
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
  margin-bottom: 8px;
`;

export const StyledSubTitle = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #9fa2b4;
  margin-bottom: 36px;
`;

export const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 32px 0 32px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #3751ff;
`;

export const StyledInput = styled.input`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  border: transparent;

  ::placeholder {
    color: #c5c7cd;
  }
`;

export const StyledBtn = styled.button`
  background: #f0f1f7;
  border-radius: 8px;
  border: transparent;
  width: 24px;
  height: 24px;
  color: #9fa2b4;
  & + button {
    margin-left: 10px;
  }
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const StyledFormWrapper = styled.div`
  padding: 0 32px 18px 32px;
  border-bottom: 1px solid #dfe0eb;
`;

export const StyledRadioWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledLabelUrgent = styled.label`
  background: #fec400;
  border-radius: 8px;
  color: #fff;
  padding: 5px;
`;

export const StyledLabelNew = styled.label`
  background: #29cc97;
  border-radius: 8px;
  color: #fff;
  padding: 5px;
`;

export const StyledSpanDefault = styled.label`
  background: #f0f1f7;
  border-radius: 8px;
  color: #9fa2b4;
  padding: 5px;
`;

export const StyledSpanUrgent = styled.span`
  background: #fec400;
  border-radius: 8px;
  color: #fff;
  padding: 5px;
`;

export const StyledSpanNew = styled.span`
  background: #29cc97;
  border-radius: 8px;
  color: #fff;
  padding: 5px;
`;

export const StyledLabelDefault = styled.span`
  background: #f0f1f7;
  border-radius: 8px;
  color: #9fa2b4;
  padding: 5px;
`;

export const StyledNoTasks = styled.div`
  padding: 20px 38px;
`;

export const StyledTaskTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 38px;
  &:not(:last-child) {
    border-bottom: 1px solid #dfe0eb;
  }
`;

export const StyledTaskNameWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledCheckbox = styled(Checkbox)`
  .ant-checkbox-inner {
    border-radius: 50%;
  }

  &:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: #1890ff !important;
    box-shadow: 0 0 0 2px #1890ff20;
    border-radius: 50%;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #1890ff !important;
    border-color: #1890ff !important;
    border-radius: 50% !important;
  }
`;
