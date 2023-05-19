import { React, useState, useEffect } from "react";
import data from "../../../Data/OverviewChart.json";
import {
  StyledWrapper,
  StyledText,
  StyledNumbers,
  StyledDataWrapper,
  StyledWrapperWrapper,
} from "./style";
import { formatData } from "./helpers";

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
