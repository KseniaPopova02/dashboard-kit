import { actionTypes } from "../actionTypes";

const initialState = {
  axis: [],
};

export const chartAxisReducer = (state = initialState.axis, action) => {
  switch (action.type) {
    case actionTypes.SET_CHART_AXIS:
      return action.payload;
    default:
      return state;
  }
};
