import styled from "styled-components";
import { Form } from "formik";
import { Modal } from "antd";

export const StyledForm = styled(Form)`
  background-color: #fff;
  padding: 32px;
`;

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
    box-shadow: none;
    width: 380px;
    padding: 0;
    margin: 0 auto;
  }
`;
