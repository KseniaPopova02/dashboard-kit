import {
  StyledBox,
  StyledContainer,
  StyledBtnText,
  StyledBtnNum,
} from "./style";
import { nanoid } from "nanoid";

export const OverviewInfo = ({ overviewInfo }) => (
  <StyledContainer>
    {overviewInfo.map((item) => (
      <StyledBox key={nanoid()}>
        <StyledBtnText>{item.label}</StyledBtnText>
        <StyledBtnNum>{item.number}</StyledBtnNum>
      </StyledBox>
    ))}
  </StyledContainer>
);
