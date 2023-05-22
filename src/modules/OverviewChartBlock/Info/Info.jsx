import { React, useState, useEffect } from "react";
import mockedData from "../../../MockedData/TodaysChartInfo.json";
import {
  StyledWrapper,
  StyledText,
  StyledNumbers,
  StyledDataWrapper,
  StyledWrapperWrapper,
} from "./style";
import { formatData } from "./helpers";

export const Info = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(mockedData);
  }, []);

  return (
    <StyledWrapper>
      {formatData(data).map((item) => (
        <StyledWrapperWrapper>
          <StyledDataWrapper>
            <StyledText>{item.label}</StyledText>
            <StyledNumbers>{item.number}</StyledNumbers>
          </StyledDataWrapper>
        </StyledWrapperWrapper>
      ))}
    </StyledWrapper>
  );
};
