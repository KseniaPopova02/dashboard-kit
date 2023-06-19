import { actionTypes } from "../actionTypes";

const { TOGGLE_INPUT } = actionTypes;
const initialState = {
  isDisplayed: false,
};

export const topbarInputReducer = (
  state = initialState.isDisplayed,
  action
) => {
  switch (action.type) {
    case TOGGLE_INPUT:
      return !state;
    default:
      return state;
  }
};
