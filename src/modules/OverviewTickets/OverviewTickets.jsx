import { React, useState, useEffect } from "react";
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
import data from "../../MockedData/TicketsOverview.json";
import { ROUTES } from "../../Routes/routes";
import { nanoid } from "nanoid";

export const OverviewTickets = () => {
  const [ticketsData, setTicketsData] = useState([]);
  useEffect(() => {
    setTicketsData(data);
  }, []);
  return (
    <StyledWrapper>
      <StyledHeaderWrapper>
        <div>
          <StyledTitle>Unresolved tickets</StyledTitle>
          <StyledSubtitle>
            <StyledSpan>Group:</StyledSpan> Support
          </StyledSubtitle>
        </div>
        <StyledLink
          to={`${ROUTES.DASHBOARD}${ROUTES.OVERVIEW_TICKETS_DETAILS}`}
        >
          View details
        </StyledLink>
      </StyledHeaderWrapper>
      <div>
        {ticketsData.map((item) => (
          <StyledContentWrapper key={nanoid()}>
            <StyledText>{item.label}</StyledText>
            <StyledNum>{item.number}</StyledNum>
          </StyledContentWrapper>
        ))}
      </div>
    </StyledWrapper>
  );
};
