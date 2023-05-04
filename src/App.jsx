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
import { ROUTES } from "./Routes/routes";
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
        <Route
          path={ROUTES.DASHBOARD}
          element={<MainLayout loggedIn={loggedIn} />}
        >
          <Route path={ROUTES.OVERVIEW} element={<View />} />
          <Route path={ROUTES.TICKETS} element={<Tickets />} />
          <Route path={ROUTES.IDEAS} element={<Ideas />} />
          <Route path={ROUTES.CONTACTS} element={<Contacts />} />
          <Route path={ROUTES.AGENTS} element={<Agents />} />
          <Route path={ROUTES.ARTICLES} element={<Articles />} />
          <Route path={ROUTES.SETTINGS} element={<Settings />} />
          <Route path={ROUTES.SUBSCRIPTION} element={<Subscription />} />
          <Route
            path="overview-tickets-details"
            element={<OverviewTicketsDetails />}
          />
          <Route path="overview-tasks" element={<OverviewTasksPage />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Route>
        <Route path="/" element={<AuthFormLayout />}>
          <Route index element={<LogIn updateLoggedIn={updateLoggedIn} />} />
          <Route path={ROUTES.FORGOT} element={<Forgot />} />
          <Route path={ROUTES.RESET} element={<Reset />} />
          <Route
            path={ROUTES.SIGNUP}
            element={<SignUp updateLoggedIn={updateLoggedIn} />}
          />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
