import { GlobalStyle } from "./styles/globalStyles";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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
import { ROUTES } from "./routes";
import { AuthFormLayout, MainLayout } from "./modules";

import { store, setCurrentUser, setLoggedIn } from "./store";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const loggedIn = useSelector((state) => state.loggedIn);
  console.log(currentUser);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    dispatch(setLoggedIn(false));
    <Navigate to="/" />;
  };

  const updateLoggedIn = (value, user) => {
    dispatch(setLoggedIn(value));
    dispatch(setCurrentUser(user));
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <MainLayout
              currentUser={currentUser}
              loggedIn={loggedIn}
              handleLogout={handleLogout}
            />
          }
        >
          <Route
            path={`${ROUTES.DASHBOARD}${ROUTES.OVERVIEW}`}
            element={<View />}
          />
          <Route
            path={`${ROUTES.DASHBOARD}${ROUTES.TICKETS}`}
            element={<Tickets />}
          />
          <Route
            path={`${ROUTES.DASHBOARD}${ROUTES.IDEAS}`}
            element={<Ideas />}
          />
          <Route
            path={`${ROUTES.DASHBOARD}${ROUTES.CONTACTS}`}
            element={<Contacts />}
          />
          <Route
            path={`${ROUTES.DASHBOARD}${ROUTES.AGENTS}`}
            element={<Agents />}
          />
          <Route
            path={`${ROUTES.DASHBOARD}${ROUTES.ARTICLES}`}
            element={<Articles />}
          />
          <Route
            path={`${ROUTES.DASHBOARD}${ROUTES.SETTINGS}`}
            element={<Settings />}
          />
          <Route
            path={`${ROUTES.DASHBOARD}${ROUTES.SUBSCRIPTION}`}
            element={<Subscription />}
          />
          <Route
            path={`${ROUTES.DASHBOARD}${ROUTES.OVERVIEW_TICKETS_DETAILS}`}
            element={<OverviewTicketsDetails />}
          />
          <Route
            path={`${ROUTES.DASHBOARD}${ROUTES.OVERVIEW_TASKS}`}
            element={<OverviewTasksPage />}
          />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Route>
        <Route element={<AuthFormLayout loggedIn={loggedIn} />}>
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
