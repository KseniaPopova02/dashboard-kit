import { React, useState, useEffect } from "react";
import data from "../../../Data/OverviewChart.json";
import {
  StyledWrapper,
  StyledText,
  StyledNumbers,
  StyledDataWrapper,
  StyledWrapperWrapper,
} from "./style";

const formatData = (dataChart) => {
  return Object.entries(dataChart).map(([key, value]) => {
    let formattedValue = value;
    if (key === "Average response time") {
      formattedValue = Math.floor(value / 60) + "h " + (value % 60) + "m";
      return [key, formattedValue];
    }

    if (key === "Average first response time") {
      if (value >= 60) {
        formattedValue = Math.floor(value / 60) + "h " + (value % 60) + "m";
        return [key, formattedValue];
      } else {
        formattedValue = `${value}m`;
        return [key, formattedValue];
      }
    }
    if (key === "Resolution within SLA") {
      formattedValue = `${value}%`;
      return [key, formattedValue];
    } else {
      return [key, value];
    }
  });
};

export const Info = () => {
  const [dataChart, setDataChart] = useState([]);
  useEffect(() => {
    setDataChart(data.overviewChart[0]);
  }, []);
  return (
    <StyledWrapper>
      {formatData(dataChart).map(([key, value]) => (
        <StyledWrapperWrapper key={key}>
          <StyledDataWrapper>
            <StyledText>{key}</StyledText>
            <StyledNumbers>{value}</StyledNumbers>
          </StyledDataWrapper>
        </StyledWrapperWrapper>
      ))}
    </StyledWrapper>
  );
};
