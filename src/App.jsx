import { GlobalStyle } from "./styles/globalStyles";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Forgot, ForgotSuccess, LogIn, Reset, SignUp, NotFound } from "./pages";
import { Layout } from "./modules";

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LogIn />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="forgotSuccess" element={<ForgotSuccess />} />
        <Route path="reset" element={<Reset />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
