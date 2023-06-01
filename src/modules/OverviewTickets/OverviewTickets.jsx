import {
  StyledWrapper,
  StyledHeaderWrapper,
  StyledTitle,
  StyledSubtitle,
  StyledSpan,
  StyledContentWrapper,
  StyledText,
  StyledNum,
  StyledLink,
} from "./style";
import { ROUTES } from "../../routes/routes";
import { nanoid } from "nanoid";

export const OverviewTickets = ({ tickets }) => (
  <StyledWrapper>
    <StyledHeaderWrapper>
      <div>
        <StyledTitle>Unresolved tickets</StyledTitle>
        <StyledSubtitle>
          <StyledSpan>Group:</StyledSpan> Support
        </StyledSubtitle>
      </div>
      <StyledLink to={`${ROUTES.DASHBOARD}${ROUTES.OVERVIEW_TICKETS_DETAILS}`}>
        View details
      </StyledLink>
    </StyledHeaderWrapper>
    <div>
      {tickets.map((item) => (
        <StyledContentWrapper key={nanoid()}>
          <StyledText>{item.label}</StyledText>
          <StyledNum>{item.number}</StyledNum>
        </StyledContentWrapper>
      ))}
    </div>
  </StyledWrapper>
);
