// import { ROUTES } from "../../Routes/routes";

// export const getTitle = (pathname) => {
//   const {
//     DASHBOARD,
//     OVERVIEW,
//     TICKETS,
//     IDEAS,
//     CONTACTS,
//     AGENTS,
//     ARTICLES,
//     SETTINGS,
//     SUBSCRIPTION,
//   } = ROUTES;

//   switch (pathname.toLowerCase()) {
//     case `${DASHBOARD}/${OVERVIEW}`:
//       return "Overview";
//     case `${DASHBOARD}/${TICKETS}`:
//       return "Tickets";
//     case `${DASHBOARD}/${IDEAS}`:
//       return "Ideas";
//     case `${DASHBOARD}/${CONTACTS}`:
//       return "Contacts";
//     case `${DASHBOARD}/${AGENTS}`:
//       return "Agents";
//     case `${DASHBOARD}/${ARTICLES}`:
//       return "Articles";
//     case `${DASHBOARD}/${SETTINGS}`:
//       return "Settings";
//     case `${DASHBOARD}/${SUBSCRIPTION}`:
//       return "Subscription";
//     default:
//       return "404 Not Found";
//   }
// };

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
