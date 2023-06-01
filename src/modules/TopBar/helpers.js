import { ROUTES } from "../../routes/routes";

const routeTitles = {
  [ROUTES.OVERVIEW]: "Overview",
  [ROUTES.TICKETS]: "Tickets",
  [ROUTES.IDEAS]: "Ideas",
  [ROUTES.CONTACTS]: "Contacts",
  [ROUTES.AGENTS]: "Agents",
  [ROUTES.ARTICLES]: "Articles",
  [ROUTES.SETTINGS]: "Settings",
  [ROUTES.SUBSCRIPTION]: "Subscription",
  [ROUTES.OVERVIEW_TICKETS_DETAILS]: "Tickets details",
  [ROUTES.OVERVIEW_TASKS]: "Tasks to do",
};

export const getTitle = (pathname) => {
  const { DASHBOARD } = ROUTES;
  const path = pathname.replace(`${DASHBOARD}/`, "").toLowerCase();
  const title = routeTitles[`/${path}`];
  return title || "Error 404";
};

export const getValueFromLocalStorage = (key) => {
  try {
    const data = localStorage.getItem("currentUser");
    if (data !== null) {
      const parsedData = JSON.parse(data);
      return parsedData[key];
    }
  } catch (error) {
    console.log("Error retrieving value from localStorage:", error);
  }
  return undefined;
};
