import { useState } from "react";
import { GlobalStyle } from "./styles/globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Forgot,
  LogIn,
  Reset,
  SignUp,
  NotFound,
  View,
  Tickets,
  Ideas,
  Contacts,
  Agents,
  Articles,
  Settings,
  Subscription,
} from "./pages";
import { AuthFormLayout, MainLayout } from "./modules";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  const updateLoggedIn = (value) => {
    setLoggedIn(value);
  };

  return (
    <BrowserRouter>
      <GlobalStyle loggedIn={loggedIn} />
      <Routes>
        <Route path="/dashboard" element={<MainLayout loggedIn={loggedIn} />}>
          <Route path="overview" element={<View />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="ideas" element={<Ideas />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="agents" element={<Agents />} />
          <Route path="articles" element={<Articles />} />
          <Route path="settings" element={<Settings />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/" element={<AuthFormLayout />}>
          <Route index element={<LogIn updateLoggedIn={updateLoggedIn} />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="reset" element={<Reset />} />
          <Route
            path="sign-up"
            element={<SignUp updateLoggedIn={updateLoggedIn} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
