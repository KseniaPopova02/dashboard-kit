import { actionTypes } from "../actionTypes";

const { SET_CHART_AXIS } = actionTypes;

const initialState = {
  axis: [],
};

export const chartAxisReducer = (state = initialState.axis, action) => {
  switch (action.type) {
    case SET_CHART_AXIS:
      return action.payload;
    default:
      return state;
  }
};
