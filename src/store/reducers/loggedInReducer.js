import { initialState } from "../initialState";

export const loggedInReducer = (state = initialState.loggedIn, action) => {
  switch (action.type) {
    case "SET_LOGGED_IN":
      return [...state, action.payload];
    default:
      return state;
  }
};
