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
  OverviewTicketsDetails,
  OverviewTasksPage,
} from "./pages";
import { FormLayout, MainLayout } from "./modules";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  const updateLoggedIn = (value) => {
    setLoggedIn(value);
  };

  return (
    <BrowserRouter>
      <GlobalStyle loggedIn={loggedIn} />
      <Routes>
        {loggedIn ? (
          <Route path="/dashboard" element={<MainLayout />}>
            <Route path="Overview" element={<View />} />
            <Route path="Tickets" element={<Tickets />} />
            <Route path="Ideas" element={<Ideas />} />
            <Route path="Contacts" element={<Contacts />} />
            <Route path="Agents" element={<Agents />} />
            <Route path="Articles" element={<Articles />} />
            <Route path="Settings" element={<Settings />} />
            <Route path="Subscription" element={<Subscription />} />
            <Route
              path="overview-tickets-details"
              element={<OverviewTicketsDetails />}
            />
            <Route path="overview-tasks" element={<OverviewTasksPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        ) : (
          <Route path="/" element={<FormLayout />}>
            <Route index element={<LogIn updateLoggedIn={updateLoggedIn} />} />
            <Route path="forgot" element={<Forgot />} />
            <Route path="reset" element={<Reset />} />
            <Route
              path="sign-up"
              element={<SignUp updateLoggedIn={updateLoggedIn} />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
