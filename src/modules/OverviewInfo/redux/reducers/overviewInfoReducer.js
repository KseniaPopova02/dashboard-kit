import { actionTypes } from "../actionTypes";

const { SET_OVERVIEW_INFO } = actionTypes;

const initialState = {
  overviewInfo: [],
};

export const overviewInfoReducer = (
  state = initialState.overviewInfo,
  action
) => {
  switch (action.type) {
    case SET_OVERVIEW_INFO:
      return action.payload;
    default:
      return state;
  }
};
