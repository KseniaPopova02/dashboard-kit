import styled from "styled-components";
import { Select } from "antd";

export const StyledContactsWrapper = styled.div`
  border: 1px solid #dfe0eb;
  border-radius: 8px;
`;

///

export const StyledPageInfo = styled.div`
  padding: 27px;
  display: flex;
  justify-content: end;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #9fa2b4;
  > div + div {
    margin-left: 30px;
  }
`;

export const StyledSelect = styled(Select)`
  margin-left: 8px;

  .custom-selector .ant-select-selector {
    padding-right: 5px;
  }

  .ant-select-selection-item {
    color: #4b506d;
  }
  &&& .ant-select-selector {
    border: none;
    padding: 0;
  }
`;
