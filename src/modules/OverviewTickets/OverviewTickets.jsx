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
import data from "../../Data/TicketsOverview.json";

export const OverviewTickets = () => {
  const [ticketsData, setTicketsData] = useState([]);
  useEffect(() => {
    setTicketsData(data.ticketsOverview[0]);
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
        <StyledLink to="overview-tickets-details">View details</StyledLink>
      </StyledHeaderWrapper>
      <div>
        {Object.entries(ticketsData).map(([key, value]) => (
          <StyledContentWrapper key={key}>
            <StyledText>{key}</StyledText>
            <StyledNum>{value}</StyledNum>
          </StyledContentWrapper>
        ))}
      </div>
    </StyledWrapper>
  );
};
