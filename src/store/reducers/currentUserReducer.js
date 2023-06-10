import { initialState } from "../initialState";

export const currentUserReducer = (
  state = initialState.currentUser,
  action
) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.payload;
    default:
      return state;
  }
};
