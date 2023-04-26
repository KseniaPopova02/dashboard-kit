import { React, useState, useEffect } from "react";
import {
  StyledBox,
  StyledContainer,
  StyledBtnText,
  StyledBtnNum,
} from "./style";
import data from "../../Data/OverviewInfo.json";

export const OverviewInfo = () => {
  const [overviewData, setOverviewData] = useState([]);
  useEffect(() => {
    setOverviewData(data.overviewInfoData[0]);
  }, []);
  return (
    <StyledContainer>
      {Object.entries(overviewData).map(([key, value]) => (
        <StyledBox key={key}>
          <StyledBtnText>{key}</StyledBtnText>
          <StyledBtnNum>{value}</StyledBtnNum>
        </StyledBox>
      ))}
    </StyledContainer>
  );
};
