import { GlobalStyle } from "./styles/globalStyles";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import {
  Forgot,
  ForgotSuccess,
  LogIn,
  Reset,
  SignUp,
  NotFound,
  Layout,
  LogInForm,
} from "./modal";
const App = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Forgot />} />
          <Route path="ForgotSuccess" element={<ForgotSuccess />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="Reset" element={<Reset />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
