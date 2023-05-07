import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
}
body {
    margin: 0;
    padding: 0;
    font-family: "Mulish", sans-serif;
    font-weight: 700;
    /* color:${(props) => (props.loggedIn ? "#252733" : "#4b506d")}; */
    font-size: 14px;
    line-height: 20px;
    min-height: 100vh;
    /* background: ${(props) => (props.loggedIn ? "#fff" : "#4b5069")}; */
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
