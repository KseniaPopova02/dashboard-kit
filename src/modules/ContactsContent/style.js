import styled from "styled-components";
import { PlusOutlined } from "@ant-design/icons";
import { Avatar, Table } from "antd";

export const StyledContactsWrapper = styled.div`
  border: 1px solid #dfe0eb;
  border-radius: 8px;
`;

export const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 52px;
  padding: 33px 33px 0 33px;

  @media (max-width: 800px) {
    margin-bottom: 20px;
  }

  @media (max-width: 442px) {
    flex-direction: column;
    & > div + div {
      margin-top: 10px;
    }
  }
`;

export const StyledBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  & > button + button {
    margin-left: 10px;
  }

  @media (max-width: 855px) {
    flex-direction: column;
    & > button + button {
      margin-left: 0px;
      margin-top: 10px;
    }
  }

  @media (max-width: 442px) {
    flex-direction: row;
    justify-content: flex-start;
    & > button + button {
      margin-left: 10px;
      margin-top: 0px;
    }
  }

  &.left {
    @media (max-width: 420px) {
      flex-direction: column;
      & > button + button {
        margin-left: 0px;
        margin-top: 10px;
      }
    }
  }
`;

export const StyledBtnRight = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #4b506d;
  cursor: pointer;
`;

export const StyledHeaderSvg = styled.div`
  font-size: 16px;
  margin-right: 8px;
`;

export const StyledInput = styled.input`
  margin-left: 18px;
  border: 2px solid #3751ff;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #3751ff;
    box-shadow: none;
  }

  @media (max-width: 855px) {
    margin-left: 0px;
    margin-top: 8px;
  }

  @media (max-width: 442px) {
    margin-left: 18px;
    margin-top: 0px;
  }

  @media (max-width: 420px) {
    margin-left: 0px;
    margin-top: 8px;
  }
`;

export const StyledBtnLeft = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #3751ff;
  cursor: pointer;
`;

export const StyledPlusOutlined = styled(PlusOutlined)`
  margin-right: 8px;

  @media (max-width: 844px) {
    margin-right: 0px;
  }
`;

export const StyledBtnText = styled.div`
  display: block;

  @media (max-width: 855px) {
    display: none;
  }
`;

export const StyledSpan = styled.div`
  display: inline;

  @media (max-width: 440px) {
    display: none;
  }
`;

export const StyledTableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const StyledTable = styled(Table)`
  min-width: 750px;
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
