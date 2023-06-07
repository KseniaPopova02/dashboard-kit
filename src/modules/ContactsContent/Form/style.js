import styled from "styled-components";
import { Modal } from "antd";

export const StyledBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #3751ff;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  &:hover {
    color: #3148e5;
  }
`;

export const StyledModal = styled(Modal).attrs({
  centered: true,
})`
  .ant-modal-content {
    background-color: #fff;
    padding: 32px;
    box-shadow: none;
    width: 380px;
    margin: 0 auto;
    border-radius: 0;
  }
`;
