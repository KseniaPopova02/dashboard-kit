import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    font-family: "Mulish", sans-serif;
    font-weight: 700;
    color: #4b506d;
    font-size: 14px;
    line-height: 20px;
  }
  @font-face {
  font-family: "Mulish", sans-serif;
  src: url("./fonts/Mulish-Bold.ttf") format("ttf");

  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Mulish", sans-serif;
  src: url("./fonts/Mulish-SemiBold.ttf") format("ttf");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Mulish", sans-serif;
  src: url("./fonts/Mulish-Regular.ttf") format("ttf");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
`;
