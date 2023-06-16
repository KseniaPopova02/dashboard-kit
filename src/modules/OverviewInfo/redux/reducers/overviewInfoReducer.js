import { actionTypes } from "../actionTypes";

const initialState = {
  overviewInfo: [],
};

export const overviewInfoReducer = (
  state = initialState.overviewInfo,
  action
) => {
  switch (action.type) {
    case actionTypes.SET_OVERVIEW_INFO:
      return action.payload;
    default:
      return state;
  }
};
