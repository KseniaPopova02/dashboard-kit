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
} from "./modal";

const App = () => (
  <BrowserRouter>
    {/* <GlobalStyle /> */}

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
);

export default App;
