import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.div`
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  background: #ffffff;
  width: 546px;
`;

export const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
  padding: 30px;
`;

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
`;

export const StyledSpan = styled.span`
  color: #9fa2b4;
`;

export const StyledContentWrapper = styled.div`
  margin-bottom: 20px;
  padding: 0 30px 18px 30px;
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    border-bottom: 1px solid #dfe0eb;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledText = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;

export const StyledNum = styled.div`
  color: #9fa2b4;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;

export const StyledLink = styled(Link)`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #3751ff;
  text-decoration: none;
`;
