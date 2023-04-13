import React from "react";
import { StyledError, StyledSvg, StyledWrapper } from "./style";

export const Error = ({ children }) => (
  <StyledWrapper>
    <StyledSvg
      width="1em"
      height="1em"
      viewBox="0 0 24.00 24.00"
      xmlns="http://www.w3.org/2000/svg"
      fill=""
      stroke=""
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M1.225 21.225A1.678 1.678 0 0 0 2.707 22H22.28a1.68 1.68 0 0 0 1.484-.775 1.608 1.608 0 0 0 .003-1.656L13.995 1.827a1.745 1.745 0 0 0-2.969 0l-9.8 17.742a1.603 1.603 0 0 0 0 1.656zm.859-1.143l9.82-17.773A.71.71 0 0 1 12.508 2a.73.73 0 0 1 .629.342l9.751 17.708a.626.626 0 0 1 .017.662.725.725 0 0 1-.626.288H2.708a.723.723 0 0 1-.623-.286.605.605 0 0 1-.001-.632zM13 15h-1V8h1zm-1.5 2.5a1 1 0 1 1 1 1 1.002 1.002 0 0 1-1-1z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </g>
    </StyledSvg>
    <StyledError>{children}</StyledError>
  </StyledWrapper>
);
