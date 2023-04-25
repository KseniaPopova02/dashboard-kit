import { GlobalStyle } from "./styles/globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Forgot, LogIn, Reset, SignUp, NotFound } from "./pages";
import { Layout } from "./modules";
import { Normalize } from "styled-normalize";

const App = () => (
  <BrowserRouter>
  <Normalize />
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LogIn />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="reset" element={<Reset />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/dashboard" />
    </Routes>
  </BrowserRouter>
);

export default App;
