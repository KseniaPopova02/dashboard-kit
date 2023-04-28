import styled from "styled-components";

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  background: #ffffff;
  max-width: 258px;
  width: 100%;
  height: 134px;
  cursor: pointer;
  position: relative;
  & + div {
    margin-left: 5px;
  }

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
  @media (max-width: 940px) {
    height: 85px;
    padding: 10px 5px;
  }

  @media (max-width: 550px) {
    height: 55px;
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
  @media (max-width: 550px) {
    font-size: 15px;
  }
`;

export const StyledBtnNum = styled.div`
  color: #252733;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  @media (max-width: 940px) {
    font-size: 32px;
  }
  @media (max-width: 550px) {
    font-size: 20px;
  }
`;
