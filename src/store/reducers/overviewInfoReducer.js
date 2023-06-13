import { initialState } from "../initialState";

export const overviewInfoReducer = (
  state = initialState.overviewInfo,
  action
) => {
  switch (action.type) {
    case "SET_OVERVIEW_INFO":
      return action.payload;
    default:
      return state;
  }
};
