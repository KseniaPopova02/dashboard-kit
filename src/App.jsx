import { GlobalStyle } from "./styles/globalStyles";
import { BrowserRouter } from "react-router-dom";
import { LogIn } from "./modal";

const App = () => (
  <BrowserRouter>
    <GlobalStyle />

    <LogIn />
  </BrowserRouter>
);

export default App;
