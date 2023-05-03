export const getTitle = (pathname) => {
  switch (pathname) {
    case "/dashboard/Overview":
      return "Overview";
    case "/dashboard/Tickets":
      return "Tickets";
    case "/dashboard/Ideas":
      return "Ideas";
    case "/dashboard/Contacts":
      return "Contacts";
    case "/dashboard/Agents":
      return "Agents";
    case "/dashboard/Articles":
      return "Articles";
    case "/dashboard/Settings":
      return "Settings";
    case "/dashboard/Subscription":
      return "Subscription";
    default:
      return "Error";
  }
};
