import styled from "styled-components";

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  background: #ffffff;
  width: 258px;
  height: 134px;
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border: 3px solid transparent;
    border-radius: 11px;
    z-index: -1;
  }

  &:hover::before {
    border-color: #dde2ff;
  }

  &:hover {
    border-color: #3751ff;
    & > * {
      color: #3751ff;
    }
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const StyledBtnText = styled.div`
  color: #9fa2b4;
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
  text-transform: lowercase;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const StyledBtnNum = styled.div`
  color: #252733;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
`;
