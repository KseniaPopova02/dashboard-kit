import styled from "styled-components";
import { Table } from "antd";

export const StyledTableWrapper = styled.div`
  overflow-x: auto;
`;

export const StyledLastTdWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-around;
  max-width: 208px;
`;

export const StyledNameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledAvatar = styled.div`
  margin-right: 24px;
  font-size: 34px;
  line-height: 0;
  svg {
    fill: #9fa2b4;
  }
`;

export const StyledUserAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 24px;
`;

export const StyledTable = styled(Table)`
  table {
    width: 100%;
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

  .ant-pagination {
    margin: 0 !important;
    padding: 15px 30px;
  }

  .ant-table-content {
    color: #252733;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }

  .ant-select-selector {
    border: none !important;
  }

  .ant-pagination-item.ant-pagination-item-active {
    display: none !important;
  }

  .ant-pagination-item {
    display: none !important;
  }

  .ant-pagination-total-text {
    order: 2 !important;
    font-weight: 400 !important;
    font-size: 14px !important;
    color: #9fa2b4 !important;
    margin-left: 50px !important;
  }

  .ant-pagination-prev.ant-pagination-disabled,
  .ant-pagination-prev {
    order: 3 !important;
  }

  .ant-pagination-next,
  .ant-pagination-next button {
    order: 4 !important;
  }

  .pagination-wrapper .ant-pagination-options-quick-jumper {
    order: 2 !important;
  }
`;
