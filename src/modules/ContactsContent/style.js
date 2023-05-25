import styled from "styled-components";
import { Avatar, Table } from "antd";

export const StyledContactsWrapper = styled.div`
  border: 1px solid #dfe0eb;
  border-radius: 8px;
`;

export const StyledTableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const StyledTable = styled(Table)`
  table {
    width: 100%;
    max-width: fit-content;
    overflow-x: auto;
    white-space: nowrap;
  }
  &&& .ant-table-thead > tr > th {
    background-color: white;
    color: #9fa2b4;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    &::before {
      display: none;
    }
  }

  .ant-table-content {
    color: #252733;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const StyledLastTdWrapper = styled.div`
  display: flex;
  gap: 30px;
  max-width: 208px;
`;

export const StyledNameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledAvatar = styled(Avatar)`
  margin-right: 24px;
`;
