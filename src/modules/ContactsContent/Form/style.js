import styled from "styled-components";
import { Form } from "formik";
import { Input as AntdInput } from "antd";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(54, 55, 64, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

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

//input
