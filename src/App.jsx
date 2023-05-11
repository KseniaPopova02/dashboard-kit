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
} from "./pages";
import { ROUTES } from "./Routes/routes";
import { AuthFormLayout, MainLayout } from "./modules";
import { useLocalStorage } from "react-use";
import { useState } from "react";

const App = () => {
  const [loggedIn, setLoggedIn] = useLocalStorage("loggedIn", false);
  const [language, setLanguage] = useState("en");

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
    <Navigate to="/" />;
  };

  const updateLoggedIn = (value) => {
    setLoggedIn(value);
  };

  const handleLanguageChange = () => {
    if (language === "en") {
      setLanguage("ru");
    } else {
      setLanguage("en");
    }
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <MainLayout loggedIn={loggedIn} handleLogout={handleLogout} />
          }
        >
          {language === "ru" ? (
            <div>bletgorog meme</div>
          ) : (
            <>
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
                path={`${ROUTES.DASHBOARD}${ROUTES.NOT_FOUND}`}
                element={<NotFound />}
              />
            </>
          )}
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
