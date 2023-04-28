import styled from "styled-components";

export const StyledTitle = styled.div`
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
  margin-bottom: 8px;
`;

export const StyledSubtitle = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #9fa2b4;
`;

export const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 32px 0 32px;
  margin-bottom: 75px;
  @media (max-width: 1070px) {
    margin-bottom: 20px;
  }
`;

export const StyledToday = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #9fa2b4;
  &::before {
    content: "";
    display: inline-block;
    width: 16px;
    border: 2px solid #3751ff;
    margin-right: 8px;
    border-radius: 8px;
    transform: translateY(-50%);
  }
`;

export const StyledYesterday = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #9fa2b4;
  &::before {
    content: "";
    display: inline-block;
    width: 16px;
    border: 2px solid #dfe0eb;
    border-radius: 8px;
    margin-right: 8px;
    transform: translateY(-50%);
  }
`;

export const StyledDaysWrapper = styled.div`
  display: flex;
  gap: 32px;
`;
