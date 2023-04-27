import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  &::before {
    position: absolute;
    content: "";
    width: 1px;
    height: 100%;
    background-color: #dfe0eb;
  }
`;

export const StyledNumbers = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`;

export const StyledText = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #9fa2b4;
`;

export const StyledDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  padding: 0 32px;
`;
