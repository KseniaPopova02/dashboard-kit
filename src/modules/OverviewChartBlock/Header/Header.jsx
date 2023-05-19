import { StyledHeaderWrapper, StyledSubtitle, StyledTitle } from "./style";
import { formatDate } from "./helpers";

const currentDate = new Date();
export const Header = () => {
  const formattedDate = formatDate(currentDate);
  return (
    <StyledHeaderWrapper>
      <StyledTitle>Today’s trends</StyledTitle>
      <StyledSubtitle>{formattedDate}</StyledSubtitle>
    </StyledHeaderWrapper>
  );
};
