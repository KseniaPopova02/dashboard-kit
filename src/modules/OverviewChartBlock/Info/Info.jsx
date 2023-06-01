import {
  StyledWrapper,
  StyledText,
  StyledNumbers,
  StyledDataWrapper,
  StyledWrapperWrapper,
} from "./style";
import { formatData } from "./helpers";
import { nanoid } from "nanoid";

export const Info = ({ infoChart }) => (
  <StyledWrapper>
    {formatData(infoChart).map((item) => (
      <StyledWrapperWrapper key={nanoid()}>
        <StyledDataWrapper>
          <StyledText>{item.label}</StyledText>
          <StyledNumbers>{item.number}</StyledNumbers>
        </StyledDataWrapper>
      </StyledWrapperWrapper>
    ))}
  </StyledWrapper>
);
