import styled from "styled-components";

export const StyledWrapper = styled.div`
  border-left: 1px solid #dfe0eb;
  width: 342px;
  max-width: 100%;
  > * {
    flex-grow: 1;
  }
  @media (max-width: 1338px) {
    display: flex;
    border-left: none;
    width: 100%;
  }
`;

export const StyledWrapperWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px 0;
  border-bottom: 1px solid #dfe0eb;
  @media (max-width: 1338px) {
    border-bottom: none;
    border: 1px solid #dfe0eb;
  }
`;

export const StyledNumbers = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  @media (max-width: 1070px) {
    font-size: 17px;
  }
`;

export const StyledText = styled.div`
  padding: 0 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #9fa2b4;
  text-align: center;
`;

export const StyledDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1338px) {
    justify-content: center;
  }
`;
