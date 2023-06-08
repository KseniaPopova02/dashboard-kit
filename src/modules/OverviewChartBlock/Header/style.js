import styled from "styled-components";

export const StyledTitle = styled.div`
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
  margin-bottom: 8px;
  @media (max-width: 650px) {
    text-align: center;
  }
`;

export const StyledSubtitle = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #9fa2b4;

  @media (max-width: 650px) {
    margin-bottom: 10px;
    text-align: center;
  }
`;

export const StyledHeaderWrapper = styled.div`
  align-items: center;
  padding: 32px 32px 0 32px;
  margin-bottom: 75px;

  @media (max-width: 1070px) {
    margin-bottom: 20px;
  }

  @media (max-width: 565px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
