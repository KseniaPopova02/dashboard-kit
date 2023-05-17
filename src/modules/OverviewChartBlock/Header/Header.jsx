import { StyledHeaderWrapper, StyledSubtitle, StyledTitle } from "./style";
import { formatDate } from "./helpers";

export const Header = ({ children }) => {
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  return (
    <StyledHeaderWrapper>
      <StyledTitle>Today’s trends</StyledTitle>
      <StyledSubtitle>{formattedDate}</StyledSubtitle>
    </StyledHeaderWrapper>
  );
};
