import { initialState } from "../initialState";

export const currentUserReducer = (
  state = initialState.currentUser,
  action
) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      const jsonPayload = JSON.stringify(action.payload);
      localStorage.setItem("currentUser", jsonPayload);
      return action.payload;
    default:
      return state;
  }
};
