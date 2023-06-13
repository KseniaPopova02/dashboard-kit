export const initialState = {
  currentUser: localStorage.getItem("currentUser") || [],
  loggedIn: JSON.parse(localStorage.getItem("loggedIn")) || false,
  chartAxisData: [],
  chartInfo: [],
  tickets: [],
  overviewInfo: [],
  tasksToShow: [],
};
