import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 1140px) {
    flex-direction: column;
  }
`;
