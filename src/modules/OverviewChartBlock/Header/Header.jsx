import { StyledHeaderWrapper, StyledSubtitle, StyledTitle } from "./style";
import { formatDate } from "./helpers";

const currentDate = new Date();
const formattedDate = formatDate(currentDate);

export const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledTitle>Today’s trends</StyledTitle>
      <StyledSubtitle>{formattedDate}</StyledSubtitle>
    </StyledHeaderWrapper>
  );
};
