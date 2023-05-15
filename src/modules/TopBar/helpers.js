import { ROUTES } from "../../Routes/routes";

const routeTitles = {
  [ROUTES.OVERVIEW]: "Overview",
  [ROUTES.TICKETS]: "Tickets",
  [ROUTES.IDEAS]: "Ideas",
  [ROUTES.CONTACTS]: "Contacts",
  [ROUTES.AGENTS]: "Agents",
  [ROUTES.ARTICLES]: "Articles",
  [ROUTES.SETTINGS]: "Settings",
  [ROUTES.SUBSCRIPTION]: "Subscription",
};

export const getTitle = (pathname) => {
  const { DASHBOARD } = ROUTES;
  const path = pathname.replace(`${DASHBOARD}/`, "").toLowerCase();
  const title = routeTitles[`/${path}`];
  return title || "Error 404";
};
