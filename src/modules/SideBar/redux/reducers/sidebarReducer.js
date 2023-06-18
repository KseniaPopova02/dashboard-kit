import { actionTypes } from "../actionTypes";

const { TOGGLE_SIDEBAR } = actionTypes;

const initialState = {
  isOpen: false,
};

export const sidebarReducer = (state = initialState.isOpen, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return !state;
    default:
      return state;
  }
};
