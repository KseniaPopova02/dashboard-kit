import { actionTypes } from "../actionTypes";

const initialState = {
  chartInfo: [],
};

export const chartInfoReducer = (state = initialState.chartInfo, action) => {
  switch (action.type) {
    case actionTypes.SET_CHART_INFO:
      return action.payload;
    default:
      return state;
  }
};
