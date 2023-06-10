import { initialState } from "../initialState";

export const usersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};
