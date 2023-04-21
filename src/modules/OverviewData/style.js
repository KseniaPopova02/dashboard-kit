import styled from "styled-components";
import { Button } from "antd";

export const StyledBtn = styled(Button)`
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  background: #ffffff;
  width: 258px;
  height: 134px;
  &:focus {
    & > * {
      color: #3751ff;
    }
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledBtnText = styled.div`
  color: #9fa2b4;
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
`;

export const StyledBtnNum = styled.div`
  color: #252733;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
`;
