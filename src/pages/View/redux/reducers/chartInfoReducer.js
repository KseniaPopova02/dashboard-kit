import { actionTypes } from "../actionTypes";

const { SET_CHART_INFO } = actionTypes;

const initialState = {
  chartInfo: [],
};

export const chartInfoReducer = (state = initialState.chartInfo, action) => {
  switch (action.type) {
    case SET_CHART_INFO:
      return action.payload;
    default:
      return state;
  }
};
