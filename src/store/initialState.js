export const initialState = {
  currentUser: localStorage.getItem("currentUser") || [],
  loggedIn: localStorage.getItem("loggedIn") === "true",
};
