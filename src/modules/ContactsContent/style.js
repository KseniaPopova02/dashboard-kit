import styled from "styled-components";
import { PlusOutlined } from "@ant-design/icons";
import { EllipsisOutlined } from "@ant-design/icons";

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
  @media (max-width: 844px) {
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
  @media (max-width: 844px) {
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
  @media (max-width: 844px) {
    display: none;
  }
`;

export const StyledSpan = styled.div`
  display: inline;
  @media (max-width: 342px) {
    display: none;
  }
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const StyledTH = styled.th`
  background-color: none;
  padding: 10px;
  text-align: left;
  color: #9fa2b4;
  &:first-child {
    padding-left: 33px;
  }

  &:last-child {
    padding-right: 33px;
  }
`;

export const StyledTD = styled.td`
  border-top: 1px solid #dfe0eb;
  border-bottom: 1px solid #dfe0eb;
  padding: 36px 10px;
  &:first-child {
    padding-left: 33px;
    & > div {
      display: inline;
      margin-left: 24px;
    }
  }

  &:last-child {
    padding-right: 33px;
  }
  &:nth-child(3) {
    max-width: 208px;
  }
`;
