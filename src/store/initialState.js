export const initialState = {
  currentUser: null,
  loggedIn: JSON.parse(localStorage.getItem("loggedIn")) || false,
};
