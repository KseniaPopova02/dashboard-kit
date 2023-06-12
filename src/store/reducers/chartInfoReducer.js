import { initialState } from "../initialState";

export const chartInfoReducer = (state = initialState.chartInfo, action) => {
  switch (action.type) {
    case "SET_CHART_INFO":
      return action.payload;
    default:
      return state;
  }
};
