import styled from "styled-components";

export const StyledWrapper = styled.div`
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  background: #ffffff;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1338px) {
    flex-direction: column;
  }
`;

export const StyledChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
