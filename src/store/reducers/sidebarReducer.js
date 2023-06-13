import { initialState } from "../initialState";

export const sidebarReducer = (state = initialState.isOpen, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return !state;
    default:
      return state;
  }
};
