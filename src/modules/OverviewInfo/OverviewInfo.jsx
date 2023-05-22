import { React, useState, useEffect } from "react";
import {
  StyledBox,
  StyledContainer,
  StyledBtnText,
  StyledBtnNum,
} from "./style";
import data from "../../MockedData/InfoOverview.json";
import { nanoid } from "nanoid";

export const OverviewInfo = () => {
  const [overviewData, setOverviewData] = useState([]);
  useEffect(() => {
    setOverviewData(data);
  }, []);
  return (
    <StyledContainer>
      {overviewData.map((item) => (
        <StyledBox key={nanoid()}>
          <StyledBtnText>{item.label}</StyledBtnText>
          <StyledBtnNum>{item.number}</StyledBtnNum>
        </StyledBox>
      ))}
    </StyledContainer>
  );
};
