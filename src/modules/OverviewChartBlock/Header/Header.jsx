import {
  StyledHeaderWrapper,
  StyledSubtitle,
  StyledTitle,
  StyledToday,
  StyledYesterday,
  StyledDaysWrapper,
} from "./style";

export const Header = () => (
  <StyledHeaderWrapper>
    <div>
      <StyledTitle>Today’s trends</StyledTitle>
      <StyledSubtitle>as of 25 May 2019, 09:41 PM</StyledSubtitle>
    </div>
    <StyledDaysWrapper>
      <StyledToday>Today</StyledToday>
      <StyledYesterday>Yesterday</StyledYesterday>
    </StyledDaysWrapper>
  </StyledHeaderWrapper>
);
